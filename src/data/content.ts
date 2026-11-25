import { FrameworkStage, InfrastructurePillar, StageAudience } from '../types';

export const ASSETS = {
  hero: '/src/assets/images/hero_minimal_architecture_1793813835793.jpg',
  systems: '/src/assets/images/systems_minimal_architecture_1793813835089.jpg',
  aboutArch: '/src/assets/images/about_architecture_1793812991530.jpg',
};

export interface DiagramStage {
  step: string;
  name: string;
  type: string;
  rule: string;
  inputs: string[];
  outputs: string[];
}

export interface ServiceDiagramData {
  pillarId: string;
  title: string;
  tagline: string;
  systemSummary: string;
  stages: DiagramStage[];
  keyMetrics: string[];
}

export const SERVICE_DIAGRAMS: Record<string, ServiceDiagramData> = {
  people: {
    pillarId: 'people',
    title: 'PEOPLE INFRASTRUCTURE',
    tagline: 'Self-governing talent architecture and scaling models.',
    systemSummary: 'Replaces reactive ad-hoc hiring with an engineered talent loop that ensures cultural coherence and execution speed as headcount multiplies.',
    keyMetrics: ['Time-to-Productivity: <30 Days', 'Interview Rubric Alignment: 100%', 'Role Scorecard Coverage: 100%'],
    stages: [
      {
        step: '01',
        name: 'Org Architecture',
        type: 'Foundational Design',
        rule: 'Map structural reporting lines, define 12-month headcount models, and eliminate single-point operational dependencies.',
        inputs: ['Current Team Roster', 'Growth Targets', 'Delivery Roadblocks'],
        outputs: ['Functional Org Chart', 'Headcount Capacity Matrix', 'Compensation Bands'],
      },
      {
        step: '02',
        name: 'Role Scorecards',
        type: 'Expectation Architecture',
        rule: 'Every role must have 3-5 quantified outcomes before a job requisition is opened.',
        inputs: ['Quarterly OKRs', 'Departmental KPIs'],
        outputs: ['Objective Outcome Rubrics', 'Required Competencies Sheet'],
      },
      {
        step: '03',
        name: 'Structured Talent Engine',
        type: 'Intake Pipeline',
        rule: 'Candidate vetting conducted via rubric-aligned interview loops, eliminating subjective bias.',
        inputs: ['Candidate Pipeline', 'Standardized Case Study'],
        outputs: ['Objective Scorecards', 'Offer Acceptance Playbook', '30-60-90 Day Plan'],
      },
      {
        step: '04',
        name: 'Performance Cadence',
        type: 'Operating Governance',
        rule: 'Quarterly review loops, leadership enablement cadences, and clear promotion leveling.',
        inputs: ['Sprint Deliverables', 'Outcome Tracking'],
        outputs: ['Leveling Matrix', 'Manager Coaching Playbook'],
      },
    ],
  },
  revenue: {
    pillarId: 'revenue',
    title: 'SALES INFRASTRUCTURE',
    tagline: 'Predictable, institutionalized pipeline progression.',
    systemSummary: 'Removes revenue reliance on founder charisma by codifying repeatable qualification gates, outbound cadence, and CRM stage rigor.',
    keyMetrics: ['Stage Progression Predictability: >85%', 'Deal Slippage Rate: <10%', 'Quota Attainment Consistency: >80%'],
    stages: [
      {
        step: '01',
        name: 'ICP & Lead Ingestion',
        type: 'Account Selection',
        rule: 'Define precision firmographic and intent criteria so sales energy targets only highest-LTV buyers.',
        inputs: ['Market Data', 'Account Intent Lists'],
        outputs: ['Tier-1 Account Matrix', 'BDR Routing Engine'],
      },
      {
        step: '02',
        name: 'Qualification Gates',
        type: 'Stage Gating',
        rule: 'Strict entry criteria for pipeline stages; no deal moves to proposal without verified budget authority.',
        inputs: ['Discovery Call Logs', 'Pain & Economic Criteria'],
        outputs: ['Qualification Score', 'Decision-Maker Access Map'],
      },
      {
        step: '03',
        name: 'CRM Lifecycle Pipeline',
        type: 'Execution Engine',
        rule: 'Multi-stage CRM architecture with automated stage-duration limits and deal stall notifications.',
        inputs: ['Meeting Notes', 'Proposal Artifacts'],
        outputs: ['Clean Pipeline Ledger', 'Automated Deal Alerts'],
      },
      {
        step: '04',
        name: 'Weekly Forecast Rigor',
        type: 'Revenue Governance',
        rule: 'Weekly pipeline inspection examining velocity, conversion ratios, and weighted revenue predictability.',
        inputs: ['Stage Velocity Logs', 'Close Date Changes'],
        outputs: ['Weighted Revenue Forecast', 'Rep Performance Dashboard'],
      },
    ],
  },
  operations: {
    pillarId: 'operations',
    title: 'OPERATING INFRASTRUCTURE',
    tagline: 'Codified workflows, SOPs, and executive dashboards.',
    systemSummary: 'Shields executive bandwidth by structuring cross-functional handoffs, institutional memory repositories, and automated metric dashboards.',
    keyMetrics: ['Operational Escalation Reduction: -70%', 'SOP Library Versioning: 100%', 'Metric Single-Source Truth: 100%'],
    stages: [
      {
        step: '01',
        name: 'Workflow Mapping',
        type: 'Process Deconstruction',
        rule: 'Deconstruct friction points across Sales-to-Delivery and Product-to-Operations handoffs.',
        inputs: ['Operational Bottlenecks', 'Recurring Support Tickets'],
        outputs: ['Cross-Functional Process Maps', 'Handoff SLA Protocols'],
      },
      {
        step: '02',
        name: 'Living SOP Library',
        type: 'Institutional Memory',
        rule: 'Every critical business process is codified in a searchable, versioned repository with assigned owners.',
        inputs: ['Subject Matter Best Practices', 'Tool Documentation'],
        outputs: ['Versioned SOP Playbooks', 'Step-by-Step Runbooks'],
      },
      {
        step: '03',
        name: 'Executive Metric Stack',
        type: 'Visibility System',
        rule: 'Single-source automated dashboards showing live unit economics, pipeline health, and delivery velocity.',
        inputs: ['CRM Data', 'Finance Data', 'Delivery Timelines'],
        outputs: ['Executive Health Dashboard', 'Real-time Alert Triggers'],
      },
      {
        step: '04',
        name: 'Weekly Steering Rhythm',
        type: 'Management Cadence',
        rule: 'Disciplined weekly executive review addressing deviations before they become organizational crises.',
        inputs: ['Weekly Dashboard Variance', 'Milestone Status'],
        outputs: ['Decisions Log', 'Prioritized Action Sprints'],
      },
    ],
  },
  growth: {
    pillarId: 'growth',
    title: 'GROWTH INFRASTRUCTURE',
    tagline: 'Defensible positioning and multi-channel acquisition.',
    systemSummary: 'Transforms sporadic marketing spikes into compounding market authority, category leadership, and inbound customer acquisition.',
    keyMetrics: ['Qualified Inbound Velocity: +140%', 'Category Counter-Positioning: Locked', 'Founder Authority Reach: Compounding'],
    stages: [
      {
        step: '01',
        name: 'Category Positioning',
        type: 'Strategic Narrative',
        rule: 'Carve out an unmistakable category point-of-view that renders alternatives obsolete.',
        inputs: ['Competitive Landscapes', 'Customer Pain Verbatims'],
        outputs: ['Category Blueprint', 'Counter-Positioning Manifesto'],
      },
      {
        step: '02',
        name: 'Acquisition Engine',
        type: 'Demand Generation',
        rule: 'Orchestrate outbound account-based sequences and high-intent inbound search captures.',
        inputs: ['Buyer Trigger Events', 'High-Intent Search Queries'],
        outputs: ['Multi-Touch Campaign Engine', 'Conversion Funnel Pages'],
      },
      {
        step: '03',
        name: 'Founder Authority Platform',
        type: 'Ecosystem Influence',
        rule: 'Elevate founder thought leadership into an industry reference through systematic publication.',
        inputs: ['Proprietary Insights', 'Client Case Patterns'],
        outputs: ['Ghostwritten Essays', 'Industry Keynote Narrative'],
      },
      {
        step: '04',
        name: 'Compounding Flywheel',
        type: 'Performance Optimization',
        rule: 'Track unit economic efficiency per channel and double down on compounding distribution assets.',
        inputs: ['Channel CAC & LTV', 'Deal Attribution Logs'],
        outputs: ['Growth Capital Model', 'Quarterly Expansion Roadmap'],
      },
    ],
  },
};

