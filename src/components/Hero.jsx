import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      {/* Mobile Layout (dark theme) */}
      <div className="block md:hidden py-16 px-6 bg-slate-900 text-white w-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          {/* Icon */}
          <div className="p-6 rounded-full bg-slate-800 shadow-lg animate-pulse transition delay-75">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-slate-300 text-6xl"
            />
          </div>

          {/* Text */}
          <h1 className="text-3xl font-bold leading-snug">
            <span className="block text-white">Javatrix Academy</span>
            <span className="text-slate-300">
              <Typewriter
                words={[
                  "Learn Java the Smart Way",
                  "Master Coding",
                  "Build Your Future",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-slate-400 text-base">
            Hands-on projects • Expert mentors • Job-ready skills
          </p>

          {/* CTA */}
          <Link
            to="/courses"
            className="mt-4 bg-white text-slate-900 hover:bg-slate-400 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      {/* Desktop Layout (dark theme, fluid background) */}
      <section className="hidden md:block py-20 px-6 bg-slate-900 text-white w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Javatrix Academy</span>
              <br />
              <span className="text-slate-300">
                <Typewriter
                  words={[
                    "Learn Java the Smart Way",
                    "Master Coding",
                    "Build Your Future",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-6">
              Build real-world projects. Master Java and backend development.
              Become job-ready with our expert-led training.
            </p>
            <Link
              to="/courses"
              className="inline-block bg-white text-slate-900 hover:bg-slate-400 px-6 py-3 rounded-full font-semibold transition"
            >
              Explore Courses
            </Link>
          </div>

          {/* Logo */}
          <div className="md:w-1/2 text-center animate-pulse transition delay-75">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-slate-400 text-9xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
