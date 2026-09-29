import type { Glyph } from './icons';

/**
 * Content for the full service page layout. A service with this set is
 * shown with ServicePage; one without it keeps the simpler ServiceDetail.
 */
export interface ServicePageContent {
  sub: string;
  lede: string;
  /** Small line under the lede naming what the service applies to. */
  scope?: string;
  /** Basename in public/img/services. */
  image: { base: string; alt: string };
  /** Hero button label. Defaults to "Discuss your project". */
  heroCta?: string;
  /** Show the service's own icon beside the title. */
  heroIcon?: boolean;
  /** Set the title's line breaks, one entry per line, on wide screens. */
  titleLines?: string[];
  /** The same for the line under the title; sub stays as its plain text. */
  subLines?: string[];
  leadTitle: string;
  leadText: string;
  /** Situations the service fits, shown as a short checklist. Empty to omit. */
  fits: string[];
  /** "side" puts the checklist beside the lead; "row" runs it beneath. */
  fitsLayout?: 'side' | 'row';
  /** Optional numbered band of project stages, after the lead. */
  /**
   * "inline" sets each number beside its text on a white card; "plain" is
   * a white card with no number.
   */
  stages?: {
    title: string;
    /** Items without text show as short title-only cards. */
    items: { title: string; text?: string }[];
    layout?: 'stacked' | 'inline' | 'plain';
  };
  /** Optional side-by-side bulleted cards (e.g. UF and RO), after the lead. */
  compare?: { title: string; columns: { title: string; items: string[] }[]; note?: string };
  coversTitle: string;
  covers: { title: string; text: string; icon?: Glyph }[];
  /** Number the scope cards 01, 02… Defaults to true. */
  coversNumbered?: boolean;
  /** "top" puts each card's icon above its title; "side" beside it. */
  coversLayout?: 'top' | 'side';
  /** How scope card numbers look: small (default), round badges, large, or large and light. */
  coversNumberStyle?: 'small' | 'badge' | 'large' | 'light';
  /** divider: set the note off with a rule above it; columns: list columns (default 2). */
  receive: { text: string; items: string[]; note?: string; divider?: boolean; columns?: 1 | 2 };
  /** Optional product card in its own section, after "What you receive". */
  promo?: { eyebrow: string; title: string; text: string; label: string; href: string; image: string };
  /**
   * "split" puts the actions in a row beside the text; "stacked" below it;
   * "aside" beside it with the phone under the button.
   */
  cta: {
    title: string;
    text: string;
    layout?: 'split' | 'stacked' | 'aside';
    /** Button label. Defaults to "Discuss your project". */
    button?: string;
  };
  /**
   * Optional numbered steps before the call to action: "arrows" joins them
   * with arrows; "dividers" separates them with rules and badge numbers.
   */
  process?: {
    title: string;
    items: { title: string; text: string }[];
    layout?: 'arrows' | 'dividers';
    /** Show the step numbers in round badges. */
    badges?: boolean;
    /** A pointer to a related service, centred under the steps. */
    link?: { lead: string; label: string; href: string };
  };
  /**
   * "icons" shows icon, link and blurb; "large" is the same at a bigger
   * size; "tiles" shows bordered link tiles; "rows" makes each whole item
   * a link with the arrow at its far end; "cards" is the same in a bordered card.
   */
  relatedLayout?: 'icons' | 'large' | 'tiles' | 'rows' | 'cards' | 'text';
  /** Heading over the related links. Defaults to "Related services". */
  relatedTitle?: string;
  /**
   * Per-page wording for related links, keyed by service slug. Icons are
   * not overridable: a service shows the same icon wherever it appears.
   */
  relatedItems?: Record<string, { blurb: string }>;
}

export interface Service {
  slug: string;
  title: string;
  navTitle?: string;
  /** Which pillar this belongs to. */
  pillar: 'project-engineering' | 'plant-performance' | 'software';
  /** Set false to keep the content but drop the page from the site. */
  published?: boolean;
  /** Products live at their own top-level URL rather than under a pillar. */
  standalone?: boolean;
  /** Products read differently from services — see headings below. */
  kind?: 'service' | 'product';
  /** Override the three section headings on the detail page. */
  headings?: { why: string; covered: string; deliverables: string };
  summary: string;
  /**
   * Page content. A service with no intro is listed across the site but has
   * no page of its own yet, so it is rendered as plain text rather than a
   * link. Fill these in and the route appears automatically.
   */
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  why?: string[];
  covered?: [string, string][];
  deliverables?: string;
  related?: string[];
  /** A few words describing the service, for related-service links. */
  blurb?: string;
  page?: ServicePageContent;
}

