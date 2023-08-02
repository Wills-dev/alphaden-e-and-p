import "./privacy.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {" "}
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Privacy policies</h1>
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
              Privacy
            </h5>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="privacy-ctn">
          <h5>We advice user adhere to our policies?</h5>
          <p>
            It is the policy of the ALPHADEN GAS LIMITED to provide a safe and
            healthy workplace and high standards of occupational hygiene for all
            its employees; and to conduct its activities in such a manner as to
            avoid any harmful effect on the environment. The company is
            committed to the following health, safety, and environmental
            objectives:
          </p>

          <ul>
            <li>
              {" "}
              To set standards which ensure compliance with all relevant health,
              safety, environmental and security regulations and legislative
              requirements.
            </li>
            <li>
              To ensure that the health and safety responsibilities of all
              cadres of management and staff are defined.
            </li>
            <li>
              To communicate openly with all employees and other persons likely
              to be affected by the operations of the company about the
              promotion of a safe working environment and safe systems of work.
            </li>
            <li>
              To inform employees of their duty to act responsibly and to take
              all reasonable precautions, not only to protect themselves but
              others from injury, preventable illness, loss or damage to
              property, which could arise from their actions.
            </li>
            <li>
              To ensure that all employee receive adequate and suitable training
              to enable them to perform their duties in a safe and
              environmentally responsible manner.
            </li>
            <li>
              To encourage all employees to participate in the continuing
              improvement of health, safety, environmental and security
              performance and to recognize that individual responsibility for
              health and safety cannot be delegated.
            </li>
            <li>
              To carry out assessments of new and existing operations, annual
              audits and regular reviews of health and safety performance.
            </li>
            <li>
              To minimize the production of waste by efficient use of resources,
              promote the recycling of materials when waste cannot be eliminated
              and dispose of waste materials in an environmentally responsible
              manner, thereby reducing pollution of air, water or land to a
              practicable minimum.
            </li>
            <li>
              To control safety, health, environmental hazards, and nuisances,
              which may cause harm or offence to the community.
            </li>
            <li>
              To monitor and review energy consumption, reduce any unnecessary
              energy usage and implement energy-efficient practices.
            </li>
            <li>
              To seek continuous improvement in methods of identifying,
              assessing and controlling health, safety, and environmental
              hazards.
            </li>
            <li>
              To improve the HSE awareness level of both staff and
              sub-contractors involved in our operations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
