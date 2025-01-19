// Create array of project objects
const projects = [
    {
        name: "SocialHub",
        description: "A social media app for sharing posts",
        technologyUsed: ["Flutter", "Firebase"],
        year: 2024
    },


    {
        name: "E-Commerce Platform",
        description: "An online shopping website",
        technologyUsed: ["React", "Node.js", "MongoDB"],
        year: 2023
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        year: 2022
  
    }
];

// Function to display projects using map
function displayProjects() {
    const projectDetails = projects.map(project => {
        return `Project Name: ${project.name}
Description: ${project.description}
Technology Used: ${project.technologyUsed.join(', ')}
Year: ${project.year}
${'-'.repeat(100)}`
    });

    // Join all project details with newlines and display
    console.log(projectDetails.join('\n'));
}

// Call the function to display projects
displayProjects();