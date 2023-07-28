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
                <h5>Exploration & Drilling</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-img img-1"></div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-img img-2"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Refining & Processing</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Transport & Distribution</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
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
                <h5>Renewable Energy Solutions</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Maintenance & Repair</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-img img-5"></div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <div className="service-main-img img-6"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="service-main-content">
                <h5>Management & Sustainability</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  minus cupiditate hic suscipit tempora quod quae maiores
                  repellendus beatae magnam amet fuga ducimus autem odio
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                  reprehenderit doloremque odio quis voluptate, natus asperiores
                  quam cum fugiat dicta! Ab, impedit enim ratione laudantium
                  molestias doloribus architecto ullam voluptatum necessitatibus{" "}
                </p>
                <p>
                  nesciunt, qui saepe magni ullam similique neque quam aut
                  soluta. Exercitationem voluptates quaerat placeat vel unde.
                  Voluptas, rem nihil consequatur dolore beatae non officia
                  sequi aliquid magnam nisi obcaecati aspernatur explicabo est
                </p>
              </div>
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
      <Contact />
    </div>
  );
};

export default page;
