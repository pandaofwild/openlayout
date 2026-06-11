import referencesJson from "../../scripts/style-references.json";
import type { StyleReferenceSource } from "./designStyles";

export type StyleReferenceEntry = {
  galleries: StyleReferenceSource[];
  sites: StyleReferenceSource[];
};

const references = referencesJson as Record<string, unknown>;

function isReferenceSource(value: unknown): value is StyleReferenceSource {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;

  return (
    typeof item.note === "string" &&
    typeof item.title === "string" &&
    typeof item.url === "string"
  );
}

function isReferenceEntry(value: unknown): value is StyleReferenceEntry {
  if (!value || typeof value !== "object") return false;

  const entry = value as Record<string, unknown>;

  return (
    Array.isArray(entry.galleries) &&
    Array.isArray(entry.sites) &&
    entry.galleries.every(isReferenceSource) &&
    entry.sites.every(isReferenceSource)
  );
}

export function getStyleReferenceEntry(slug: string): StyleReferenceEntry | undefined {
  const entry = references[slug];

  return isReferenceEntry(entry) ? entry : undefined;
}
