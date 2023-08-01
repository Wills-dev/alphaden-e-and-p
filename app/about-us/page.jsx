import "./About.css";
import "../page.css";
import Link from "next/link";
import Image from "next/image";
import Contact from "@components/Contact";

const page = () => {
  return (
    <div>
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
      <section className="container">
        <div className="story-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="story-wrapper">
                <h5>Our story</h5>
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
            <div className="col-md-6 col-12">
              <div className="story-img-ctn"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="step-ctn">
        <div className="container">
          <div className="row">
            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
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
              </div>
            </div>

            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
                <h6>Hydrogen Production</h6>
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
            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
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
            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
                <h6> Commitment to Sustainability</h6>
                <p>
                  We are committed to sustainability in everything we do.
                  Alphaden Gas places a strong emphasis on reducing the
                  environmental impact of our operations and products. By
                  investing in cutting-edge technologies and green initiatives,
                  we aim to contribute to a cleaner and greener future for the
                  industry and the planet.
                </p>
              </div>
            </div>
            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
                <h6> Partner with Alphaden Gas</h6>
                <p>
                  Our team of skilled professionals, state-of-the-art
                  facilities, and unwavering dedication to excellence make
                  Alphaden Gas the ideal partner for your gas processing needs.
                  Whether you are looking for LNG, CNG, LPG solutions or seeking
                  to embrace hydrogen as part of your sustainable energy
                  strategy, we have the capacity and expertise to cater to your
                  unique requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-5"></section>
      <Contact />
    </div>
  );
};

export default page;
