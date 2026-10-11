import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "rpgci0wh",
  dataset: "production",
  apiVersion: "2026-10-04",
  useCdn: true,
});
