import React, { useState } from 'react';

function Leaderboard() {
  const initialProjects = [
    { id: 1, title: "Project 1", description: "This is a brief description of Project 1.", votes: 0 },
    { id: 2, title: "Project 2", description: "Project 2 tackles issue Y.", votes: 0 },
    { id: 3, title: "Project 3", description: "Improving user experience.", votes: 0 },
  ];

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : initialProjects;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  // Handle project search
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle voting
  const handleVote = (id) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === id ? { ...project, votes: project.votes + 1 } : project
      );
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return updatedProjects;
    });
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort projects by votes
  const sortedProjects = [...filteredProjects].sort((a, b) => b.votes - a.votes);

  // Paginate the projects
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Get the top-ranked project
  const topProject = sortedProjects[0];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Leaderboard</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border p-2 rounded mb-6"
      />

      {/* Display Top Project */}
      {topProject && (
        <div className="bg-yellow-100 p-4 shadow-lg rounded-md mb-6">
          <h3 className="font-bold">Top Ranked: {topProject.title}</h3>
          <p>{topProject.description}</p>
          <p>Votes: {topProject.votes}</p>
        </div>
      )}

      {/* Display Projects */}
      {currentProjects.map((project, index) => (
        <div
          key={project.id}
          className={`bg-white p-4 shadow-lg rounded-md mb-4 ${project.id === topProject?.id ? 'border-4 border-yellow-500' : ''}`}
        >
          <h3>{`${index + 1}. ${project.title}`}</h3>
          <p>{project.description}</p>
          <p>Votes: {project.votes}</p>
          <button
            onClick={() => handleVote(project.id)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Vote Now
          </button>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
