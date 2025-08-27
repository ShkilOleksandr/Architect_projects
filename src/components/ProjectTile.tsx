// ProjectTile.tsx
import React from "react";
import { Project } from "../lib/types";
import { Link } from "react-router-dom";

export const ProjectTile: React.FC<{ project: Project }> = ({ project }) => {
  const content = (
    <figure
      style={{
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        background: "#111",
        position: "relative",
      }}
      className="project-tile"
      title={project.description || project.name}
    >
      <img
        src={project.imageUrl}
        alt={project.name}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "auto",        // let images keep natural height for the masonry effect
          display: "block",
        }}
      />
      {/* Optional caption overlay */}
      <figcaption
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "8px 12px",
          color: "white",
          fontWeight: 600,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      >
        {project.name}
      </figcaption>
    </figure>
  );

  // If there is a link, wrap the tile in <a>; otherwise just render the figure
  return (
  <Link to={`/projects/${project.id}`} aria-label={project.name} style={{ textDecoration: "none", display: "block" }}>
    {content}
  </Link>
);
};
