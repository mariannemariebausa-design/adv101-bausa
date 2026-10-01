export default function Portfolio() {
  return (
    <>
      <div className="page">
        {/* Page Header */}
        <section className="page-title">
          <span className="small-label">✿ GET TO KNOW ME ✿</span>

          <h1>My Portfolio</h1>

          <p>
            A little introduction about who I am, what I can do, and what I hope to achieve.
          </p>
        </section>

        {/* Profile */}
        <section className="portfolio-intro">

  <div className="portfolio-profile">
    <img
      src="/profile.png"
      alt="Marianne"
    />
  </div>

  <div className="portfolio-info">

    <span className="pink-tag">
      HELLO THERE! ♡
    </span>

    <h1>
      I'm Marianne Marie Bausa
    </h1>

    <p>
      I am a student who is interested in technology,
      creativity, and learning new skills. I enjoy
      exploring different areas of computing and
      developing ideas into useful and meaningful outputs.
    </p>

    <p>
      I am continuously learning and improving myself
      through every experience. My goal is to develop
      skills that will help me create things that are
      both functional and enjoyable.
    </p>

  </div>

</section>

        {/* Personal Details */}
        <section className="section">
          <div className="section-heading">
            <span>♡</span>
            <h2>My Journey</h2>
            <span>♡</span>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot">♡</div>

              <div className="timeline-card">
                <span>01</span>
                <h3>Learning</h3>
                <p>Building my foundation in information technology and computer-related subjects.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">✦</div>

              <div className="timeline-card">
                <span>02</span>
                <h3>Exploring</h3>
                <p>Exploring web development, programming, design, and different technologies.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">✿</div>

              <div className="timeline-card">
                <span>03</span>
                <h3>Growing</h3>
                <p>Improving my skills by creating projects, solving problems, and learning from mistakes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <div className="section-heading">
            <span>✿</span>
            <h2>My Skills</h2>
            <span>✿</span>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>💻</span>
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript & Next.js</p>
            </div>

            <div className="skill-card">
              <span>🎨</span>
              <h3>UI Design</h3>
              <p>Creative layouts and visual design</p>
            </div>

            <div className="skill-card">
              <span>🧩</span>
              <h3>Problem Solving</h3>
              <p>Logical thinking and finding solutions</p>
            </div>

            <div className="skill-card">
              <span>🌷</span>
              <h3>Creativity</h3>
              <p>Turning ideas into meaningful outputs</p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="goals-section">
          <div className="goals-card">
            <span className="small-label">♡ MY FUTURE ♡</span>

            <h2>What I Want To Achieve</h2>

            <p>
              I want to continue improving my technical and creative skills while gaining more experience in building websites and applications.
            </p>

            <div className="goal-list">
              <div>♡ Learn more about web development</div>
              <div>♡ Improve my programming skills</div>
              <div>♡ Create meaningful applications</div>
              <div>♡ Continue growing as a developer</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}