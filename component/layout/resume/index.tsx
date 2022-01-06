export default function Resume() {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Pengalaman</h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2019 - 2020</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>IT Staff - Web Development</span> <br />
                    <small>PT. Helihan Surya Gemilang</small>
                  </h3>
                  <p>
                    Spesialis Web Development yang mengerjakan :
                    <ul>
                      - Membuat atau membangun sebuah Web E-commerce, Antara
                      lain :<li>1) Vapehan Vape Store : vapehan.com</li>
                      <li>2) GJS robots Indonesia : gjsrobots.id</li>
                      <li>3) Vapor Lab Indonesia : vaporlabindonesia.co.id</li>
                      <li>4) Indonesian Juices : indonesianjuices.com</li>
                      <li>5) HSGMoto : hsgmoto.com</li>
                    </ul>{" "}
                    <ul>- Menghubungkan payment gateway dan ongkos kirim</ul>
                    <ul>
                      - Membangun sebuah Cloud Server VPS dengan menggunakan
                      Alibaba ECS (Elastic Compute Service)
                    </ul>
                    <ul>
                      - Membangun Web Hosting, Email Server, Security Center,
                      VPC, DNS, dan sebagainya
                    </ul>
                    <ul>
                      - Menggunakan Framwork Angular CLI dan Node.js sebagai
                      platform server side dengan metode rest api
                    </ul>
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2020 - 2021</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Fullstack Developer</span> <br />
                    <small>PT Fusi Solusi Transformasi</small>
                  </h3>
                  <p>
                    Frontend Project Indonesiapower. Membangun aplikasi project
                    management ProPMO.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2021 - Now</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Spesialist Angular Developer</span> <br />
                    <small>PT Bank Mandiri(Perseroan) Tbk</small>
                  </h3>
                  <p>
                    Membangun project frontend Backoffice mandiri, sebagai
                    outsourcing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Pendidikan</h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2015 - 2019</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Sistem Informasi</span> <br />
                    <small>STMIK Bina Insani</small>
                  </h3>
                  <p>IPK 3.27</p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2017 - 2018</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Computer Science</span> <br />
                    <small>NPIC</small>
                  </h3>
                  <p>
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://goo.gl/maps/FH38hB9cynpyGwsX9"
                    >
                      National polytechnic Institue of Cambodia
                    </a>{" "}
                    Alih kredit, dengan lulusan kriteria B+.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
