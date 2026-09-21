export interface Service {
  slug: string;
  title: string;
  navTitle?: string;
  /** Which pillar this belongs to. */
  pillar: 'project-engineering' | 'plant-performance';
  /** Set false to keep the content but drop the page from the site. */
  published?: boolean;
  /** Products live at their own top-level URL rather than under a pillar. */
  standalone?: boolean;
  /** Products read differently from services — see headings below. */
  kind?: 'service' | 'product';
  /** Override the three section headings on the detail page. */
  headings?: { why: string; covered: string; deliverables: string };
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  why: string[];
  covered: [string, string][];
  deliverables: string;
  related: string[];
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
    related: ['design-services', 'independent-review', 'plant-optimisation'],
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
  },

  {
    slug: 'independent-review',
    pillar: 'project-engineering',
    title: 'Independent Review',
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
    related: ['feasibility-studies', 'design-services', 'plant-optimisation'],
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
  },

  {
    slug: 'plant-optimisation',
    pillar: 'plant-performance',
    title: 'Plant Operation, Commissioning & Optimisation',
    navTitle: 'Plant Optimisation',
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
    related: ['independent-review', 'training', 'feasibility-studies'],
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
    pillar: 'plant-performance',
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
      'A decision-support platform for reverse osmosis desalination — over 100 engineering KPIs, fouling and scaling diagnostics, CIP forecasting and energy optimisation.',
    metaTitle: 'Waterna RO Insight™ | RO Desalination Performance Software',
    metaDescription:
      'Waterna RO Insight™ converts routine RO plant data into over 100 engineering KPIs, fouling and scaling diagnostics, CIP effectiveness and forecasting, fleet benchmarking and energy optimisation.',
    intro:
      'Waterna RO Insight™ is a decision-support and performance optimisation platform built specifically for reverse osmosis desalination. It converts routine plant operating data into more than 100 engineering KPIs, diagnostics, alarms and predictive indicators.',
    why: [
      'RO plants are instrumented heavily and interrogated lightly. Everything needed to see fouling developing, to judge whether the last clean actually worked, or to tell whether a train is drifting from its own baseline is usually already being recorded — but normalising it, trending it and reading it takes engineering time operations teams rarely have.',
      'RO Insight™ does that continuously. It moves a team from reactive troubleshooting — cleaning once flux has already fallen, replacing membranes once rejection has already failed — to deciding from evidence, ahead of the problem.',
    ],
    covered: [
      [
        'Membrane performance',
        'Normalised permeate flow, salt rejection and differential pressure, tracked per train against its own baseline rather than a generic target.',
      ],
      [
        'Fouling and scaling',
        'Developing fouling and scaling conditions identified from their performance signatures, before they force an unplanned shutdown.',
      ],
      [
        'CIP effectiveness and forecasting',
        'Whether a clean achieved what it should have, and a forecast of when the next one will be needed.',
      ],
      [
        'Energy and operating cost',
        'Specific energy consumption, and the cost consequence of running away from the optimum.',
      ],
      [
        'Benchmarking',
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

export const roInsight = services.find((s) => s.slug === 'ro-insight')!;

/** Products sit at their own top-level URL; everything else nests under its pillar. */
export function serviceHref(s: Service): string {
  return s.standalone ? `/${s.slug}` : `/${s.pillar}/${s.slug}`;
}

export function relatedTo(s: Service): Service[] {
  return s.related
    .map((slug) => publishedServices.find((x) => x.slug === slug))
    .filter((x): x is Service => x !== undefined);
}

export const DEFAULT_HEADINGS = {
  why: 'Why it matters',
  covered: 'What it covers',
  deliverables: 'What you get',
} as const;