export const PILLARS: InfrastructurePillar[] = [
  {
    id: 'people',
    number: '01',
    title: 'PEOPLE INFRASTRUCTURE',
    headline: 'BUILD THE RIGHT TEAM.',
    supportingLine: 'People, structure and performance.',
    image: ASSETS.systems,
    details: [
      'Organization design & capacity modeling',
      'Hiring rubrics & structured interview loops',
      'Executive role scorecards',
      'HR policies & employee playbooks',
      '30-60-90 Day onboarding architecture',
      'Performance leveling & leadership cadences',
    ],
    systemDeliverables: [
      {
        category: 'Org Architecture',
        items: ['Reporting line clarity', '12-Month headcount models', 'Role-level outcome scorecards'],
      },
      {
        category: 'Talent Engine',
        items: ['Structured interview loops', 'Candidate sourcing playbooks', 'Offer & onboarding runbooks'],
      },
      {
        category: 'Performance Systems',
        items: ['Quarterly review frameworks', 'Leveling & progression tracks', 'Executive coaching cadences'],
      },
    ],
    strategicImpact: 'Transforms hiring from frantic reactive patch-ups into an intentional, self-governing talent machine.',
  },
  {
    id: 'revenue',
    number: '02',
    title: 'SALES INFRASTRUCTURE',
    headline: 'MAKE GROWTH REPEATABLE.',
    supportingLine: 'Sales systems that move business forward.',
    image: ASSETS.systems,
    details: [
      'Sales team organizational structure',
      'SDR/BDR outbound cadence playbooks',
      'CRM pipeline & stage gating rules',
      'Strict sales qualification rubrics',
      'Deal velocity & slippage tracking',
      'Weekly forecast operating rigor',
    ],
    systemDeliverables: [
      {
        category: 'Pipeline Architecture',
        items: ['Multi-tier CRM stage gates', 'Lead routing automation', 'Deal slippage alarms'],
      },
      {
        category: 'Outbound & Inbound Flow',
        items: ['SDR cadence playbooks', 'Account-based prospecting scripts', 'Demo-to-close stage gates'],
      },
      {
        category: 'Revenue Governance',
        items: ['Pipeline velocity dashboards', 'Sales commission matrices', 'Weekly forecast rigor'],
      },
    ],
    strategicImpact: 'Eliminates reliance on founder charisma by establishing institutional, quota-hitting sales processes.',
  },
  {
    id: 'operations',
    number: '03',
    title: 'OPERATING INFRASTRUCTURE',
    headline: 'MAKE THE BUSINESS WORK.',
    supportingLine: 'Processes, workflows and accountability.',
    image: ASSETS.aboutArch,
    details: [
      'Standard Operating Procedures (SOPs)',
      'Cross-departmental handoff protocols',
      'Single-source KPI executive dashboards',
      'Management steering cadences',
      'Process automation & tool bridges',
      'Institutional memory repositories',
    ],
    systemDeliverables: [
      {
        category: 'Workflow Engineering',
        items: ['End-to-end handoff protocols', 'Asynchronous communication norms', 'SOP library & versioning'],
      },
      {
        category: 'Executive Visibility',
        items: ['Single-source metric dashboards', 'Executive steering weekly cadence', 'Operational bottleneck triaging'],
      },
      {
        category: 'Tool & Data Stack',
        items: ['Workspace consolidation', 'Cross-tool data bridges', 'Automated recurring audits'],
      },
    ],
    strategicImpact: 'Shields executive bandwidth and builds institutional memory that thrives even when team members rotate.',
  },
  {
    id: 'growth',
    number: '04',
    title: 'GROWTH INFRASTRUCTURE',
    headline: 'BUILD MOMENTUM.',
    supportingLine: 'Marketing, positioning and demand generation.',
    image: ASSETS.hero,
    details: [
      'Strategic category positioning',
      'Go-to-market architecture',
      'High-intent content strategy',
      'Multi-touch outbound acquisition',
      'Founder authority & thought leadership',
      'Attribution & growth flywheels',
    ],
    systemDeliverables: [
      {
        category: 'Market Dominance',
        items: ['Sharp category point-of-view', 'Customer narrative frameworks', 'Competitor counter-positioning'],
      },
      {
        category: 'Acquisition Channels',
        items: ['Multi-touch outbound engine', 'Organic industry distribution', 'Event & executive roundtables'],
      },
      {
        category: 'Founder Platform',
        items: ['Thought leadership ghostwriting', 'Keynote & press positioning', 'Ecosystem network alignment'],
      },
    ],
    strategicImpact: 'Transforms sporadic marketing spikes into compounding, defensible market authority and customer demand.',
  },
];

