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
      <Contact />
    </div>
  );
};

export default page;
