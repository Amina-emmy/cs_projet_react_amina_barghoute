import "./_about.scss"
import { Footer } from "../../layouts/Footer";
import about from "../../assets/images/about.jpg"
export const About = () => {
  return (
    <>
      <section>
        <div className="bgpic">
          <div className="bgtitre text-light"><h1>ABOUT</h1></div>
        </div>
        <div className="d-flex justify-content-lg-center gap-lg-2 p-lg-5 divAbout">
          <div className="divAboutChild">
            <img src={about} alt="about" />
          </div>
          <div className="divAboutChild2">
            <div>
              <h3>Our story</h3>
            </div>
            <div className="opacity-50">
              <p>
                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
              </p>
            </div>
            <div className="mt-3 ms-2 opacity-50 ps-2 border-start border-2">
              <p>
                Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
              </p>
              <p>- Steve Job’s</p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};
