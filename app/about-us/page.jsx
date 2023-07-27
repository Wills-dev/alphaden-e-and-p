import "./About.css";
import "../page.css";
import Link from "next/link";
import Image from "next/image";
import Contact from "@components/Contact";

const page = () => {
  return (
    <div>
      {" "}
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>About Us</h1>
            <h5>
              <Link href="/">Home</Link>{" "}
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
              </svg>{" "}
              About Us
            </h5>
          </div>
        </div>
      </section>
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
      <section className="container">
        <div className="partnerCtn">
          <div className="title-ctn">
            <p>OUR OFFICIAL CLIENTS WHO ARE PLEASED WITH OUR SERVICES</p>
            <h1>TRUSTED CLIENTS</h1>
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
    </div>
  );
};

export default page;
