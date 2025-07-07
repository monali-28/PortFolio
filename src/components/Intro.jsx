// import './Intro.css'; // Ensure your CSS styles still apply

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="intro-title">
              I Am<br />
              <span className="role-highlight">Web Designer</span>
            </h1>
            <p className="intro-description">
              I am a web developer, proficient in coding and maintaining
              websites to ensure functionality and responsiveness.
            </p>
            <div className="intro-buttons">
              <a href="./Monali_Khairnar.pdf" className="btn-download">
                download CV
              </a>
              
            </div>
            {/* <div className="social-icons">
              <a href="#" className="social-icon">📍</a>
              <a href="#" className="social-icon">💼</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📘</a>
            </div> */}
          </div>

          <div className="intro-visual">
            <div className="profile-circle">
              <div className="profile-image">
                <img
                  src="/profile-1.png"
                  alt="Monali Khairnar"
                  className="avatar-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
