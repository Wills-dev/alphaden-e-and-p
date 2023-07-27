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
          <h6>Fueling the Future:</h6>
          <h1>
            Sustainable <br /> Energy Solutions<span>.</span>
          </h1>

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
      <section className="step-ctn">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <h5>How it works</h5>
                <h2>Business Strategies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">1</span>
                <h6>Step 1</h6>
                <h2>Exploration and drilling</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">2</span>
                <h6>Step 2</h6>
                <h2>Refining and processing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="step-wrapper">
                <span className="bg-text">3</span>
                <h6>Step 3</h6>
                <h2>Transportation & distribution</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-img"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h5>Mission & Vision</h5>
                <h1>Driving Forward</h1>

                <h6>Setting the course for success</h6>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <h6>Charting a path to the future</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod temp or incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="services-ctn">
          <div className="title-ctn">
            <p>Our Expert Services</p>
            <h1>Meeting Your Energy Needs</h1>
          </div>
          <div className="row">
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="service-wrap">
                  <div className="square"></div>
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
                    <h5>Exploration & Drilling</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                    <h5>Refining & Processing</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                    <h5>Transport & Distribution</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Renewable Energy Solutions</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Maintenance & Repair</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      />
                    </svg>
                  </div>
                  <div className="service">
                    <h5>Management & Sustainability</h5>
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                <h1>Shaping the Future</h1>

                <h6>Cutting-edge Technology and Innovations</h6>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <h6>A Track Record of Successful Projects</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod temp or incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
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
