/**
 * Extended detail for software products. Kept separate from services.ts so the
 * category plumbing (nav, footer, /software) stays simple while a product page
 * can carry far more structure than a service page needs.
 */

export interface KpiGroup {
  audience: string;
  caption: string;
  items: string[];
}

export interface DiagnosticModule {
  title: string;
  body: string;
  chips: string[];
}

export interface ProductDetail {
  slug: string;
  kpiHeadline: string;
  kpiNote: string;
  kpiGroups: KpiGroup[];
  modulesIntro: string;
  modules: DiagnosticModule[];
  auditNote: string;
  aiHeading: { lead: string; accent: string };
  aiIntro: string;
  ai: { title: string; body: string }[];
  value: { title: string; body: string }[];
  facts: [string, string][];
}

export const roInsightDetail: ProductDetail = {
  slug: 'ro-insight',

  kpiHeadline: 'One framework, three audiences',
  kpiNote:
    'The same computation serves all three, so the control room, the maintenance planner and the plant manager are reading one version of the truth rather than three spreadsheets that disagree. Operational performance leads to asset health, which leads to financial consequence.',
  kpiGroups: [
    {
      audience: 'Operations',
      caption: 'Live performance',
      items: [
        'Recovery %',
        'Flux, LMH',
        'Differential pressure, ΔP',
        'Salt passage %',
        'Net driving pressure, NDP',
        'Feed pressure, bar',
      ],
    },
    {
      audience: 'Maintenance',
      caption: 'Asset health',
      items: [
        'Normalised flux, LMH',
        'Normalised ΔP, bar',
        'Fouling factor index',
        'Water transport coefficient, A',
        'Salt permeability, B',
        'Scaling index, S&DSI',
        'CIP effectiveness %',
      ],
    },
    {
      audience: 'Management',
      caption: 'Financial consequence',
      items: [
        'Specific energy consumption, SEC',
        'Optimised feed pressure, bar',
        'Power reduction %',
        'Daily and annual saving',
        'Energy cost impact',
      ],
    },
  ],

  modulesIntro:
    'Five diagnostic modules run continuously on every rack. Each is grounded in first-principles process engineering rather than a fitted score, so a result can be traced back to the measurements that produced it.',
  modules: [
    {
      title: 'Fouling and membrane health',
      body: 'Separates loss of permeability from breakdown of the salt barrier using the A and B transport coefficients — so fouling and integrity loss are told apart while they are still developing, rather than after production has fallen.',
      chips: ['Transport coefficients', 'Permeability loss', 'Integrity loss'],
    },
    {
      title: 'CIP lifecycle',
      body: 'Detects each clean, scores how much performance it actually recovered, and forecasts the next one against that rack’s own degradation trend — replacing a fixed cleaning calendar with evidence.',
      chips: ['Clean detection', 'Recovery scoring', 'Forecast due date'],
    },
    {
      title: 'Scaling risk',
      body: 'Tracks carbonate scaling by Stiff–Davis and extends to a multi-salt saturation model with activity correction and temperature-dependent solubility, flagging which mineral is the limiting one as risk climbs.',
      chips: ['S&DSI', 'Percent saturation', 'Limiting salt'],
    },
    {
      title: 'Energy optimisation',
      body: 'Prices the energy penalty of fouling and of running above the pressure the duty requires, and checks energy-recovery-device efficiency — surfacing the result where it is decidable, in kWh per cubic metre.',
      chips: ['SEC penalty', 'Optimal pressure', 'ERD check'],
    },
    {
      title: 'Hydraulic benchmarking',
      body: 'Ranks every rack against the rest of the fleet on normalised performance, which surfaces the quiet underperformers that raw readings conceal because their duty or temperature differs.',
      chips: ['Fleet ranking', 'Gap to best', 'Outlier flag'],
    },
  ],
  auditNote:
    'Every module states a finding, its likely cause and a recommended action — and every number is traceable to the inputs behind it. Nothing asks to be taken on trust, which matters when the recommendation is to defer a membrane replacement or change a cleaning interval.',

  aiHeading: { lead: 'Troubleshooting help that never leaves the', accent: 'plant' },
  aiIntro:
    'Plants avoid AI assistants not because they would not help, but because sending operating data, drawings or fault history to an external service is rarely permitted — by OT security policy, by a data classification, or by contract. The assistant built into RO Insight™ runs on your own hardware, inside your own network, which removes that objection rather than arguing with it.',
  ai: [
    {
      title: 'It runs offline',
      body: 'The assistant operates entirely on site. There is no external call to make, so there is no data egress to approve, to log, or to explain to a security team — and no dependency on a connection that a control network may not have in the first place.',
    },
    {
      title: 'Troubleshooting on shift',
      body: 'Describe a symptom in plain language and get the likely causes, ranked, with the checks worth running first — the reasoning an experienced engineer would apply, available at three in the morning when there is nobody to call.',
    },
    {
      title: 'Performance questions answered',
      body: 'Ask about any rack, KPI or event and get an answer drawn from the live plant state, instead of hunting through dashboards for the chart that happens to hold it.',
    },
    {
      title: 'Built to learn',
      body: 'A model layer ready to host task-specific models — fouling forecast, CIP timing, anomaly detection — trained on the plant’s own operating history rather than on a generic dataset.',
    },
  ],

  value: [
    {
      title: 'Lower energy cost',
      body: 'Run at the lowest safe pressure, and recover the energy that fouling quietly adds to every cubic metre.',
    },
    {
      title: 'Longer membrane life',
      body: 'Early fouling detection and better-timed cleaning protect membranes and push back replacement.',
    },
    {
      title: 'Fewer surprises',
      body: 'Degradation and trips are visible while they are developing, which makes output steadier and planning easier.',
    },
    {
      title: 'Decisions from evidence',
      body: 'Quantified insight across operations, maintenance and management, in place of experience and guesswork.',
    },
  ],

  facts: [
    ['Category', 'RO performance and advanced process analytics'],
    ['Deployment', 'On-premise or cloud, under licence or subscription'],
    ['Integration', 'Historian and SCADA exports, or a live feed from DCS and OT sources'],
    ['Architecture', 'Scalable and multi-rack, configured to the plant'],
    ['Applications', 'Seawater RO, industrial water, power and utilities, oil and gas produced water'],
    ['AI assistant', 'Runs on-premise — no operating data leaves the network'],
    ['Basis', 'First-principles KPIs, auditable to source inputs'],
    ['Independence', 'Works with any manufacturer’s membranes'],
  ],
};
