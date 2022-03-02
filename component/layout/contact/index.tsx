import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5419116284897!2d107.01859491365553!3d-6.191992495517346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989b7d3ecaa89%3A0x8246e6b9209deccb!2sRidhliver%20Software!5e0!3m2!1sen!2sid!4v1641485678600!5m2!1sen!2sid"
                width="400"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Kontak</h3>
                <p className="footer-text mb-0">+62 821 2412 5844</p>
                <p>
                  <a href="mailto:ridhobagaskara68@gmail.com">
                    ridhobagaskara68@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://github.com/katsuragir">
                    github.com/katsuragir
                  </a>
                </p>
              </div>

              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/katsuragir"
                    className="uil uil-dribbble"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Github"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/katsuragi_r/"
                    className="uil uil-instagram"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ridho-gumelar-bagaskara-45620217a/"
                    className="uil uil-link"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Linkedin"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk</h2>

              <div className="row">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <Image
                    src="/QRcode.png"
                    width={200}
                    height={200}
                    alt="QRCode"
                  />
                </div>

                <div className="ml-lg-auto col-lg-5 col-12">
                  <a
                    href="https://wa.link/bycka8"
                    className="btn mr-lg-2 custom-btn"
                  >
                    Whatapps
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
