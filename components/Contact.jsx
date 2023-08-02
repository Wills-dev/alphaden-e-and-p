import "./Contact.css";

const Contact = () => {
  return (
    <div className="cont-ctn">
      {" "}
      <section className="container">
        <div className="title-ctn">
          <p>HAVE QUESTION?</p>
          <h1>CONTACT US</h1>
        </div>
        <div className="contactWrapperForm">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-12">
              <div className="addressCtn">
                <div>
                  <h5>Address:</h5>
                  <p>
                    {" "}
                    Plot 23 Furo Ezimora Street, Off Adewunmi Adebimpe Drive,
                    Off Marwa Roundabout, Lekki Phase 1, Lagos State, Nigeria.
                  </p>
                </div>
                <div>
                  <h5>Phone:</h5>
                  <p>+(234) 0909-933-3222</p>
                </div>
                <div>
                  <h5>Email:</h5>
                  <p>info@alphadengas.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-12">
              <form className="contactFormCtn">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <input type="email" placeholder="E-Mail" />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="number" placeholder="Your Number" />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12">
                    <textarea type="text" placeholder="Your Message" rows={2} />
                  </div>
                </div>

                <button type="submit">
                  SEND MESSAGE{" "}
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
