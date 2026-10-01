export default function About() {
  return (
    <div className="page">

      <section className="page-title">

        <span className="small-label">
          ✿ A LITTLE STORY ✿
        </span>

        <h1>About Me</h1>

        <p>
          Here's a little more about the person
          behind this website.
        </p>

      </section>

      {/* About introduction */}
      <section className="about-main">

        <div className="about-image">

          <div className="profile-photo-wrapper">

            <img
      src="/profile1.png"
      alt="Marianne"
      className="profile-photo"
    />
          </div>

        </div>

        <div className="about-content">

          <span className="pink-tag">
            NICE TO MEET YOU! ♡
          </span>

          <h2>Hello, I'm Marianne!</h2>

          <p>
            Welcome to my personal website! This is a small
            space where I can introduce myself and showcase
            some of the things I have worked on.
          </p>

          <p>
            As a student, I am still discovering what area
            of technology interests me the most. Every
            project gives me an opportunity to learn
            something new.
          </p>

          <p>
            I believe that creativity and technology can
            work together to make experiences that are
            useful, enjoyable, and memorable.
          </p>

        </div>

      </section>

      {/* People Important to Me */}
<section className="section">

  <div className="section-heading">
    <span>♡</span>
    <h2>People That Are Important to Me</h2>
    <span>♡</span>
  </div>

  <div className="people-grid">

    {/* FAMILY */}
    <div className="person-card">

      <div className="person-image">
        <img
          src="/family.jpg"
          alt="My Family"
        />
      </div>

      <div className="person-content">

        <span className="person-icon">♡</span>

        <h3>Family</h3>

        <p>
          My family is one of the most important parts
          of my life. They give me love, support, and
          encouragement as I continue learning and
          growing.
        </p>

      </div>

    </div>


    {/* FRIENDS */}
    <div className="person-card">

      <div className="person-image">
        <img
          src="/friends.jpg"
          alt="My Friends"
        />
      </div>

      <div className="person-content">

        <span className="person-icon">✿</span>

        <h3>Friends</h3>

        <p>
          My friends bring happiness, laughter, and
          unforgettable memories into my life. I am
          grateful for the people who make every
          experience more meaningful.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Values */}
      <section className="values">

        <div className="value-box">
          <span>♡</span>
          <h3>Be Curious</h3>
          <p>
            Always stay open to learning something new.
          </p>
        </div>

        <div className="value-box">
          <span>✦</span>
          <h3>Be Creative</h3>
          <p>
            Don't be afraid to try new ideas.
          </p>
        </div>

        <div className="value-box">
          <span>✿</span>
          <h3>Keep Growing</h3>
          <p>
            Every experience is part of the journey.
          </p>
        </div>

      </section>

    </div>
  );
}