export const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    number: '01',
    name: 'DIAGNOSE',
    summary: 'Understand the business.',
    description:
      'Forensic audit of existing team dynamics, pipelines, handoffs, and executive bottlenecks to identify what breaks when revenue doubles.',
    keyOutputs: ['Full-stack infrastructure friction audit', 'Executive capacity & bottleneck map', '12-month scaling roadmap'],
  },
  {
    number: '02',
    name: 'STRUCTURE',
    summary: 'Design what is needed.',
    description:
      'Architect the missing organizational blueprint: job scorecards, revenue stages, operational handoffs, and measurable accountability systems.',
    keyOutputs: ['Modular org chart & hiring budget', 'CRM stages & qualification rubric', 'Cross-functional workflow blueprint'],
  },
  {
    number: '03',
    name: 'BUILD',
    summary: 'Create the infrastructure.',
    description:
      'We roll up our sleeves alongside your team to write SOPs, deploy tooling configurations, build dashboard trackers, and produce working templates.',
    keyOutputs: ['Live CRM & automation setup', 'Operational SOP playbook repository', 'Onboarding & interview rubrics'],
  },
  {
    number: '04',
    name: 'IMPLEMENT',
    summary: 'Put the systems to work.',
    description:
      'We train managers and operators on new rhythms, conduct live pipeline reviews, and embed weekly management cadences.',
    keyOutputs: ['Manager enablement sessions', 'Weekly metric operating rhythm', 'Live pipeline coaching reviews'],
  },
  {
    number: '05',
    name: 'SCALE',
    summary: 'Measure and improve.',
    description:
      'With systems running autonomously, we track core velocity metrics, optimize conversion ratios, and unlock founders for high-leverage growth.',
    keyOutputs: ['Quarterly capacity reviews', 'Unit economic velocity tracking', 'Founder strategic transition review'],
  },
];

