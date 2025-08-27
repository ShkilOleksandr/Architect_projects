import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../lib/data";

export default function Project() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main style={{ padding: 24 }}>
        <p>Project not found.</p>
        <Link to="/projects">← Back to projects</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <Link to="/projects">← Back to projects</Link>
      <h1 style={{ marginTop: 12 }}>{project.name}</h1>
      <img
        src={project.imageUrl}
        alt={project.name}
        style={{ width: "100%", maxWidth: 900, borderRadius: 12, marginTop: 16 }}
      />
      <p style={{ marginTop: 16 }}>{project.description}</p>
    </main>
  );
}
