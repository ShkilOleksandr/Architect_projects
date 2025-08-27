// types.ts
export type Project = {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  href?: string; // optional — if missing, we won’t wrap in <a>
};
