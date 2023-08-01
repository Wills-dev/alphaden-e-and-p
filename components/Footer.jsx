import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-wrap">
        <div className="container">
          <div className="footerWrap">
            <div className="row">
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4> Alphaden Gas</h4>
                  <p>
                    Join us at Alphaden Gas and unlock the potential of a
                    complete midstream and downstream solutions provider,
                    committed to a cleaner, more sustainable energy future.
                    Contact us today to learn more about our services and how we
                    can partner with you in shaping a better tomorrow.
                  </p>
                  <p>+(234) 0909-933-3222</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4> Office</h4>
                  <p>
                    Plot 23 Furo Ezimora Street, Off Adewunmi Adebimpe Drive,
                    Off Marwa Roundabout, Lekki Phase 1, Lagos State, Nigeria.
                  </p>

                  <p>info@alphadengas.com</p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4>Follow Us</h4>
                  <p>Let us be social</p>
                  <div className="footerSocial">
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/linkedin.svg"
                        width={20}
                        height={12}
                        alt="alphaden linkedin"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/instagram.svg"
                        width={20}
                        height={12}
                        alt="alphaden intagram"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/twitter.svg"
                        width={20}
                        height={12}
                        alt="Alphaden twitter"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/facebook.svg"
                        width={20}
                        height={12}
                        alt="Alphaden facebook"
                      />
                    </Link>
                  </div>
                  <p className="mt-4">
                    <span className="privacy-ctn">
                      <Link href="/privacy">Privacy policy</Link>
                    </span>
                  </p>
                  <p className="mt-2">
                    {" "}
                    Copyright © 2023 Alphaden Gas. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
