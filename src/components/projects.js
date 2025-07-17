import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>AI Substance Detection</h3>
        <p>Built an ML model to detect drug use based on facial features. Used CNN + XGBoost.</p>
        <a href="https://github.com/yourusername/project-link" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <h3>Food Donation App (Flutter)</h3>
        <p>End-to-end app that connects donors to NGOs. Frontend in Flutter, backend in Firebase.</p>
      </div>
    </section>
  );
}

export default Projects;
