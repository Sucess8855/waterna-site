export interface Pillar {
  slug: 'project-engineering' | 'plant-performance';
  title: string;
  strapline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  /** Short prompts a visitor can recognise themselves in. */
  signals: string[];
}

export const pillars: Pillar[] = [
  {
    slug: 'project-engineering',
    title: 'Project Engineering',
    strapline: 'Before it is built',
    summary:
      'Feasibility, process design, independent review and hazard studies — the engineering that decides whether a scheme works before anyone pours concrete.',
    metaTitle: 'Project Engineering for Water & Wastewater Treatment | Waterna',
    metaDescription:
      'Feasibility studies, process design, independent design review and HAZOP for water, effluent and sludge treatment schemes — vendor-neutral, with no equipment sales.',
    intro:
      'Almost everything that determines whether a treatment plant succeeds is decided before it exists — in the design basis, the options appraisal and the hazard study. This is the work that happens there.',
    body: [
      'A plant that cannot meet its consent, cannot be operated by the team you have, or costs twice what anyone budgeted to run was not failed by its equipment. It was failed by a decision taken early, usually on thin information, and usually because the person advising had something to sell.',
      'We take that stage seriously because it is the cheapest point at which anything can still change. A feasibility study costs a fraction of the scheme it evaluates. A hazard study costs a fraction of the incident it prevents. An independent read on a supplier proposal costs a fraction of the difference between the right technology and the convenient one.',
      'We specify no equipment and take no commission from suppliers, so the duties we write are the duties the process needs.',
    ],
    signals: [
      'You have a treatment problem but no scheme yet',
      'You have quotes that seem to say different things',
      'You need FEED deliverables an EPC contractor can bid against',
      'A design needs an independent read before it is committed',
      'A hazard study needs chairing by someone who did not do the design',
    ],
  },

  {
    slug: 'plant-performance',
    title: 'Plant Performance',
    strapline: 'Once it is running',
    summary:
      'Diagnosing and fixing plant that already exists, starting from the operating data it already produces — as a study, or continuously as software.',
    metaTitle: 'Plant Performance, Optimisation & Data Analysis | Waterna',
    metaDescription:
      'Troubleshooting, optimisation and data analysis for water and wastewater plant — diagnose why a works is failing its consent and fix the cause, not the symptom.',
    intro:
      'Plants rarely fail because the equipment is broken. Far more often the process is being asked to do something it was never designed for, or is running on settings nobody has revisited since handover. We find out which — starting from the data you already have.',
    body: [
      'Every plant records more than enough to explain its own behaviour: influent quality, chemical dose, sludge age, dissolved oxygen, differential pressure, energy per cubic metre. Most of it is filed for compliance and consulted only once something has gone wrong.',
      'Read against what the process ought to be doing, that same data usually names the constraint outright — and names it before the failure, while it is still a slowly rising dose rate rather than a consent breach. That is an engineering judgement rather than a statistical one, which is why this sits with process engineers.',
      'We look for the operational fix before the capital one. Where the honest answer is that you need to spend, we say so — but setpoints, control strategy and dose rates are cheaper to change than concrete, and they are where most of the recoverable performance is.',
    ],
    signals: [
      'A works is failing, or drifting toward failing, its consent',
      'Operating costs are climbing without an obvious cause',
      'Your team is troubleshooting reactively rather than ahead of problems',
      'A plant was commissioned and never properly proven',
      'You have years of operating data and no time to read it',
    ],
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
