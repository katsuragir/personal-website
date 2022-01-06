import Image from "next/image";

export default function About() {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                Welcome to{" "}
                <span className="mobile-block">my portfolio website!</span>
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hallo, Saya</span>
                <div className="animated-info">
                  <span className="animated-item">Ridho Gumelar Bagaskara</span>
                  <span className="animated-item">Fullstak Developer</span>
                </div>
              </h1>

              <p>
                Motto saya adalah nothing is impossible in the world of
                programmers as long as the skills and requirement are adequate.
              </p>
              <p>Building a successful product is a challenge.</p>

              <div className="custom-btn-group mt-4">
                <a href="#" className="btn mr-lg-2 custom-btn">
                  <i className="uil uil-file-alt"></i> Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <Image
                src="/undraw/software-enginering.svg"
                width={1131}
                height={812.20611}
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
