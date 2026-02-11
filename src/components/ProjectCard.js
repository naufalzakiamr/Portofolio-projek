// src/components/ProjectCard.js
export default function ProjectCard({ project }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-sm text-gray-600">{project.desc}</p>
      {project.link && (
        <a className="text-indigo-600 hover:underline text-sm" href={project.link} target="_blank" rel="noreferrer">Lihat Proyek</a>
      )}
    </div>
  );
}
