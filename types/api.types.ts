// types/api.types.ts

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface ApiMeta {
  cached: boolean;
  cachedAt?: string;
  generatedAt?: string;
}

// ─── Certification detail ─────────────────────────────────────────────────────

export interface CertDomain {
  name: string;
  weightPercent: number;
}

export interface Certification {
  slug: string;
  name: string;
  acronym: string;
  vendor: string;
  vendorNeutral: boolean;
  level: "Entry" | "Associate" | "Professional" | "Expert";
  domain: string;
  cost: number;
  duration: string;
  questionCount: string;
  passingScore: string;
  renewalYears: number;
  renewalCostUSD: number | null;
  renewalMethod: string;
  domains: CertDomain[];
  prerequisites: string[];
  idealFor: string[];
  avgSalaryUSD: string;
  salaryImpactUSD: string;
  jobDemand: "Low" | "Medium" | "High" | "Very High";
  topEmployers: string[];
  officialUrl: string;
}

export interface CertificationResponse {
  data: Certification;
}

// ─── Comparison ───────────────────────────────────────────────────────────────

export interface ComparisonCert {
  name: string;
  acronym: string;
  vendor: string;
  cost: {
    examFeeUSD: number;
    studyMaterialsEstUSD: string;
    renewalCostUSD: number | null;
    renewalEveryYears: number;
    totalFirstYearUSD: string;
  };
  difficulty: {
    score: number;
    studyTimeMonths: string;
    passingScore: string;
    examFormat: string;
    prerequisiteCount: number;
  };
  roles: {
    idealFor: string[];
    topEmployers: string[];
    avgSalaryUSD: string;
    salaryImpactUSD: string;
    jobDemand: string;
    jobPostingsEstimate: string;
  };
  renewal: {
    validYears: number;
    renewalMethod: string;
    renewalCostUSD: number | null;
    cpeCreditRequired: number | null;
  };
  domains: {
    primaryDomain: string;
    coveredTopics: string[];
    vendorNeutral: boolean;
    industryRecognition: string;
  };
}

export interface ComparisonVerdict {
  bestForBeginners: string;
  bestForSalary: string;
  bestForJobDemand: string;
  bestVendorNeutral: string | null;
  summary: string;
}

export interface ComparisonResult {
  certs: ComparisonCert[];
  verdict: ComparisonVerdict;
  generatedAt: string;
  meta: ApiMeta;
}

export interface ComparisonResponse {
  data: ComparisonResult;
}

// ─── Roadmap ──────────────────────────────────────────────────────────────────

export interface RoadmapCert {
  cert: string;
  vendor: string;
  why: string;
  estimatedMonths: number;
  estimatedCostUSD: number;
}

export interface Roadmap {
  role: string;
  beginner: RoadmapCert[];
  intermediate: RoadmapCert[];
  advanced: RoadmapCert[];
  totalEstimatedMonths: number;
  totalEstimatedCostUSD: number;
  generatedAt: string;
  meta: ApiMeta;
}

export interface RoadmapResponse {
  data: Roadmap;
}

// ─── Recommend certifications ─────────────────────────────────────────────────

export interface RecommendCertificationsRequest {
  currentRole: string;
  targetRole: string;
  experienceYears: number;
  budget: number;
  existingCerts?: string[];
}

export interface RecommendedCert {
  cert: string;
  vendor: string;
  cost: number;
  priority: number;
  reason: string;
  estimatedStudyMonths: number;
}

export interface RecommendationResult {
  recommendedPath: RecommendedCert[];
  estimatedDurationMonths: number;
  totalCost: number;
  withinBudget: boolean;
  budgetNotes: string;
  generatedAt: string;
  meta: ApiMeta;
}

export interface RecommendCertificationsResponse {
  data: RecommendationResult;
}

// ─── Recommend homelabs ───────────────────────────────────────────────────────

export interface HomelabRecommendRequest {
  targetRole: string;
  currentSkills?: string[];
}

export interface RecommendedCertification {
  name: string;
  provider: string | null;
  level: string | null;
  coveragePercent: number;
}

export interface RecommendedProject {
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedHours: number;
  skills: string[];
  githubUrl: string | null;
  documentationUrl: string | null;
  coveragePercent: number;
  impact: number;
}

export interface HomelabRecommendationResult {
  role: string;
  readinessScore: number;
  missingSkills: string[];
  coveredSkills: string[];
  recommendedCertifications: RecommendedCertification[];
  recommendedProjects: RecommendedProject[];
  generatedAt: string;
  source: "database" | "ai_fallback";
}

export interface HomelabRecommendResponse {
  data: HomelabRecommendationResult;
}
