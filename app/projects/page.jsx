import "../page.css";
import Link from "next/link";
import Contact from "@components/Contact";

const page = () => {
  return (
    <div>
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Projects</h1>
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
              Projects
            </h5>
          </div>
        </div>
      </section>
      <section className="projects-ctn">
        <div className="container">
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
      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h5>Expertise & Experience</h5>

                <h6>Gas Processing Expertise</h6>
                <p>
                  Our expertise in gas processing sets us apart in the industry.
                  We are the first Nigerian domestic company to commercialize
                  flair Gas. We are proficient in handling various forms of
                  natural gas, including LNG (Liquefied Natural Gas), CNG
                  (Compressed Natural Gas), and LPG (Liquefied Petroleum Gas).
                  Whether it's liquefaction, compression, or purification, our
                  state-of-the-art facilities are equipped to handle each
                  process efficiently and safely. Our team of seasoned
                  professionals ensures that gas is processed to the highest
                  standards, meeting the stringent demands of the market.
                </p>
                <h6>Complete Solutions for the Oil and Gas Industry</h6>
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
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-img-2"></div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default page;
