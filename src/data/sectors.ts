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
}

export const sectors: Sector[] = [
  {
    slug: 'industrial-water-treatment',
    title: 'Industrial Water Treatment',
    summary:
      'Process water that meets specification consistently — clarification, filtration, reverse osmosis, ion exchange and disinfection.',
    metaTitle: 'Industrial Water Treatment Consultants | Waterna',
    metaDescription:
      'Independent process engineering for industrial water treatment — boiler and cooling water, process water, reverse osmosis and ion exchange, produced water and water reuse.',
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
      'Reverse osmosis and nanofiltration',
      'Ion exchange and softening',
      'Degassing and de-aeration',
      'UV and chemical disinfection',
      'Oil/water separation',
      'Zero liquid discharge and evaporation',
    ],
    relatedServices: ['feasibility-studies', 'design-services', 'engineering-consultancy'],
  },

  {
    slug: 'wastewater-treatment',
    title: 'Wastewater Treatment',
    summary:
      'Effluent schemes that hold their discharge consent, from primary settlement and biological treatment through to tertiary polishing.',
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
      'Anaerobic pre-treatment',
      'Tertiary filtration and polishing',
      'Nutrient removal',
      'Disinfection',
    ],
    relatedServices: ['plant-optimisation', 'design-services', 'feasibility-studies'],
  },

  {
    slug: 'anaerobic-digestion',
    title: 'Anaerobic Digestion & Sludge',
    navTitle: 'Anaerobic Digestion',
    summary:
      'Digestion, thermal hydrolysis, dewatering and sludge disposal routes — assessed on whole-life cost, not headline capex.',
    metaTitle: 'Anaerobic Digestion & Sludge Treatment Consultants | Waterna',
    metaDescription:
      'Independent engineering for anaerobic digestion, thermal hydrolysis, sludge dewatering and disposal — including digestate liquor, biogas safety and HAZOP.',
    intro:
      'Anaerobic digestion turns a disposal cost into an energy stream, but it also brings a biological process and an explosive atmosphere onto a site, and it returns a liquor to the works that can quietly undo the treatment upstream of it.',
    body: [
      'We work on digestion and sludge treatment as a whole system rather than a single asset: what feeds the digester, what the digester does to it, what comes back as liquor, and where the residue finally goes. Schemes that look attractive on gas yield alone often look different once dewatering performance, liquor return load and the disposal route are priced in.',
      'Our team has designed and commissioned treatment for sludge streams with high solids, high COD and high dissolved solids — the conditions where standard assumptions stop applying. We also chair the HAZOPs, which on a digestion site is not a formality: biogas, hydrogen sulphide and confined spaces put this class of plant in a different risk category from the rest of a works.',
    ],
    challenges: [
      [
        'Digestate liquor return',
        'Dewatering liquor returns a concentrated ammonia load to the head of the works. Ignoring it is one of the most common ways a digestion project degrades final effluent quality.',
      ],
      [
        'Dewatering performance',
        'Cake dryness drives disposal cost more than almost anything else, and the polymer and machine selection that achieve it are specific to the sludge.',
      ],
      [
        'Biogas safety',
        'An explosive atmosphere, hydrogen sulphide and confined spaces demand a hazard study appropriate to the risk, not a checklist.',
      ],
      [
        'Feedstock variability',
        'Digestion is a biological process with a slow recovery time. Feedstock changes that seem minor can take weeks to work through.',
      ],
      [
        'Disposal route',
        'Land spreading, incineration, composting and landfill each carry different regulatory and cost exposure, and the route should shape the treatment train.',
      ],
    ],
    technologies: [
      'Mesophilic and thermophilic digestion',
      'Thermal hydrolysis pre-treatment',
      'Sludge thickening',
      'Centrifuge and belt press dewatering',
      'Digestate liquor treatment',
      'Biogas handling and upgrading',
      'Drying and pasteurisation',
      'Odour control',
    ],
    relatedServices: ['hazop', 'design-services', 'plant-optimisation'],
  },
];
