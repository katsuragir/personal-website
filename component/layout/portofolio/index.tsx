export default function Portofolio() {
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Portofolio</h2>
            </div>

            <div className="row">
              <div className="item">
                <div className="project-info">
                  <img
                    src="/project/project-1.jpeg"
                    className="img-fluid"
                    alt="project image"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <img
                    src="/project/project-2.jpeg"
                    className="img-fluid"
                    alt="project image"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <img
                    src="/project/project-3.jpeg"
                    className="img-fluid"
                    alt="project image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
