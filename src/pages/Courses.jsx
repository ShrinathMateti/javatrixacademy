import { Link } from "react-router-dom";
import courses from "../data/coursesData";

const Courses = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Courses
        </h2>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition transform overflow-hidden"
            >
              {/* Thumbnail */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* White Button */}
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full bg-white text-center text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-400 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
