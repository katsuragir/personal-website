import Image from "next/image";

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
              <div
                className="col-4"
                style={{ height: "100px" }}
                title="Vapehan"
              >
                <div className="project-info">
                  <a
                    href="https://vapehan.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/project/project-1.jpeg"
                      className="img-fluid"
                      alt="project image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              </div>

              <div className="col-4" title="GJSRobots">
                <div className="project-info">
                  <a
                    href="https://gjsrobots.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/project/project-2.jpeg"
                      className="img-fluid"
                      alt="project image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              </div>

              <div className="col-4" title="HSGMoto">
                <div className="project-info">
                  <a
                    href="https://hsgmoto.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/project/project-3.jpeg"
                      className="img-fluid"
                      alt="project image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
