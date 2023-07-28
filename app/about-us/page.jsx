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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta!{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus
                  recusandae quae vitae esse placeat porro corrupti quis
                  obcaecati quia saepe facere eos a aut reiciendis. Corporis
                  numquam mollitia excepturi id?
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
                <h6>Our mission</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. quam
                  cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus
                  recusandae quae vitae esse placeat porro corrupti quis
                  obcaecati quia saepe facere eos a aut reiciendis. Corporis
                  numquam mollitia excepturi id?
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-12">
              <div className="step-wrapper">
                <h6>Our vision</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. quam
                  cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus
                  recusandae quae vitae esse placeat porro corrupti quis
                  obcaecati quia saepe facere eos a aut reiciendis. Corporis
                  numquam mollitia excepturi id?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="team-ctn">
          <div className="team-title-ctn">
            <h4>Our Awesome Team</h4>
            <p>
              Alphaden P and E promotes a relaxed, culturally diverse workplace
              for the optimal performance of its employees, as well as an
              all-round friendly experience for anyone who walks through our
              doors. We are called Team Awesome!
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-1">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Williams Bassey</h6>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-2">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Elizabeth Bassey</h6>
                <p>Co-Founder & CTO</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-3">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Kaburi Ahmed</h6>
                <p>Head Partnerships</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-8">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Judith Ham</h6>
                <p>Human Resource Manager</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-4">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Wilson Gabriel</h6>
                <p>Finance Officer</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-9">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Bassey Bush</h6>
                <p> Public Relations</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-5">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Victor Wills</h6>
                <p>Digital Lead</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-6">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Maxwell Bassey</h6>
                <p>Lead Engineer</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-10">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Bridget Giwi</h6>
                <p>Head, Operations</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-7">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Alex Gumba</h6>
                <p>Engineer</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-11">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Debra Musk</h6>
                <p>Engineer</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="team-img-ctn team-12">
                <Link className="team-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="alphaden linkedin"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h6>Hassan Daku</h6>
                <p>Engineer</p>
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
