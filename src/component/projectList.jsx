import  { useState } from 'react';

function ProjectList() {
  // Example data for projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is a brief description of Project 1. It aims to solve problem X.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project 2 is about tackling issue Y through innovative solutions.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This project focuses on improving user experience in online voting.",
    },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-4 shadow-lg rounded-md hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Vote Now
          </button>
        </div>
      ))}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {projects.map((project) => (
    <div key={project.id} className="bg-white p-4 rounded-md shadow-md">
      <h3 className="font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <button className="bg-blue-500 text-white rounded mt-4">Vote Now</button>
    </div>
  ))}
</div>

    </div>
  );
}

export default ProjectList;
