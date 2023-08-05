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
      {/* <section className="projects-ctn">
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
      </section> */}
      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h5>Project</h5>

                <h6> Obama Gas Flare commercialization Project</h6>
                <p>
                  Obama flow station is a crude oil processing facility operated
                  by Agip and located in Bayelsa State, Nigeria. The facility
                  comprises of an inlet manifold, separation and storage units.
                  Currently a large amount of gas produced in the facility is
                  flared. In a bid to commercialize the produced gas that are
                  currently partially flared and at the same time meet
                  regulatory requirements on gas flaring, Alphaden Gas has been
                  appointed to commercialize the flared gas produced from the
                  facility. To ensure full commercialization of gas flared at
                  Obama facility, Alphaden Gas has embarked on the design and
                  construction of a 20mmscfd LPG and LNG plant.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-img-3"></div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default page;
