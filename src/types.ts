export type PageType = 'home' | 'what-we-build' | 'about-how-we-work';

export interface FloatingCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface InfrastructurePillar {
  id: string;
  number: string;
  title: string;
  headline: string;
  supportingLine: string;
  image: string;
  details: string[];
  systemDeliverables: {
    category: string;
    items: string[];
  }[];
  strategicImpact: string;
}

export interface FrameworkStage {
  number: string;
  name: string;
  summary: string;
  description: string;
  keyOutputs: string[];
}

export interface StageAudience {
  stage: string;
  headline: string;
  subtitle: string;
  teamSize: string;
  coreSymptoms: string[];
  yuggoraAction: string;
}

export interface TransformationItem {
  before: string;
  after: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  primaryPillars: string[];
  currentBottleneck: string;
}
