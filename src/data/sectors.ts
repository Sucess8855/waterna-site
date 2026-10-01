export interface Sector {
  slug: string;
  title: string;
  navTitle?: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  challenges: [string, string][];
  technologies: string[];
  relatedServices: string[];
  /** Basename in public/img/sectors. */
  image: string;
  /** Short description and three points for the sector card. */
  card: { text: string; points: string[] };
  /** Content for the full sector page layout; without it the simpler layout is used. */
  page?: SectorPageContent;
}

export interface SectorPageContent {
  sub: string;
  lede: string;
  heroCta: string;
  /** Basename in public/img/sectors for the banner photo (-1200.webp/.jpg). */
  banner: string;
  leadTitle: string;
  leadText: string;
  systems: { title: string; text: string; points: string[] }[];
  help: { title: string; text: string }[];
  /** Show the RO Insight band. */
  roInsight?: boolean;
  related: string[];
  cta: { title: string; text: string };
}

export const sectors: Sector[] = [
  {
    slug: 'uf-ro-desalination',
    card: {
      text: 'Specialist engineering for ultrafiltration and reverse osmosis systems, from pretreatment and design to commissioning and performance improvement.',
      points: ['UF and membrane pretreatment', 'Seawater and brackish water RO', 'Troubleshooting and optimisation'],
    },
    image: 'uf-ro',
    title: 'Ultrafiltration & RO Desalination',
    navTitle: 'UF & RO Desalination',
    summary:
      'Specialist engineering for UF and RO systems — pretreatment, process design, commissioning, troubleshooting and performance optimisation.',
    metaTitle: 'UF & RO Desalination Consultants | Waterna',
    metaDescription:
      'Specialist engineering support for ultrafiltration and reverse osmosis desalination — pretreatment, process design, commissioning, troubleshooting and performance optimisation.',
    intro:
      'Membrane plant rewards attention to detail and punishes assumptions. Pretreatment that is adequate on paper, a recovery target set slightly too high, a cleaning regime inherited from a different feed water — each shows up later as lost flux, shortened membrane life, or an energy bill nobody budgeted for.',
    body: [
      'This is where most of our work sits. We support UF and RO systems across their life: establishing what the feed water actually requires, sizing pretreatment properly, setting recovery and flux against the limits the water imposes rather than the limits the equipment allows, then commissioning and troubleshooting the result.',
      'The engineering that matters here is unglamorous — a defensible water analysis, honest fouling and scaling indices, and a normalised baseline taken at commissioning so that later performance can be judged against something real. Plants that skip those steps spend years guessing why flux is falling.',
      'For RO plants already running, Waterna RO Insight™ applies the same engineering method continuously, supporting cleaning decisions, energy optimisation and membrane management between studies.',
    ],
    challenges: [
      [
        'Pretreatment adequacy',
        'Most RO problems are pretreatment problems. SDI, turbidity and organic load determine what the membranes will tolerate, and a pretreatment train sized on average conditions will fail on the bad days.',
      ],
      [
        'Recovery and flux limits',
        'Pushing recovery raises scaling potential and concentrate strength. The right operating point is set by the water chemistry, not by what the skid is rated for.',
      ],
      [
        'Fouling and scaling',
        'Biofouling, colloidal fouling, organic fouling and mineral scaling each present differently and each need a different response. Treating them as one problem wastes cleaning chemicals and membrane life.',
      ],
      [
        'Cleaning effectiveness',
        'A clean that does not restore normalised performance has cost money and achieved nothing. Whether it worked is measurable, and worth measuring.',
      ],
      [
        'Energy and recovery devices',
        'Specific energy consumption is the dominant operating cost in seawater RO. Feed pressure above what the duty requires is money spent continuously.',
      ],
      [
        'Baselines and normalisation',
        'Without a normalised baseline from commissioning, later performance cannot be judged — temperature and feed variation mask the trend that matters.',
      ],
    ],
    technologies: [
      'Ultrafiltration and microfiltration',
      'Seawater and brackish reverse osmosis',
      'Nanofiltration',
      'Coagulation and media pretreatment',
      'Cartridge filtration',
      'Antiscalant and chemical dosing',
      'Energy recovery devices',
      'CIP systems and cleaning regimes',
      'Permeate remineralisation',
    ],
    relatedServices: ['ro-insight', 'plant-optimisation', 'design-services'],
    page: {
      sub: 'From treatment design to plant performance.',
      lede: 'Independent process engineering for ultrafiltration and reverse osmosis systems, supporting new projects, plant upgrades and day-to-day operation.',
      heroCta: 'Discuss your membrane project',
      banner: 'uf-ro',
      leadTitle: 'Engineering built around your water',
      leadText:
        'We assess feed water quality, treatment requirements and operating conditions to develop practical solutions for your plant. Our support covers pretreatment, membrane selection, process design, commissioning and performance improvement.',
      systems: [
        {
          title: 'Ultrafiltration & pretreatment',
          text: 'Engineering support for UF systems and the treatment stages that protect downstream membranes.',
          points: ['Feed water assessment and pretreatment', 'UF sizing, backwash and cleaning review', 'Integrity testing and operating performance'],
        },
        {
          title: 'Reverse osmosis desalination',
          text: 'Process design and operational support for seawater and brackish water RO systems.',
          points: ['Membrane selection, flux and recovery', 'High-pressure pumping and energy recovery', 'Permeate quality and post-treatment'],
        },
      ],
      help: [
        { title: 'Feed water & pretreatment', text: 'Review water quality, variability and pretreatment performance.' },
        { title: 'Design & operating conditions', text: 'Assess capacity, flux, recovery and equipment constraints.' },
        { title: 'Fouling & scaling', text: 'Investigate likely causes using operating data and water analysis.' },
        { title: 'Cleaning & recovery', text: 'Review cleaning procedures and compare performance before and after cleaning.' },
        { title: 'Energy & resource use', text: 'Assess pumping, energy recovery and chemical consumption.' },
        { title: 'Commissioning & baselines', text: 'Define test requirements and establish a reference for future assessment.' },
      ],
      roInsight: true,
      related: ['design-services', 'uf-ro-performance-assessment', 'chemical-dosing-cip', 'commissioning-performance-testing'],
      cta: {
        title: 'Discuss your UF or RO project',
        text: 'Tell us about your water source, treatment capacity, required water quality and current challenge.',
      },
    },
  },

  {
    slug: 'industrial-water-treatment',
    card: {
      text: 'Treatment systems developed around your process water quality, production needs and operating conditions.',
      points: ['Clarification and filtration', 'Ion exchange and softening', 'Process water quality and reuse'],
    },
    image: 'industrial',
    title: 'Industrial Water Treatment',
    summary:
      'Process water treatment built around the quality your process actually needs — clarification, filtration, ion exchange and disinfection.',
    metaTitle: 'Industrial Water Treatment Consultants | Waterna',
    metaDescription:
      'Independent process engineering for industrial water treatment — boiler and cooling water, process water, ion exchange and softening, produced water and water reuse.',
    intro:
      'Industrial water has to arrive at a specification a process can tolerate, at a flow the process cannot be allowed to outrun. Get either wrong and the cost shows up somewhere else — in boiler chemistry, in membrane replacement, in product quality, or in a production stop.',
    body: [
      'Most of our team’s career has been spent on the industrial side of this work: refineries, gas plants, petrochemicals, pharmaceutical manufacturing and heavy industry, where the water system is a utility that everything else depends on and nobody notices until it fails.',
      'That background shapes how we approach a brief. We start from the quality the process actually needs rather than the quality a supplier’s standard package delivers, and we look hard at recovery and reuse before sizing anything — because the cheapest cubic metre of treated water is usually the one you do not have to buy or desalinate twice.',
    ],
    challenges: [
      [
        'Water quality that moves',
        'Source water varies seasonally and process demand varies by campaign. A plant designed for the average will spend part of the year off-specification.',
      ],
      [
        'Recovery and reuse',
        'Reusing a stream is usually cheaper than treating a fresh one, but only once you know which contaminants accumulate and where they have to leave the system.',
      ],
      [
        'Produced water',
        'Oilfield and gas-field produced water brings hydrocarbons, dissolved solids and scaling potential together, and the disposal route often constrains the treatment more than the water does.',
      ],
      [
        'Utility interdependence',
        'Boiler feed, cooling water, potable and process water compete for the same source. Sizing them separately is how sites end up short.',
      ],
      [
        'Whole-life cost',
        'Membrane replacement, regenerant chemicals and energy usually exceed the capital cost over a plant’s life, and rarely appear in a headline quotation.',
      ],
    ],
    technologies: [
      'Clarification and dissolved air flotation',
      'Media and cartridge filtration',
      'Ion exchange and softening',
      'Degassing and de-aeration',
      'UV and chemical disinfection',
      'Oil/water separation',
      'Zero liquid discharge and evaporation',
    ],
    relatedServices: ['feasibility-studies', 'design-services', 'independent-review'],
  },

  {
    slug: 'wastewater-treatment',
    card: {
      text: 'Assessment and design of effluent treatment systems, with a focus on discharge requirements, reliable operation and practical improvements.',
      points: ['Primary and biological treatment', 'Tertiary treatment and polishing', 'Process assessment and optimisation'],
    },
    image: 'wastewater',
    title: 'Wastewater Treatment',
    summary:
      'Assessment and design of wastewater treatment systems, from primary and biological treatment through to tertiary polishing, focused on discharge requirements and reliable operation.',
    metaTitle: 'Wastewater & Effluent Treatment Consultants | Waterna',
    metaDescription:
      'Independent design and troubleshooting for industrial effluent and wastewater treatment — biological treatment, tertiary polishing, trade effluent consent and permitting.',
    intro:
      'An effluent plant has one job: to keep the site inside its consent, every day, including the days when the load is nothing like the design basis. Most that fail were never given an honest design basis to begin with.',
    body: [
      'We work across industrial effluent and municipal-scale wastewater, from effluent treatment plants serving refineries and manufacturing sites through to conventional biological works. The engineering question is usually the same: what is actually arriving at the inlet, and does the process have the capacity and the control to deal with it at its worst rather than its average.',
      'A large part of this work is diagnostic. Sites come to us because a works is failing its consent, foaming, bulking, losing nitrification or simply costing more to run each year, and the cause is rarely the thing that is most visible. We read the operating data first and recommend capital spend last.',
    ],
    challenges: [
      [
        'Consent compliance',
        'Discharge consents and trade effluent agreements set hard limits. Designing to the limit rather than comfortably inside it leaves no margin for a bad week.',
      ],
      [
        'Shock and variable loads',
        'Batch discharges, cleaning cycles and campaign changes can overwhelm a biological process that copes perfectly well with steady flow.',
      ],
      [
        'Biological stability',
        'Filamentous bulking, foaming and loss of nitrification are the classic failures, and each has a different cause and a different fix.',
      ],
      [
        'Sludge production and disposal',
        'Sludge is often the largest single operating cost, and the disposal route should influence the treatment choice rather than follow it.',
      ],
      [
        'Ageing assets',
        'Much existing plant can be brought back within consent by control and process changes rather than replacement — but only if someone establishes what is really limiting it.',
      ],
    ],
    technologies: [
      'Screening and grit removal',
      'Primary settlement and DAF',
      'Activated sludge and extended aeration',
      'MBBR, SBR and MBR',
      'Tertiary filtration and polishing',
      'Nutrient removal',
      'Disinfection',
    ],
    relatedServices: ['plant-optimisation', 'design-services', 'feasibility-studies'],
  },

  {
    slug: 'produced-water-treatment',
    image: 'produced-water',
    card: {
      text: 'Process engineering support for produced water treatment in the oil and gas industry, from treatment assessment to design review and plant optimisation.',
      points: ['Water characterisation and treatment selection', 'Oil–water separation and polishing', 'Design review and performance assessment'],
    },
    title: 'Produced Water Treatment',
    summary:
      'Process engineering for produced water in oil and gas — characterisation, treatment selection, design review and the optimisation of existing separation and polishing trains.',
    metaTitle: 'Produced Water Treatment Consultants | Waterna',
    metaDescription:
      'Independent process engineering for oil and gas produced water — water characterisation, treatment selection, oil–water separation and polishing, design review and performance assessment.',
    intro:
      'Produced water is the largest waste stream in oil and gas production, and one of the least predictable. Its volume, oil content and chemistry change over a field’s life, and a treatment train designed for the first years of production is rarely right for the later ones.',
    body: [
      'We support produced water treatment from first characterisation through to the optimisation of plant already in service: establishing what is actually in the water, selecting a treatment route that holds up as conditions change, reviewing designs before they are built, and finding why an existing train is not meeting its oil-in-water or reinjection specification.',
      'Our background in gas processing and refining means we treat produced water as part of the production system rather than an afterthought. Upstream chemicals, separator performance and the destination of the treated water — discharge, reinjection or reuse — all shape what the treatment needs to do.',
    ],
    challenges: [
      [
        'Variable composition',
        'Oil content, solids, salinity and production chemicals all change over a field’s life. A design basis built on a single sample will not hold.',
      ],
      [
        'Oil–water separation',
        'Dispersed and emulsified oil behave very differently. Separator, hydrocyclone and flotation performance depends on droplet size, not just on oil concentration.',
      ],
      [
        'Production chemical effects',
        'Demulsifiers, corrosion inhibitors and scale inhibitors can stabilise emulsions and foul downstream treatment if their interactions are not understood.',
      ],
      [
        'Discharge and reinjection specifications',
        'Oil-in-water limits for discharge and solids or particle-size limits for reinjection set very different targets for the same water.',
      ],
      [
        'Scaling and solids',
        'Mixing incompatible waters and changes in pressure and temperature drive scaling, while produced solids load filters and separators.',
      ],
    ],
    technologies: [
      'Gravity and plate separators',
      'Hydrocyclones',
      'Induced and dissolved gas flotation',
      'Walnut shell and media filtration',
      'Cartridge and membrane filtration',
      'Chemical treatment and demulsification',
      'Scale and corrosion control',
      'Reinjection water treatment',
    ],
    relatedServices: ['feasibility-studies', 'independent-review', 'plant-optimisation'],
  },
];
