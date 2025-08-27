import React from "react";
import "./MasonryGrid.css"; // Optional: for additional styling

export const MasonryGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="masonry-grid">
      {children}
    </div>
  );
}