export const services: Service[] = [
  {
    slug: 'feasibility-studies',
    pillar: 'project-engineering',
    title: 'Feasibility Studies',
    summary:
      'Establish whether a treatment scheme is technically sound and financially worth building — before you commit capital.',
    metaTitle: 'Water Treatment Feasibility Studies | Waterna',
    metaDescription:
      'Independent feasibility studies for water and wastewater treatment schemes — options appraisal, capex and opex modelling, and a clear recommendation before you commit capital.',
    intro:
      'The cheapest point to change your mind about a treatment scheme is before it is designed. A feasibility study establishes whether the project is technically sound and financially worth building — and which of the obvious options is actually the right one.',
    why: [
      'Most treatment projects that disappoint were decided too early. A technology gets selected on a supplier visit or a plant tour, the design is built around it, and the difficulties only become visible at commissioning — when changing course is expensive.',
      'A feasibility study puts a deliberate pause between the problem and the purchase order. It costs a fraction of the scheme it evaluates, and it is the most effective way to avoid buying a plant that cannot meet its consent, cannot be operated by your team, or costs far more to run than anyone budgeted for.',
    ],
    covered: [
      [
        'Water source and demand',
        'Characterising the raw water or effluent, establishing design flows, and testing the peaks that actually size the plant.',
      ],
      [
        'Treatment options appraisal',
        'A shortlist of viable process routes, compared on performance, footprint, operability and risk — not on which supplier called first.',
      ],
      [
        'Capex and opex modelling',
        'Budget capital estimates alongside chemical, energy, labour and disposal costs, so the whole-life picture is visible before you commit.',
      ],
      [
        'Regulatory and environmental review',
        'Discharge consents, trade effluent agreements, permitting obligations and the constraints they place on the design.',
      ],
      [
        'Site and stakeholder constraints',
        'Available land, existing assets worth reusing, utility limits, access, and what your operations team can realistically run.',
      ],
      [
        'A clear recommendation',
        'A written report with a recommended option, the reasoning behind it, and the risks we would want closed out at the next stage.',
      ],
    ],
    deliverables:
      'A written feasibility report you can put in front of a board, a lender or a regulator: the options considered, how they compare, what we recommend, what it will cost to build and to run, and the specific risks that need closing out before detailed design begins. If the honest answer is that the project does not stack up, the report says so.',
    related: ['design-services', 'technical-procurement-support', 'independent-review'],
    blurb: 'Compare options before you commit.',
    page: {
      sub: 'A clear basis for your next investment.',
      lede: 'Assess treatment options, understand costs and identify risks before committing to design and procurement.',
      scope: 'Water, wastewater and sludge treatment, including UF and RO desalination.',
      image: {
        base: 'feasibility-studies',
        alt: 'Two engineers reviewing process drawings and cost charts at a desk overlooking a treatment works',
      },
      leadTitle: 'Compare options before you commit.',
      leadText:
        'We assess technical viability, operating requirements and whole-life costs to help you select a suitable treatment approach.',
      fits: [
        'New treatment schemes',
        'Capacity upgrades and replacement assets',
        'Water reuse and changing treatment requirements',
      ],
      coversTitle: 'What the study covers',
      covers: [
        { icon: 'drop', title: 'Water quality and design basis', text: 'Review flows, loads, variability and treatment targets.' },
        { icon: 'gears', title: 'Treatment options appraisal', text: 'Compare viable processes, performance, operability and footprint.' },
        { icon: 'coins', title: 'Capital and operating costs', text: 'Assess budget costs, whole-life costs and key sensitivities.' },
        { icon: 'doc', title: 'Regulatory and environmental requirements', text: 'Identify quality targets, discharge constraints and permitting needs.' },
        { icon: 'map', title: 'Site and operational constraints', text: 'Review existing assets, utilities, access and maintenance requirements.' },
        { icon: 'alert', title: 'Risks and further investigations', text: 'Identify data gaps, testing needs and next-stage priorities.' },
      ],
      receive: {
        text: 'A practical feasibility report to support your next investment decision.',
        items: [
          'Design basis and assumptions',
          'Comparison of viable options',
          'Budget capital and operating costs',
          'Recommended option and rationale',
          'Key risks and information gaps',
          'Next steps for project development',
        ],
        note: 'Cost estimates reflect the information available and the agreed study scope.',
      },
      cta: {
        title: 'Let’s assess your treatment options.',
        text: 'Tell us about your project, treatment targets and available information.',
      },
    },
  },

  {
    slug: 'design-services',
    pillar: 'project-engineering',
    title: 'Design Services',
    summary:
      'Process and engineering design, from block flow diagrams and mass balances through to equipment specification and P&IDs.',
    metaTitle: 'Water & Wastewater Treatment Design Services | Waterna',
    metaDescription:
      'Process design for water, effluent and sludge treatment — mass balances, PFDs, P&IDs, hydraulic profiles, equipment datasheets and full FEED deliverables.',
    intro:
      'Design is where a treatment concept becomes something a contractor can price and a team can build. We produce the process engineering that sits underneath it — the mass balance, the flow schemes, the equipment duties and the drawings — at whatever depth your stage of project requires.',
    why: [
      'A treatment plant is only as good as the basis it was designed to. Get the design flows, the load peaks or the sludge production wrong and no amount of good equipment will rescue the result. The discipline that prevents this is unglamorous: a defensible mass balance, honest peaking factors, and a hydraulic profile that has actually been checked.',
      'We work at concept, pre-FEED and FEED level, either producing the deliverables ourselves or extending your own engineering team. Because we specify no equipment of our own, the duties we write are the duties the process needs — not the duties that suit a particular supplier’s standard package.',
    ],
    covered: [
      [
        'Basis of design',
        'The document everything else depends on: design flows, influent and effluent quality, redundancy philosophy, design life and the assumptions behind each.',
      ],
      [
        'Mass and water balances',
        'Whole-site balances across water, effluent, sludge and utilities, at the level of detail the project stage justifies.',
      ],
      [
        'Process flow diagrams and P&IDs',
        'Block flow diagrams through to fully developed P&IDs with control philosophy, instrumentation and interlocks.',
      ],
      [
        'Hydraulic profile and tank sizing',
        'Level-by-level hydraulics across the works, tank and channel sizing, and the checks that stop a plant backing up at peak flow.',
      ],
      [
        'Equipment specification and datasheets',
        'Duty specifications and datasheets written to the process requirement, suitable for competitive tendering.',
      ],
      [
        'FEED deliverables',
        'Complete front-end engineering design packages, including the documentation an EPC contractor needs to bid the work accurately.',
      ],
    ],
    deliverables:
      'A design package matched to your project stage — from a concept report and block flow diagram through to a full FEED deliverable set with P&IDs, datasheets, mass balance and basis of design. Everything is written so a third party can tender against it without depending on us to interpret it.',
    related: ['feasibility-studies', 'independent-review', 'hazop'],
    blurb: 'From feasibility to detailed design.',
    page: {
      sub: 'Turn treatment concepts into practical engineering.',
      lede: 'Process engineering for new plants and system upgrades, from concept development through to front-end engineering design.',
      scope: 'Water, wastewater and sludge treatment, including UF and RO desalination.',
      image: {
        base: 'design-services',
        alt: 'A scale model of a treatment works on a desk covered with process drawings',
      },
      heroCta: 'Discuss your design requirements',
      leadTitle: 'A sound design basis. Clear engineering deliverables.',
      leadText:
        'We translate treatment requirements into calculations, drawings and specifications that support the next stage of your project.',
      fits: [
        'Defined operating conditions',
        'Practical operation and maintenance',
        'Clear equipment and discipline interfaces',
      ],
      fitsLayout: 'row',
      stages: {
        title: 'Support at each project stage',
        items: [
          { title: 'Concept design', text: 'Establish the treatment approach and preliminary process requirements.' },
          { title: 'Pre-FEED', text: 'Develop the preferred option and resolve key design uncertainties.' },
          { title: 'FEED', text: 'Define process requirements for tendering and further engineering.' },
        ],
      },
      coversTitle: 'What our design services cover',
      coversNumbered: false,
      covers: [
        { icon: 'doc', title: 'Basis of design', text: 'Define flows, loads, treatment targets and operating scenarios.' },
        { icon: 'bars', title: 'Mass and water balances', text: 'Quantify process streams, recycles, residuals and utility demands.' },
        { icon: 'hierarchy', title: 'Process diagrams and controls', text: 'Develop flow diagrams, P&IDs and process control requirements.' },
        { icon: 'drop', title: 'Hydraulics and process sizing', text: 'Assess head losses, hydraulic profiles and treatment capacities.' },
        { icon: 'gear', title: 'Equipment specifications', text: 'Define equipment duties and prepare process datasheets.' },
        { icon: 'link', title: 'Integration and design interfaces', text: 'Coordinate tie-ins, utilities and requirements for other disciplines.' },
      ],
      receive: {
        text: 'A process engineering package matched to your project stage and agreed scope.',
        items: [
          'Design basis and calculations',
          'Mass and water balances',
          'Process diagrams and P&IDs',
          'Hydraulic and sizing calculations',
          'Equipment duty specifications',
          'Control philosophy and interfaces',
        ],
        note: 'Deliverables, design maturity and discipline responsibilities are agreed at the outset.',
        divider: true,
      },
      cta: {
        title: 'Let’s define your design requirements.',
        text: 'Tell us about your treatment system, project stage and required deliverables.',
        layout: 'stacked',
      },
      relatedLayout: 'large',
      relatedItems: {
        'feasibility-studies': {
          blurb: 'Compare treatment options and establish a basis for investment.',
        },
        'independent-review': {
          blurb: 'Assess your design against process and operating requirements.',
        },
        hazop: { blurb: 'Identify process hazards and operability issues.' },
      },
    },
  },

  {
    slug: 'technical-procurement-support',
    pillar: 'project-engineering',
    title: 'Technical Procurement Support',
    navTitle: 'Procurement Support',
    summary:
      'Turning a design into a tender package and a supplier into a contract — specifications, bid evaluation, technical clarifications and factory acceptance testing.',
    metaTitle: 'Technical Procurement Support for Treatment Plant | Waterna',
    metaDescription:
      'Independent technical procurement support for water and wastewater treatment equipment and packages — tender specifications, bid evaluation, technical clarifications and acceptance testing.',
    intro:
      'A good design can still end up as the wrong plant if the tender lets suppliers quote to their own standard rather than to your duty. We write the technical side of the tender, evaluate what comes back on a like-for-like basis, and hold the chosen supplier to what was specified.',
    why: [
      'Treatment packages are rarely bought on price alone, but they are often compared as if they were. Two bids can quote the same flow and differ in the design loads they assumed, the pretreatment they left out, the consumables they priced and the performance they are prepared to guarantee. Unless the tender fixes those points, the cheapest bid is often simply the one that included least.',
      'Because we hold no supplier agreements, our only interest is that the package you buy does the job in the specification. That independence matters most at the moment of choosing between suppliers.',
    ],
    covered: [
      [
        'Technical specifications',
        'Duty, performance and scope requirements written to the process need, clear enough that every bidder is pricing the same thing.',
      ],
      [
        'Tender package preparation',
        'Scope of supply, battery limits, performance guarantees, datasheets and the documentation bidders must return.',
      ],
      [
        'Bid evaluation',
        'Technical compliance checks and normalisation of competing bids onto a common basis, including whole-life operating cost.',
      ],
      [
        'Technical clarifications',
        'Raising and resolving the questions each bid leaves open, so exclusions and assumptions are visible before award.',
      ],
      [
        'Supplier document review',
        'Checking vendor drawings, datasheets and calculations against the specification after award.',
      ],
      [
        'Acceptance testing',
        'Factory and site acceptance test procedures, and witnessing where required, before equipment is accepted.',
      ],
    ],
    deliverables:
      'A tender-ready technical package, a written bid evaluation with a clear recommendation and the reasoning behind it, and a record of clarifications and test results you can hold the supplier to.',
    related: ['feasibility-studies', 'design-services', 'independent-review'],
    blurb: 'Technical input through tender and award.',
    page: {
      sub: 'Clear requirements. Informed supplier selection.',
      lede: 'Technical support for tender preparation, bid evaluation and supplier follow-up across water, wastewater and sludge treatment, including UF and RO desalination.',
      image: {
        base: 'technical-procurement-support',
        alt: 'A skid-mounted treatment package with pumps and pressure vessels in a fabrication workshop',
      },
      heroCta: 'Discuss your procurement needs',
      heroIcon: true,
      leadTitle: 'Compare proposals on a consistent basis.',
      leadText:
        'We help you understand differences in scope, design assumptions, performance commitments and operating costs before selecting a supplier.',
      fits: ['Clear scope and interfaces', 'Comparable technical bids', 'Documented decisions and actions'],
      fitsLayout: 'row',
      stages: {
        title: 'Support through the procurement process',
        layout: 'inline',
        items: [
          { title: 'Prepare the tender', text: 'Define technical requirements and bidder deliverables.' },
          { title: 'Evaluate proposals', text: 'Compare offers and resolve technical clarifications.' },
          { title: 'Follow through after award', text: 'Review supplier documents and support acceptance testing.' },
        ],
      },
      coversTitle: 'What our support covers',
      coversNumbered: false,
      coversLayout: 'side',
      covers: [
        { icon: 'docSearch', title: 'Technical specifications', text: 'Define equipment duties, operating conditions and performance requirements.' },
        { icon: 'doc', title: 'Tender package preparation', text: 'Set scope boundaries, interfaces and required bidder information.' },
        { icon: 'gear', title: 'Technical bid evaluation', text: 'Compare compliance, exclusions and whole-life cost assumptions.' },
        { icon: 'chat', title: 'Technical clarifications', text: 'Record queries, resolve discrepancies and track outstanding points.' },
        { icon: 'clipboard', title: 'Supplier document review', text: 'Review drawings, datasheets and calculations against agreed requirements.' },
        { icon: 'chartBox', title: 'Acceptance testing support', text: 'Review test procedures and witness agreed factory or site tests.' },
      ],
      receive: {
        text: 'A documented technical basis for procurement and supplier follow-up.',
        items: [
          'Tender specifications and datasheets',
          'Technical bid comparison',
          'Clarification and deviation register',
          'Supplier selection recommendation',
          'Document review comments',
          'Test findings and outstanding actions',
        ],
        note: 'Deliverables are agreed to suit your procurement stage and scope.',
        divider: true,
      },
      cta: {
        title: 'Let’s clarify your procurement requirements.',
        text: 'Tell us what you are buying, your project stage and the support you need.',
        layout: 'aside',
      },
      relatedLayout: 'rows',
      relatedItems: {
        'feasibility-studies': { blurb: 'Compare options before procurement.' },
        'design-services': { blurb: 'Define process duties and specifications.' },
        'independent-review': { blurb: 'Assess proposed designs and technical risks.' },
      },
    },
  },

  {
    slug: 'independent-review',
    pillar: 'project-engineering',
    title: 'Independent Design Review',
    navTitle: 'Independent Design Review',
    summary:
      'Independent technical review, vendor-neutral equipment evaluation and design-stage support for your project team.',
    metaTitle: 'Independent Design Review & Technical Audit | Waterna',
    metaDescription:
      'Vendor-neutral technical review of water and wastewater treatment designs, tender evaluation, and specialist process engineering support for project teams.',
    intro:
      'Sometimes what a project needs is not a new design but an independent read on the one it already has. We review, challenge and support — whether that means auditing a supplier’s proposal, evaluating tenders, or covering a specialist gap in your own team.',
    why: [
      'Treatment plant proposals are written by the people selling them. That is not dishonest, but it does mean the guarantees, the exclusions and the assumptions behind a quoted performance figure deserve reading by someone whose fee does not depend on the order being placed.',
      'We are frequently brought in at the point where a client has three proposals that appear to say different things and no way to compare them. Normalising those onto a common basis — same flows, same loads, same battery limits, same whole-life cost horizon — usually changes which one looks best.',
    ],
    covered: [
      [
        'Design review and technical audit',
        'A structured review of an existing or proposed design against the duty it must actually perform, with findings ranked by consequence.',
      ],
      [
        'Tender and proposal evaluation',
        'Normalising competing bids onto a common basis so they can be compared on merit rather than on presentation.',
      ],
      [
        'Vendor-neutral technology selection',
        'An assessment of which process route fits your water, your site and your operators — we hold no supplier agreements.',
      ],
      [
        'Adequacy and debottlenecking studies',
        'Whether existing assets can absorb a new load or an expansion, and what specifically constrains them if not.',
      ],
      [
        'Owner’s engineer support',
        'Acting for you through design and construction, reviewing contractor submissions and holding the design to its basis.',
      ],
      [
        'Expert input and second opinions',
        'Specialist process engineering brought in for a defined question, without taking on the whole project.',
      ],
    ],
    deliverables:
      'A written technical opinion with findings ranked by consequence, the evidence behind each, and a clear recommendation. Where we disagree with an existing design we say why, and what we would do instead.',
    related: ['design-services', 'technical-procurement-support', 'hazop'],
    blurb: 'An expert view on your design.',
    page: {
      titleLines: ['Independent', 'Design Review'],
      heroIcon: true,
      sub: 'An independent assessment of your treatment design.',
      lede: 'Review design assumptions, process sizing and operating requirements before key project decisions.',
      scope: 'Water, wastewater and sludge treatment, including UF and RO desalination.',
      image: {
        base: 'independent-review',
        alt: 'A process drawing marked up with review comments, beside a calculation sheet and a tablet listing design review items',
      },
      heroCta: 'Discuss your design review',
      leadTitle: 'Understand the design. Identify what needs attention.',
      leadText:
        'We assess the proposed design against its intended duty, explain the significance of our findings and recommend practical next steps.',
      fits: [
        'Check assumptions and calculations',
        'Identify constraints and omissions',
        'Prioritise review actions',
      ],
      fitsLayout: 'row',
      stages: {
        title: 'When an independent review helps',
        layout: 'plain',
        items: [
          { title: 'Before a design milestone', text: 'Resolve key questions before the project progresses.' },
          { title: 'Before an upgrade', text: 'Assess existing capacity and proposed changes.' },
          { title: 'When specialist input is needed', text: 'Investigate a defined process engineering concern.' },
        ],
      },
      coversTitle: 'What we review',
      covers: [
        { title: 'Design basis and assumptions', text: 'Flows, loads, treatment targets and operating scenarios.' },
        { title: 'Process selection and sizing', text: 'Treatment suitability, calculations and equipment capacity.' },
        { title: 'Hydraulics and interfaces', text: 'Head losses, recycles, tie-ins and utility requirements.' },
        { title: 'Operability and maintenance', text: 'Control philosophy, standby arrangements and cleaning needs.' },
        { title: 'Performance and technical risks', text: 'Design evidence, stated commitments and unresolved issues.' },
        { title: 'Existing assets and upgrades', text: 'Capacity constraints and integration of proposed changes.' },
      ],
      receive: {
        text: 'A clear technical report with evidence, priorities and recommended actions.',
        items: [
          'Review scope and documents assessed',
          'Findings and supporting evidence',
          'Prioritised technical actions',
          'Recommended checks or changes',
          'Assumptions and information gaps',
          'Responses and closure status, where agreed',
        ],
        note: 'The review depth and assessment criteria are agreed at the outset.',
      },
      process: {
        title: 'A structured review, with clear follow-up',
        items: [
          { title: 'Agree the scope', text: 'Define objectives, key questions and documents to be reviewed.' },
          { title: 'Assess the design', text: 'Review the design, calculations and supporting information.' },
          { title: 'Discuss findings and actions', text: 'Explain the results and agree recommended next steps.' },
        ],
      },
      cta: {
        title: 'Let’s review your treatment design.',
        text: 'Share your project stage, available documents and the questions you need answered.',
        button: 'Discuss your review',
      },
      relatedLayout: 'rows',
      relatedItems: {
        'design-services': { blurb: 'Develop process calculations and specifications.' },
        'technical-procurement-support': { blurb: 'Prepare tenders and evaluate supplier proposals.' },
        hazop: { blurb: 'Review process hazards and operability issues.' },
      },
    },
  },

  {
    slug: 'hazop',
    pillar: 'project-engineering',
    title: 'HAZOP & Risk Studies',
    summary:
      'Structured hazard and operability studies, chaired independently, with actions tracked through to close-out.',
    metaTitle: 'HAZOP Studies for Water & Effluent Plant | Waterna',
    metaDescription:
      'Independently chaired HAZOP and hazard studies for water, wastewater and sludge treatment plant — full node-by-node examination with actions tracked to close-out.',
    intro:
      'A HAZOP is a structured, node-by-node examination of a design, asking what happens when it does not behave as intended. We chair the study, keep it rigorous, and make sure the actions it generates are specific enough to actually close.',
    why: [
      'Water and effluent plants carry hazards that are easy to underrate: chlorine and other hazardous chemicals, confined spaces, biogas and hydrogen sulphide, high-pressure membrane systems, and pumps that can flood a site if a level signal fails. Anaerobic digestion in particular brings an explosive atmosphere onto a site that may not otherwise handle one.',
      'A HAZOP is only as good as its chair. A study that runs late, drifts off the guide words, or generates vague actions like "consider reviewing" has consumed everyone’s time without reducing risk. Independent chairing matters here — the designer is the last person who should be judging whether the design is sound.',
    ],
    covered: [
      [
        'Study preparation',
        'Node definition, drawing readiness checks and a circulated scope, so the session starts with everything it needs.',
      ],
      [
        'Independent chairing',
        'A disciplined guide-word examination that keeps to the method and to time, with a dedicated scribe.',
      ],
      [
        'Deviation and consequence analysis',
        'Systematic examination of each deviation, its causes, its consequences and the safeguards already present.',
      ],
      [
        'Risk ranking',
        'Consequence and likelihood assessed against your own risk matrix, so results integrate with your existing process.',
      ],
      [
        'Specific, closable actions',
        'Actions written with an owner and an unambiguous test for completion — never "consider" or "review as appropriate".',
      ],
      [
        'Close-out tracking',
        'Follow-up through to the point where every action is demonstrably closed, with the evidence recorded.',
      ],
    ],
    deliverables:
      'A full HAZOP report with the node worksheets, the risk ranking, and an action register written so each item can be closed and evidenced. We can also run the close-out review once actions have been addressed.',
    related: ['design-services', 'independent-review', 'feasibility-studies'],
    page: {
      titleLines: ['HAZOP &', 'Risk Studies'],
      heroIcon: true,
      sub: 'Structured reviews. Clear actions.',
      lede: 'Independent HAZOP chairing for water, wastewater and sludge treatment, including UF, RO desalination and anaerobic digestion.',
      scope: 'Identify hazards and operability issues through a focused, multidisciplinary review.',
      image: {
        base: 'hazop',
        alt: 'An engineer leading a HAZOP session in front of a process drawing on a wall screen',
      },
      heroCta: 'Discuss your study',
      leadTitle: 'A focused review of how the plant could deviate from its intended operation.',
      leadText:
        'We bring structure to the discussion, draw on the team’s experience and document findings and recommendations clearly.',
      fits: ['Prepared study scope', 'Relevant technical participation', 'Actions with defined ownership'],
      fitsLayout: 'row',
      stages: {
        title: 'When a study can help',
        layout: 'plain',
        items: [
          { title: 'New treatment systems', text: 'Review a sufficiently developed design before implementation.' },
          { title: 'Plant modifications', text: 'Examine changes to equipment, controls or operating conditions.' },
          { title: 'Existing installations', text: 'Review defined systems using current plant information.' },
        ],
      },
      coversTitle: 'What our support covers',
      coversNumberStyle: 'badge',
      covers: [
        { title: 'Study preparation', text: 'Agree scope, nodes, documentation and participants.' },
        { title: 'Independent chairing and recording', text: 'Facilitate a structured guide-word review and capture the discussion.' },
        { title: 'Deviations and safeguards', text: 'Examine causes, consequences and existing safeguards.' },
        { title: 'Risk assessment', text: 'Apply the agreed criteria and risk matrix where required.' },
        { title: 'Action definition', text: 'Record clear recommendations, owners and completion requirements.' },
        { title: 'Close-out support', text: 'Track responses and review supporting evidence where commissioned.' },
      ],
      receive: {
        text: 'A documented study record and an action register your team can work through.',
        items: [
          'Scope, team and reference documents',
          'Node worksheets and findings',
          'Recorded causes and consequences',
          'Safeguards and risk rankings, where used',
          'Actions, owners and target dates',
          'Close-out status, where included',
        ],
        note: 'Implementation and action approval follow the agreed project responsibilities.',
        columns: 1,
      },
      process: {
        title: 'From preparation to follow-up',
        layout: 'dividers',
        badges: true,
        items: [
          { title: 'Prepare', text: 'Agree scope, gather documentation and confirm participants.' },
          { title: 'Facilitate and record', text: 'Chair the study, capture discussion and agree actions.' },
          { title: 'Report and follow up', text: 'Issue the study record and support action close-out where commissioned.' },
        ],
      },
      cta: {
        title: 'Let’s plan your HAZOP study.',
        text: 'Tell us about your system, project stage, available drawings and intended timing.',
        button: 'Discuss your study',
      },
      relatedLayout: 'cards',
      relatedItems: {
        'design-services': { blurb: 'Develop process drawings and specifications.' },
        'independent-review': { blurb: 'Assess assumptions, sizing and technical risks.' },
        'feasibility-studies': { blurb: 'Compare treatment options and constraints.' },
      },
    },
  },

  {
    slug: 'plant-optimisation',
    pillar: 'plant-performance',
    title: 'Plant Troubleshooting & Optimisation',
    navTitle: 'Troubleshooting & Optimisation',
    summary:
      'Get an underperforming plant back within consent — or commission a new one properly the first time.',
    metaTitle: 'Plant Commissioning & Process Optimisation | Waterna',
    metaDescription:
      'Troubleshooting, commissioning and optimisation for water and wastewater treatment plant — diagnose why a works is failing its consent and fix the cause, not the symptom.',
    intro:
      'Plants that fail their consent rarely fail because the equipment is broken. Far more often the process is being asked to do something it was never designed for, or is being run on settings nobody has revisited since handover. We find out which, and fix the cause.',
    why: [
      'Underperformance is usually diagnosable from data you already have. Influent records, chemical consumption, sludge age, dissolved oxygen profiles and power draw between them tell a fairly complete story — but only if someone reads them against what the process should be doing rather than against last month.',
      'Commissioning is the other point where whole-life performance is decided. A plant that is signed off on a single favourable day, without seasonal load or a proper performance test, will surface its problems later — usually after the contractor’s liability has expired.',
    ],
    covered: [
      [
        'Process troubleshooting',
        'Diagnosing why a works is failing — settlement problems, nitrification loss, filamentous bulking, foaming, membrane fouling or hydraulic overload.',
      ],
      [
        'Performance data analysis',
        'Reading your existing operating records against what the process should be achieving, to locate the constraint.',
      ],
      [
        'Commissioning support',
        'Commissioning plans, performance test procedures and witnessing, so a new plant is proven before the contractor leaves site.',
      ],
      [
        'Chemical and energy optimisation',
        'Reducing dose rates, aeration energy and sludge disposal cost without putting the consent at risk.',
      ],
      [
        'Control strategy review',
        'Setpoints, control philosophy and SCADA configuration — often the cheapest available improvement.',
      ],
      [
        'Debottlenecking',
        'Identifying what actually limits capacity, and what the smallest intervention is that removes it.',
      ],
    ],
    deliverables:
      'A diagnosis supported by your own data, a ranked set of interventions with expected effect and cost, and support implementing them. Where the answer is a capital fix we say so — but we look for the operational one first.',
    related: ['independent-review', 'feasibility-studies', 'design-services'],
    page: {
      titleLines: ['Troubleshooting &', 'Optimisation'],
      sub: 'Understand the cause. Improve the performance.',
      lede: 'Practical process engineering support to investigate underperformance, identify constraints and plan improvements.',
      scope: 'Water, wastewater and sludge treatment, including UF and RO desalination.',
      image: {
        base: 'plant-optimisation',
        alt: 'An engineer in a hard hat checking plant data on a tablet beside pumps and pipework',
      },
      heroCta: 'Discuss your plant performance',
      leadTitle: 'Build a clear picture of what is limiting performance.',
      leadText:
        'We combine operating records, process calculations and site observations to investigate causes and identify practical next steps.',
      fits: ['Evidence-based investigation', 'Prioritised recommendations', 'Measured follow-up'],
      fitsLayout: 'row',
      stages: {
        title: 'When we can help',
        layout: 'plain',
        items: [
          { title: 'Inconsistent treated water quality' },
          { title: 'Reduced throughput or recovery' },
          { title: 'Rising energy or chemical use' },
          { title: 'Recurring process instability' },
          { title: 'Frequent fouling or cleaning' },
          { title: 'Capacity constraints as loads change' },
        ],
      },
      coversTitle: 'What our support covers',
      coversNumberStyle: 'large',
      covers: [
        { title: 'Process troubleshooting', text: 'Investigate performance changes and distinguish potential causes.' },
        { title: 'Operating data assessment', text: 'Review trends, data quality and gaps in the available evidence.' },
        { title: 'Chemical and energy optimisation', text: 'Assess opportunities to improve resource use within treatment requirements.' },
        { title: 'Process control review', text: 'Examine setpoints, operating sequences and instrument feedback.' },
        { title: 'Capacity and bottleneck assessment', text: 'Identify constraints and compare operational or equipment changes.' },
        { title: 'Improvement trials and follow-up', text: 'Define agreed trials and assess performance after changes.' },
      ],
      receive: {
        text: 'A practical assessment and a prioritised plan for improvement.',
        items: [
          'Findings and supporting evidence',
          'Likely causes and uncertainties',
          'Ranked improvement options',
          'Expected benefits and trade-offs',
          'Further monitoring or testing needs',
          'Implementation and review priorities',
        ],
        note: 'Deliverables and follow-up support are agreed around your plant and objectives.',
        divider: true,
      },
      process: {
        title: 'From investigation to improvement',
        badges: true,
        items: [
          { title: 'Understand the issue', text: 'Review symptoms, history and available information.' },
          { title: 'Assess the evidence', text: 'Check potential causes and identify what needs verification.' },
          { title: 'Agree and review actions', text: 'Prioritise changes and evaluate their results.' },
        ],
        link: {
          lead: 'Starting up a new plant? Explore',
          label: 'Commissioning & Testing',
          href: '/plant-performance/commissioning-performance-testing',
        },
      },
      cta: {
        title: 'Let’s discuss what has changed at your plant.',
        text: 'Tell us about the symptoms, your treatment targets and the information available.',
        button: 'Discuss your plant performance',
        layout: 'aside',
      },
      relatedLayout: 'rows',
      relatedItems: {
        'independent-review': { blurb: 'Assess design assumptions and technical constraints.' },
        'feasibility-studies': { blurb: 'Compare options for upgrades and investment.' },
        'design-services': { blurb: 'Develop the engineering for agreed modifications.' },
      },
    },
  },

  {
    slug: 'training',
    pillar: 'project-engineering',
    published: false,
    title: 'Training',
    summary:
      'Practical operator and engineer training built around your plant, your consents and your control system.',
    metaTitle: 'Water & Wastewater Treatment Training | Waterna',
    metaDescription:
      'Practical process training for water and wastewater operators and engineers, built around your own plant, your own consents and your own control system.',
    intro:
      'Generic treatment training teaches the theory of a plant nobody operates. We build training around your works — your process, your consent limits, your chemicals and your SCADA screens — so what people learn on the day is what they use the following week.',
    why: [
      'A well-designed plant run by a team who do not understand why it is configured the way it is will drift. Setpoints get changed to solve a short-term problem and never changed back; alarms get acknowledged rather than investigated. Much of the optimisation work we are called in to do could have been prevented by training at handover.',
      'The other case for training is retention of knowledge. Small operations teams often carry critical process understanding in one or two people. When they leave, it goes with them unless it has been written down and taught.',
    ],
    covered: [
      [
        'Process fundamentals',
        'What each stage of your works is doing and why, pitched at the level of the people in the room.',
      ],
      [
        'Operating your plant',
        'Normal operation, start-up and shutdown, and the routine checks that catch problems early.',
      ],
      [
        'Troubleshooting',
        'Recognising settlement problems, bulking, foaming, nitrification loss and fouling — and what to do first.',
      ],
      [
        'Chemical handling and safety',
        'Safe handling, dosing control and the specific hazards of the chemicals on your site.',
      ],
      [
        'Consent and compliance',
        'What your permit actually requires, what sampling proves it, and what to do when a result comes back out of limits.',
      ],
      [
        'Control systems',
        'Working through your own SCADA or control screens rather than a generic simulator.',
      ],
    ],
    deliverables:
      'A training package written around your site, delivered on site or remotely, with written material your team keeps. Where useful we produce operating procedures alongside it, so the knowledge stays after the session ends.',
    related: ['plant-optimisation', 'data-analysis', 'independent-review'],
  },

  {
    slug: 'uf-ro-performance-assessment',
    pillar: 'plant-performance',
    title: 'UF & RO Performance Assessment',
    summary:
      'A point-in-time engineering assessment of membrane performance — normalisation, fouling and scaling indices, recovery and specific energy, with a baseline later operation can be judged against.',
    metaTitle: 'UF & RO Membrane Performance Assessment | Waterna',
    metaDescription:
      'Independent engineering assessment of ultrafiltration and reverse osmosis systems — normalised performance, fouling and scaling, pretreatment, cleaning effectiveness and specific energy.',
    intro:
      'Membrane systems rarely fail suddenly. Permeability falls, differential pressure creeps up and cleans become more frequent, and each change looks small on its own. We assess UF and RO systems on a normalised basis to establish what condition the membranes are really in, and why.',
    why: [
      'Raw operating figures mislead on membrane plant. Permeate flow and pressure move with temperature, feed salinity and recovery, so a train can look stable while it is fouling, or look worse while nothing has changed. Normalising the data is the only way to see the underlying trend.',
      'Most membrane problems start upstream. Fouling, scaling and early replacement usually trace back to pretreatment, chemical dosing or the way the plant is operated, rather than to the membranes themselves. An assessment that looks only at the membranes tends to recommend new membranes.',
    ],
    covered: [
      [
        'Normalised performance',
        'Normalised permeate flow, salt passage and differential pressure, trended per train and stage against its own baseline.',
      ],
      [
        'Fouling and scaling',
        'Identifying the type and location of fouling or scaling from its performance signature, and the conditions driving it.',
      ],
      [
        'Pretreatment review',
        'Whether the feed reaching the membranes is fit for them — filtration, SDI and turbidity, coagulation, and oxidant control.',
      ],
      [
        'Cleaning effectiveness',
        'How much performance each clean recovers, how quickly it is lost again, and what that says about the cleaning regime.',
      ],
      [
        'Recovery and energy',
        'Operating recovery, flux and specific energy consumption compared against design and against what the feed allows.',
      ],
      [
        'Membrane autopsy support',
        'Where the evidence is unclear, specifying element sampling and interpreting autopsy results.',
      ],
    ],
    deliverables:
      'A written assessment of membrane condition and its causes, a normalised performance baseline that later operation can be judged against, and ranked recommendations covering operation, pretreatment, cleaning and replacement.',
    related: ['chemical-dosing-cip', 'data-analysis', 'plant-optimisation'],
    page: {
      titleLines: ['UF & RO Performance', 'Assessment'],
      sub: 'Understand membrane performance. Plan the next step.',
      subLines: ['Understand membrane performance.', 'Plan the next step.'],
      lede: 'Independent assessment of ultrafiltration and reverse osmosis systems to investigate deterioration, assess cleaning results and prioritise improvements.',
      image: {
        base: 'uf-ro-performance-assessment',
        alt: 'Ultrafiltration modules and reverse osmosis pressure vessels in a membrane treatment hall',
      },
      heroCta: 'Discuss your membrane system',
      leadTitle: 'Put performance changes in context.',
      leadText:
        'We review operating trends alongside feed conditions, pretreatment and cleaning history to assess likely causes and identify further checks.',
      fits: [],
      fitsLayout: 'row',
      compare: {
        title: 'A focused assessment for each membrane process',
        columns: [
          {
            title: 'Ultrafiltration (UF)',
            items: [
              'Temperature-corrected permeability and TMP',
              'Flux, filtration cycles and net recovery',
              'Backwash, CEB and CIP performance',
              'Filtrate quality and integrity-test records',
            ],
          },
          {
            title: 'Reverse osmosis (RO)',
            items: [
              'Normalised permeate flow and salt passage',
              'Differential pressure and train comparisons',
              'Recovery, flux and specific energy use',
              'Cleaning response and feedwater conditions',
            ],
          },
        ],
        note: 'Assessment methods and reference conditions depend on the membrane system and available data.',
      },
      coversTitle: 'What our assessment covers',
      coversNumberStyle: 'light',
      covers: [
        { title: 'Performance trends and baselines', text: 'Check data quality and establish suitable comparisons.' },
        { title: 'Fouling, scaling and integrity concerns', text: 'Assess likely causes and identify evidence needed to confirm them.' },
        { title: 'Pretreatment and feed conditions', text: 'Review upstream performance and membrane compatibility.' },
        { title: 'Cleaning effectiveness', text: 'Compare performance before and after cleaning.' },
        { title: 'Recovery and resource use', text: 'Review water losses, energy demand and operating constraints.' },
        { title: 'Further testing and autopsy support', text: 'Define targeted investigations and interpret specialist findings.' },
      ],
      receive: {
        text: 'An evidence-based assessment with prioritised recommendations.',
        items: [
          'UF and RO performance findings',
          'Suitable baselines, where data supports them',
          'Likely causes and remaining uncertainties',
          'Cleaning and operational recommendations',
          'Further testing requirements',
          'Replacement considerations, where justified',
        ],
        columns: 1,
      },
      promo: {
        eyebrow: 'Ongoing RO monitoring',
        title: 'Waterna RO Insight™',
        text: 'Track RO performance between engineering reviews with more than 100 engineering indicators and an offline AI assistant.',
        label: 'Explore RO Insight™',
        href: '/ro-insight',
        image: '/img/services/uf-ro-performance-assessment-800.webp',
      },
      cta: {
        title: 'Let’s assess your membrane performance.',
        text: 'Tell us about your system, the changes you have observed and the data available.',
        button: 'Discuss your assessment',
        layout: 'stacked',
      },
      relatedTitle: 'Related support',
      relatedLayout: 'text',
      relatedItems: {
        'chemical-dosing-cip': { blurb: 'Review dosing and cleaning requirements.' },
        'data-analysis': { blurb: 'Explore operating trends and data quality.' },
        'plant-optimisation': { blurb: 'Investigate wider treatment constraints.' },
      },
    },
  },

  {
    slug: 'chemical-dosing-cip',
    pillar: 'plant-performance',
    title: 'Chemical Dosing & CIP Optimisation',
    navTitle: 'Chemical Dosing & CIP',
    summary:
      'Getting dose rates and cleaning regimes right — antiscalant, coagulant and biocide selection, CIP chemistry and frequency, judged on what actually restores performance.',
    metaTitle: 'Chemical Dosing & CIP Optimisation | Waterna',
    metaDescription:
      'Independent review of chemical selection, dose rates and clean-in-place procedures for water, wastewater and membrane treatment — lower chemical cost without risking performance.',
    intro:
      'Chemicals are often one of the largest operating costs on a treatment plant, and dose rates are rarely revisited once they have been set. We review what is dosed, how much and why, and whether cleaning procedures actually restore the performance they are meant to.',
    why: [
      'Dose rates tend to be set at commissioning, then raised to deal with a problem and never lowered again. The result is plants that overdose for most of the year, or underdose at exactly the conditions that matter. Either way the cost is paid in chemicals, sludge or performance.',
      'Clean-in-place procedures drift in the same way. A clean that uses the wrong chemistry for the foulant, or runs at the wrong temperature, pH or contact time, can use a full set of chemicals and recover very little. Judging a clean by what it restores, rather than by whether it was carried out, is the only reliable test.',
    ],
    covered: [
      [
        'Chemical selection',
        'Coagulants, flocculants, antiscalants, biocides, pH correction and oxidants reviewed against the actual water and treatment duty.',
      ],
      [
        'Dose rate optimisation',
        'Dose set against measured demand, with jar testing or trials where needed, rather than against historical habit.',
      ],
      [
        'Dosing system review',
        'Pump sizing, turndown, dosing points, mixing and control — the equipment that decides whether the set dose is actually delivered.',
      ],
      [
        'CIP chemistry and procedure',
        'Cleaning chemicals, sequence, temperature, pH and contact time matched to the foulants present.',
      ],
      [
        'Cleaning frequency',
        'Setting cleaning triggers from performance data, so plants clean when they need to rather than on a fixed calendar.',
      ],
      [
        'Cost and supplier neutrality',
        'Chemical cost per cubic metre benchmarked, with recommendations that do not depend on any particular chemical supplier.',
      ],
    ],
    deliverables:
      'A written review of chemical use and cleaning performance, revised dose ranges and CIP procedures, and an estimate of the savings and performance effect of each change.',
    related: ['uf-ro-performance-assessment', 'plant-optimisation', 'data-analysis'],
  },

  {
    slug: 'commissioning-performance-testing',
    pillar: 'plant-performance',
    title: 'Commissioning & Performance Testing',
    navTitle: 'Commissioning & Testing',
    summary:
      'Proving a new plant does what it was bought to do, with a performance test protocol agreed before the contractor leaves site.',
    metaTitle: 'Commissioning & Performance Testing | Waterna',
    metaDescription:
      'Independent commissioning support and performance testing for new and upgraded water and wastewater treatment plant — test protocols, witnessing and acceptance against agreed criteria.',
    intro:
      'Handover is the last point at which a contractor is obliged to prove the plant works. We help define what "working" means before testing starts, witness the tests, and assess the results independently, so acceptance is based on evidence rather than on a single good day.',
    why: [
      'Performance guarantees are only as useful as the test that checks them. If test conditions, sampling, durations and pass criteria are left to be agreed on site, they tend to be agreed in whatever form the plant can pass. Fixing them in advance protects the owner without being unfair to the contractor.',
      'Problems not found at commissioning are usually found later, after the contractor’s liability has ended and at the owner’s cost. A clear test record also gives operators a baseline to compare against for the life of the plant.',
    ],
    covered: [
      [
        'Commissioning planning',
        'Commissioning sequence, pre-commissioning checks and readiness reviews, coordinated with the contractor’s own plan.',
      ],
      [
        'Performance test protocols',
        'Test conditions, durations, sampling and analysis methods, and pass criteria agreed before testing begins.',
      ],
      [
        'Test witnessing',
        'Independent attendance at performance and acceptance tests, with observations recorded as they happen.',
      ],
      [
        'Results assessment',
        'Test data checked against the guarantees and the design basis, with any shortfall and its likely cause identified.',
      ],
      [
        'Punch lists and remedial actions',
        'Outstanding items recorded with clear completion criteria, and retests specified where needed.',
      ],
      [
        'Performance baseline',
        'A documented starting point for operation, so later changes in performance can be measured against it.',
      ],
    ],
    deliverables:
      'Agreed test protocols, a witnessed and independently assessed test report, a clear acceptance recommendation, and a performance baseline your operators can use from the first day.',
    related: ['technical-procurement-support', 'plant-optimisation', 'uf-ro-performance-assessment'],
  },

  {
    slug: 'data-analysis',
    pillar: 'plant-performance',
    title: 'Data Analysis & Performance Review',
    navTitle: 'Data Analysis',
    summary:
      'Turn the operating data you already collect into a diagnosis — what is drifting, why, and what to do about it.',
    metaTitle: 'Water Treatment Data Analysis & Performance Review | Waterna',
    metaDescription:
      'Independent engineering analysis of water and wastewater operating data — SCADA and historian exports, lab results, chemical and energy use — turned into performance insight and ranked recommendations.',
    intro:
      'Most plants already generate more than enough data to explain their own behaviour. What is usually missing is someone reading it against what the process ought to be doing. We turn routine operating records into a diagnosis.',
    why: [
      'Operating data tends to be collected for compliance reporting and consulted only once something has already gone wrong. Meanwhile the drift that will cause next quarter’s problem is visible in it today — in a slowly rising chemical dose, a creeping differential pressure, an energy figure that no longer matches the flow.',
      'Reading it properly means comparing what the plant is doing against what the process should be doing, not against last month. That is an engineering judgement rather than a statistical one, which is why this work sits with process engineers rather than with a general analytics provider.',
      'The approach is tailored to the process in question, and applies across municipal water, wastewater, industrial water treatment, desalination and reuse.',
    ],
    covered: [
      [
        'The data we work from',
        'SCADA and historian exports, laboratory results, flow and pressure records, water quality parameters, influent and effluent data, chemical consumption, energy use, maintenance records and equipment performance data.',
      ],
      [
        'Trend and anomaly detection',
        'Abnormal trends, step changes and slow drift — and the discipline to separate an instrument fault from a real process change before acting on it.',
      ],
      [
        'Root cause analysis',
        'Working back from the symptom to the mechanism, so the recommendation addresses the cause rather than the indicator that revealed it.',
      ],
      [
        'Efficiency and cost',
        'Chemical dose, energy per cubic metre, sludge production and disposal — establishing where the operating budget is actually going.',
      ],
      [
        'Benchmarking against design',
        'Current performance compared against the design basis, and against the plant’s own best historical performance.',
      ],
      [
        'Ranked recommendations',
        'Practical actions with expected effect, separating what can be changed operationally from what genuinely needs capital.',
      ],
    ],
    deliverables:
      'A structured engineering assessment: what the data shows, what is causing it, and a ranked set of recommendations. Available as a one-off diagnostic study, a recurring performance review, or through an ongoing monitoring dashboard. It is frequently the first stage of an optimisation project, because it establishes and quantifies the opportunity before anyone proposes changing the plant.',
    related: ['ro-insight', 'plant-optimisation', 'independent-review'],
  },

  {
    slug: 'ro-insight',
    pillar: 'software',
    standalone: true,
    title: 'Waterna RO Insight™',
    navTitle: 'RO Insight™',
    kind: 'product',
    headings: {
      why: 'Why it exists',
      covered: 'What it monitors',
      deliverables: 'How you get it',
    },
    summary:
      'A performance monitoring and decision-support platform for reverse osmosis desalination — over 100 engineering indicators, with a built-in AI assistant that runs offline.',
    metaTitle: 'Waterna RO Insight™ | RO Desalination Performance Software',
    metaDescription:
      'Waterna RO Insight™ converts routine RO plant data into over 100 engineering KPIs, fouling and scaling diagnostics, CIP forecasting, fleet benchmarking and energy optimisation — with an AI assistant that runs on-premise, so no plant data leaves your network.',
    intro:
      'Waterna RO Insight™ is a performance monitoring and decision-support platform for reverse osmosis desalination. It converts routine plant data into more than 100 engineering indicators, helping teams assess membrane condition, evaluate cleaning performance and identify opportunities to improve energy efficiency.',
    why: [
      'RO plants are instrumented heavily and interrogated lightly. Everything needed to see fouling developing, to judge whether the last clean actually worked, or to tell whether a train is drifting from its own baseline is usually already being recorded — but normalising it, trending it and reading it takes engineering time operations teams rarely have.',
      'RO Insight™ does that continuously. It moves a team from reactive troubleshooting — cleaning once flux has already fallen, replacing membranes once rejection has already failed — to deciding from evidence, ahead of the problem.',
    ],
    covered: [
      [
        'Membrane performance monitoring',
        'Normalised permeate flow, salt rejection and differential pressure, tracked per train against its own baseline rather than a generic target.',
      ],
      [
        'Fouling and scaling diagnostics',
        'Developing fouling and scaling conditions identified from their performance signatures, before they force an unplanned shutdown.',
      ],
      [
        'Cleaning effectiveness and planning',
        'Whether a clean achieved what it should have, and a forecast of when the next one will be needed.',
      ],
      [
        'Energy and operating cost analysis',
        'Specific energy consumption, and the cost consequence of running away from the optimum.',
      ],
      [
        'Train and fleet benchmarking',
        'Each train measured against its own commissioning baseline and against the wider fleet.',
      ],
      [
        'Alarms and predictive indicators',
        'Automated diagnostics and operator-facing recommendations, surfaced together on a central dashboard.',
      ],
    ],
    deliverables:
      'RO Insight™ is a commercial software platform, available under licence or subscription. It runs from historian and SCADA exports, or can be configured for live data connectivity, depending on your infrastructure. Take it on its own, or combine it with our engineering and optimisation services so continuous monitoring is backed by specialist support when a result needs interpreting. It is vendor-neutral: it works with any manufacturer’s membranes, and nothing in it steers you toward a particular supplier.',
    related: ['data-analysis', 'plant-optimisation', 'feasibility-studies'],
  },
];

export const publishedServices = services.filter((s) => s.published !== false);

export const projectEngineering = publishedServices.filter(
  (s) => s.pillar === 'project-engineering' && !s.standalone,
);

export const plantPerformance = publishedServices.filter(
  (s) => s.pillar === 'plant-performance' && !s.standalone,
);

export const softwareProducts = publishedServices.filter((s) => s.pillar === 'software');

export const roInsight = services.find((s) => s.slug === 'ro-insight')!;

/** A service has a page once it has page content written for it. */
export function hasPage(s: Service): boolean {
  return Boolean(s.intro);
}

export const pagedServices = publishedServices.filter(hasPage);

/** Products sit at their own top-level URL; everything else nests under its pillar. */
export function serviceHref(s: Service): string {
  return s.standalone ? `/${s.slug}` : `/${s.pillar}/${s.slug}`;
}

export function relatedTo(s: Service): Service[] {
  return (s.related ?? [])
    .map((slug) => pagedServices.find((x) => x.slug === slug))
    .filter((x): x is Service => x !== undefined);
}

export const DEFAULT_HEADINGS = {
  why: 'Why it matters',
  covered: 'What it covers',
  deliverables: 'What you get',
} as const;
