import Image from "next/image";
import "./page.css";
import Link from "next/link";
import Contact from "@components/Contact";

export default function Home() {
  return (
    <>
      <header className="main-header">
        <div className="overlay"></div>
        <div className="bg-container">
          <h1>
            Welcome to <br /> Alphaden Gas<span>.</span>
          </h1>
          <h6>
            Your Complete Midstream and Downstream Solutions Provider for the
            Oil and Gas Industry
          </h6>

          <Link href="/about-us">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </header>

      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-img"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h5>ABOUT US</h5>

                <h6>Setting the course for success</h6>
                <p>
                  At Alphaden Gas, we are a leading name in the oil and gas
                  industry, specializing in developing comprehensive midstream
                  and downstream solutions. With our cutting-edge expertise and
                  dedication to innovation, we have cemented our position as a
                  trusted partner for companies seeking top-notch gas processing
                  services and hydrogen production capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="step-ctn">
        <div className="container">
          <div className="title-ctn2 mb-5">
            <h1>Services</h1>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">1</span>

                <h2>Alpha Smart Pipe</h2>
                <p>
                  Alpha Smart Pipe is an advanced and innovative solution
                  designed to revolutionize gas processing operations.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">2</span>
                <h2>Smart Regulators</h2>
                <p>
                  Introducing Smart Regulators, a revolutionary solution that
                  brings unmatched intelligence to gas regulation and
                  distribution.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">3</span>
                <h2>Qdropp</h2>
                <p>
                  Qdropp is a game-changing platform for gas processing
                  companies seeking seamless supply chain management.{" "}
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">4</span>
                <h2>iseyo</h2>
                <p>
                  iseyo is an innovative gas analytics platform that unlocks the
                  power of data to optimize gas processing operations.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">5</span>
                <h2>EnergyHub / Eontime Platform</h2>
                <p>
                  EnergyHub and Eontime Platform combine forces to create an
                  all-encompassing ecosystem for gas processing operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="services-ctn">
          <div className="title-ctn"></div>
          <div className="row">
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="service-wrap">
                  <div className="icon-ctn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Gas Processing Expertise</h5>
                    <p>
                      Our expertise in gas processing sets us apart in the
                      industry. We are the first Nigerian domestic company to
                      commercialize flair Gas.
                    </p>
                  </div>
                </div>

                <Link href="/services">
                  <button> Discover</button>
                </Link>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="service-wrap">
                  <div className="icon-ctn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Hydrogen Production</h5>
                    <p>
                      Recognizing the rising importance of hydrogen as a clean
                      and versatile energy source, Alphaden Gas has proudly
                      initiated processes to produces both blue and green
                      hydrogen.
                    </p>
                  </div>
                </div>

                <Link href="/services">
                  <button> Discover</button>
                </Link>
              </div>
            </div>
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="service-wrap">
                  <div className="icon-ctn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Complete Solutions for the Oil and Gas Industry</h5>
                    <p>
                      At Alphaden Gas, we understand the intricacies of the oil
                      and gas sector, and that's why we offer complete
                      solutions.
                    </p>
                  </div>
                </div>

                <Link href="/services">
                  <button> Discover</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-ctn">
        <div className="container">
          <div className="title-ctn">
            <p>Success Stories</p>
            <h1>Our Proudest Accomplishments</h1>
          </div>

          <div className="projectCtn">
            <div className="row">
              <div className=" col-sm-6 col-12 p-0">
                <div className="projectOne">
                  <h4>Construction and Maintenance</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className=" col-sm-6 col-12 p-0">
                <div className="projectTwo">
                  <h4>Onshore Oil Field Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 p-0">
                <div className="projectThree">
                  <h4>Deep Sea Drilling Project</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className=" col-sm-6 col-12 p-0">
                <div className="projectFour">
                  <h4>Offshore Platform Installation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-2"></section>
      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h5>Expertise & Experience</h5>

                <h6>Cutting-edge and Innovations</h6>
                <p>
                  At Alphaden Gas, we understand the intricacies of the oil and
                  gas sector, and that's why we offer complete solutions. Our
                  midstream capabilities ensure efficient transportation and
                  storage of hydrocarbons, while our downstream expertise
                  involves refining, marketing, and distributing the final
                  products. With our end-to-end services, we streamline the
                  entire supply chain, guaranteeing reliable and cost-effective
                  operations.
                </p>
                <p>
                  Recognizing the rising importance of hydrogen as a clean and
                  versatile energy source, Alphaden Gas has proudly initiated
                  processes to produces both blue and green hydrogen. Our blue
                  hydrogen will be produced from natural gas, utilizing advanced
                  carbon capture and storage (CCS) technologies to minimize
                  carbon emissions, making it an environmentally responsible
                  choice. On the other hand, our green hydrogen will be produced
                  using renewable energy sources, providing a completely
                  emissions-free alternative for industries and customers
                  committed to sustainability.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-img-2"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="count-ctn">
        <div className="container">
          <div className="title-ctn2">
            <p>Fun Facts</p>
            <h1>Discover more</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-wrapper">
                <h1>
                  41 <span>+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-wrapper">
                <h1>
                  20k <span>+</span>
                </h1>
                <p>Successful Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-wrapper">
                <h1>
                  15k <span>+</span>
                </h1>
                <p>Customer Satisfaction</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-wrapper">
                <h1>
                  20 <span>+</span>
                </h1>
                <p>Awards For Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="partnerCtn">
          <div className="title-ctn">
            <p>OUR OFFICIAL CLIENTS WHO ARE PLEASED WITH OUR SERVICES</p>
            <h1>CLIENTS</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_1.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_2.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_3.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_4.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_5.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_6.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_7.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className="partner">
                <Image
                  src="/assets/images/logo_8.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