export const WHO_WE_HELP: StageAudience[] = [
  {
    stage: '01 — 5–10 PEOPLE',
    headline: "WE'RE GROWING.",
    subtitle: 'From ad-hoc hustle to the first real operational structure.',
    teamSize: '5–10 Team Members',
    coreSymptoms: [
      'Founders still in every sales call and interview',
      'No formal onboarding; new hires shadow haphazardly',
      'Deals tracked in spreadsheets or memory',
      'Unclear expectations causing execution friction',
    ],
    yuggoraAction: 'We build your first core hiring rubrics, install a streamlined CRM, and establish basic operational rhythms.',
  },
  {
    stage: '02 — 10–30 PEOPLE',
    headline: 'THINGS ARE GETTING COMPLICATED.',
    subtitle: 'Bridging the messy middle where informal communication breaks down.',
    teamSize: '10–30 Team Members',
    coreSymptoms: [
      'Communication silos between sales, product, and delivery',
      'Inconsistent sales conversion across different reps',
      'Founder is the single point of operational escalation',
      'Hiring velocity lags behind customer commitments',
    ],
    yuggoraAction: 'We engineer middle-management cadences, formalize SDR/BDR pipelines, and create documented cross-team SOPs.',
  },
  {
    stage: '03 — 30–50+ PEOPLE',
    headline: "WE'RE READY TO SCALE.",
    subtitle: 'Engineering enterprise-grade governance and repeatable momentum.',
    teamSize: '30–50+ Team Members',
    coreSymptoms: [
      'Quarterly goals slip without clear root-cause visibility',
      'Departmental metrics conflict or lack single source of truth',
      'Onboarding takes months before new hires reach full productivity',
      'Board and investors demand tighter predictability',
    ],
    yuggoraAction: 'We implement institutional KPI dashboards, leadership performance leveling, and multi-channel growth systems.',
  },
];
