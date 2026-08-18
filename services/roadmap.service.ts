// services/roadmap.service.ts
import { api } from "./api";
import type { RoadmapResponse, Roadmap } from "@/types/api.types";

export async function getRoadmap(role: string): Promise<Roadmap> {
  // Converts "SOC Analyst" → "soc-analyst" if user types a name
  const slug = role.toLowerCase().trim().replace(/\s+/g, "-");
  const res = await api.get<RoadmapResponse>(`/roadmap/${slug}`);
  return res.data;
}
