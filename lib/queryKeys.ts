// lib/queryKeys.ts
// Centralised query key factory.
// Using objects instead of plain strings makes invalidation precise and typo-safe.

export const queryKeys = {
  // GET /certifications/:slug
  certification: (slug: string) =>
    ["certifications", slug] as const,

  // GET /compare/:certA/:certB/:certC?
  comparison: (certs: string[]) =>
    ["comparisons", ...certs.slice().sort()] as const,

  // GET /roadmap/:role
  roadmap: (role: string) =>
    ["roadmap", role.toLowerCase().trim().replace(/\s+/g, "-")] as const,

  // POST /recommend-certifications — keyed by inputs so same profile hits cache
  recommendations: (payload: {
    currentRole: string;
    targetRole: string;
    experienceYears: number;
    budget: number;
    existingCerts?: string[];
  }) =>
    [
      "recommendations",
      payload.currentRole,
      payload.targetRole,
      payload.experienceYears,
      payload.budget,
      ...(payload.existingCerts?.slice().sort() ?? []),
    ] as const,

  // POST /recommend-homelabs — keyed by role + sorted skills
  homelabs: (payload: { targetRole: string; currentSkills?: string[] }) =>
    [
      "homelabs",
      payload.targetRole,
      ...(payload.currentSkills?.slice().sort() ?? []),
    ] as const,
};
