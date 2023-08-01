import Contact from "@components/Contact";
import Link from "next/link";
import "../page.css";
import "./Services.css";

const page = () => {
  return (
    <div>
      {" "}
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Services</h1>
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
              Services
            </h5>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="service-main-ctn">
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Alpha Smart Pipe</h5>
                <p>
                  {" "}
                  Alpha Smart Pipe is an advanced and innovative solution
                  designed to revolutionize gas processing operations. This
                  cutting-edge technology offers real-time monitoring and
                  control of gas pipelines, providing unparalleled insights into
                  gas flow, pressure, and temperature. With its intelligent
                  analytics capabilities, Alpha Smart Pipe optimizes gas
                  transportation, enhances operational efficiency, and ensures
                  the smooth and reliable flow of gas throughout the network.
                  Its state-of-the-art features make it a game-changer in the
                  gas processing industry, empowering operators to make
                  data-driven decisions, detect anomalies, and proactively
                  address potential issues. Embrace the future of gas processing
                  with Alpha Smart Pipe and unlock the full potential of your
                  gas infrastructure.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-img img-2"></div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-img img-1"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Smart Regulators</h5>
                <p>
                  Introducing Smart Regulators, a revolutionary solution that
                  brings unmatched intelligence to gas regulation and
                  distribution. Smart Regulators leverage advanced IoT
                  technologies, enabling precise and automated control of gas
                  pressure at various points in the distribution network. With
                  real-time data insights and remote management capabilities,
                  Smart Regulators optimize gas supply, reduce waste, and
                  enhance system stability.{" "}
                  <p>
                    Our cutting-edge regulators ensure that gas is distributed
                    efficiently, responding dynamically to demand fluctuations
                    and maintaining a constant supply to consumers. Embrace
                    Smart Regulators to elevate your gas distribution
                    infrastructure, enhance safety, and deliver a seamless gas
                    supply experience to end-users.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Qdropp</h5>
                <p>
                  {" "}
                  Qdropp is a game-changing platform for gas processing
                  companies seeking seamless supply chain management. This
                  comprehensive software solution streamlines and automates
                  every aspect of the gas procurement process, from sourcing to
                  delivery. With Qdropp, companies gain complete visibility into
                  inventory levels, monitor supplier performance, and optimize
                  procurement decisions through data-driven analytics. This
                  intelligent platform empowers gas processing companies to
                  reduce costs, minimize stockouts, and ensure timely
                  deliveries. Whether it's bulk procurement or spot purchases,
                  Qdropp simplifies the complexities of gas supply chain
                  management, ensuring your operations run efficiently and
                  reliably.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-img img-3"></div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-img img-4"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>iseyo</h5>
                <p>
                  iseyo is an innovative gas analytics platform that unlocks the
                  power of data to optimize gas processing operations. With its
                  advanced AI and machine learning algorithms, iseyo processes
                  vast amounts of data, extracting valuable insights to improve
                  process efficiency, detect anomalies, and predict equipment
                  failures. This intelligent platform empowers gas processing
                  companies to make informed decisions, enhance safety, and
                  maximize productivity. iseypo's user-friendly interface
                  presents critical information in a visually engaging manner,
                  making it easy for operators and engineers to gain actionable
                  insights. Embrace iseyo and harness the potential of
                  data-driven intelligence for your gas processing endeavors.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>EnergyHub / Eontime Platform</h5>
                <p>
                  {" "}
                  EnergyHub and Eontime Platform combine forces to create an
                  all-encompassing ecosystem for gas processing operations.
                  EnergyHub is a comprehensive monitoring and management system
                  that provides real-time visibility into gas production,
                  processing, and distribution. Its intuitive dashboard enables
                  efficient monitoring of critical parameters, allowing
                  operators to respond swiftly to any deviations. Eontime
                  Platform, on the other hand, offers advanced scheduling, asset
                  management, and predictive maintenance capabilities. By
                  integrating these two platforms, gas processing companies gain
                  an end-to-end solution that optimizes efficiency, minimizes
                  downtime, and maximizes resource utilization. Embrace
                  EnergyHub and Eontime Platform for an interconnected and
                  intelligent gas processing ecosystem that elevates your
                  operations to new heights.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-img img-6"></div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default page;
