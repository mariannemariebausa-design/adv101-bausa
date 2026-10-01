import Link from "next/link";

export default function Home() {
  return (
    <div className="page">

      {/* Hero */}
      <section className="hero">

        <div className="hero-text">

          <span className="small-label">
            ✿ WELCOME TO MY WEBSITE ✿
          </span>

          <h1>
            Hello, I'm
            <br />
            <span>Marianne!</span>
          </h1>

          <p>
            Welcome to my little corner of the internet!
            This website is a collection of my interests,
            experiences, creativity, and projects.
          </p>

          <div className="hero-buttons">

            <Link href="/portfolio" className="primary-button">
              Explore My Portfolio ♡
            </Link>

            <Link href="/gallery" className="secondary-button">
              View Gallery ✿
            </Link>

          </div>

        </div>

      </section>

      {/* Quote */}
      <section className="quote-section">

        <div className="quote-card">

          <span className="quote-decoration">“</span>

          <p>
            "If it is meant to be, It will be."
          </p>

          <span className="quote-heart">♡</span>

        </div>

      </section>

    </div>
  );
}