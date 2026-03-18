import React from 'react';

export default function ProjectCard({ titulo, desc }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p style={{ color: '#94a3b8' }}>{desc}</p>
      <a href="#" className="btn">Ver código</a>
    </div>
  );
}