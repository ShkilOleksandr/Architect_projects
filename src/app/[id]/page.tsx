// app/projects/[id]/page.tsx  (App Router in Next.js 13+)
import { projects } from "../../lib/data"; // import your dummy data
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{project.name}</h1>
      <img
        src={project.imageUrl}
        alt={project.name}
        style={{ maxWidth: "600px", width: "100%", borderRadius: "12px" }}
      />
      <p style={{ marginTop: "1rem" }}>{project.description}</p>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
      jasfnvjkasnvj;nv;jksdanvjlk;asvnasl;jnvasjlk;nvajlk;sjaslnvaljnv;ljanvl;jkasnv;jlasnv;
    </main>
  );
}
