import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AOS from "aos";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="section-padding text-center">
        <div className="container" data-aos="fade-up">
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Hero"
            className="img-fluid rounded shadow-sm mb-4"
          />
          <h1 className="fw-bold display-5 mb-3">
            Empowering Future Leaders
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Our vision is to create impactful learning experiences and
            community-driven initiatives that shape tomorrow’s leaders.
          </p>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="https://via.placeholder.com/500x400"
                alt="About"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p className="mb-4">
                We are committed to delivering high-quality education and
                empowering communities through structured programs and
                innovative approaches.
              </p>
              <Link to="/about">
                <button className="primary-btn">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section-padding text-center">
        <div className="container">
          <h2 className="fw-bold mb-5" data-aos="fade-up">
            Our Featured Courses
          </h2>

          <div className="row">
            {[1, 2, 3].map((course) => (
              <div
                className="col-md-4 mb-4"
                key={course}
                data-aos="zoom-in"
              >
                <div className="card premium-card">
                  <img
                    src="https://via.placeholder.com/400x250"
                    className="card-img-top"
                    alt="Course"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Course Name {course}
                    </h5>
                    <button className="primary-btn">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="primary-btn mt-4" data-aos="fade-up">
            Explore More
          </button>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="section-padding section-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">
                Join Our Volunteer Community
              </h2>
              <p className="mb-4">
                Become part of a passionate team dedicated to driving change.
                Your contribution can make a lasting difference.
              </p>
              <button className="primary-btn">
                Join Now
              </button>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <img
                src="https://via.placeholder.com/500x400"
                alt="Volunteer"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
