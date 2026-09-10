/**
 * Cloudflare Pages Function backing the contact form.
 *
 * Needs two environment variables set in the Cloudflare Pages dashboard
 * before it will send anything:
 *
 *   RESEND_API_KEY   an API key from resend.com
 *   CONTACT_TO       the address enquiries should land in
 *
 * Until those exist the form returns a clear error rather than failing
 * silently — the phone number and mailto link on the page always work.
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
}

const SUBJECTS: Record<string, string> = {
  feasibility: 'New scheme — feasibility or design',
  problem: 'Existing plant not performing',
  review: 'Second opinion on a design',
  hazop: 'HAZOP or risk study',
  training: 'Training',
  other: 'Other',
};

function reply(message: string, status: number): Response {
  return new Response(message, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply('Could not read the form submission.', 400);
  }

  const get = (key: string) => String(form.get(key) ?? '').trim();

  // Honeypot — bots fill every field they find.
  if (get('website')) return Response.redirect(new URL('/contact/thank-you', request.url).href, 303);

  const name = get('name');
  const email = get('email');
  const message = get('message');

  if (!name || !email || !message) {
    return reply('Please provide your name, email address and a message.', 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return reply('That email address does not look right.', 400);
  }
  if (message.length > 8000) {
    return reply('That message is too long — please email us directly.', 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
    return reply(
      'The enquiry form is not configured yet. Please call +44 7450 201927 or email info@waterna.co.uk.',
      503,
    );
  }

  const subject = SUBJECTS[get('subject')] ?? 'Website enquiry';
  const body = [
    `Name:    ${name}`,
    `Company: ${get('company') || '—'}`,
    `Email:   ${email}`,
    `Phone:   ${get('phone') || '—'}`,
    `Topic:   ${subject}`,
    '',
    message,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Waterna website <website@waterna.co.uk>',
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Website enquiry — ${subject}`,
      text: body,
    }),
  });

  if (!res.ok) {
    return reply(
      'We could not send that just now. Please call +44 7450 201927 or email info@waterna.co.uk.',
      502,
    );
  }

  return Response.redirect(new URL('/contact/thank-you', request.url).href, 303);
};
