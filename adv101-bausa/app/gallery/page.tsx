const projects = [
  {
    title: "FutureTech",
    category: "Technology Project",
    image: "/FutureTech.png",
    description:
      "FutureTech is a technology-focused project that explores the possibilities of modern and future technologies. It presents creative ideas about how technology can shape the future and improve the way people live, communicate, and work.",
    tags: ["Technology", "Innovation", "Future"],
  },

  {
    title: "Maze Runner",
    category: "Game Project",
    image: "/MazeRunner.png",
    description:
      "Maze Runner is an interactive game project focused on navigating through a challenging maze. It encourages problem-solving, logical thinking, and exploration while providing an engaging gaming experience.",
    tags: ["Game", "Logic", "Interactive"],
  },
];

export default function Gallery() {
  return (
    <div className="page">

      {/* PAGE HEADER */}
      <section className="page-title">
        <span className="small-label">
          ✿ MY CREATIVE CORNER ✿
        </span>

        <h1>Project Gallery</h1>

        <p>
          A collection of projects and ideas
          I have created along my journey.
        </p>
      </section>


      {/* PROJECT GALLERY */}
      <section className="gallery-grid">

        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
          >

            {/* PROJECT IMAGE */}
            <div className="project-image">

              <img
                src={project.image}
                alt={`${project.title} project`}
              />

              <span className="project-number">
                0{index + 1}
              </span>

            </div>


            {/* PROJECT INFORMATION */}
            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>


              {/* TAGS */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>


              {/* FOOTER */}
              <div className="project-footer">
                <span>Made with ♡</span>
                <span>✦</span>
              </div>

            </div>

          </article>
        ))}

      </section>


      {/* BOTTOM MESSAGE */}
      <section className="gallery-message">

        <div className="message-card">

          <div className="message-icon">
            ✿
          </div>

          <div>
            <h2>More to come!</h2>

            <p>
              These projects are just part of my journey.
              I hope to create more interesting and
              meaningful projects in the future.
            </p>
          </div>

          <div className="message-heart">
            ♡
          </div>

        </div>

      </section>

    </div>
  );
}