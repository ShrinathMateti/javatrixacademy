const Testimonials = () => {
  const testimonials = [
    {
      name: "Imrouze Shaikh",
      feedback:
        "Clear and Practical teaching made Selenium easy to grasp and apply. Grateful for guidance and dedication in every session",
      image: "imrouze.jpg",
    },
    {
      name: "Upendra Gujapaneni",
      feedback:
        "Shrinath anna shares his knowledge with students in detail until the issue is solved. He is a helpful guide and supports throughout course",
      image: "uppi.jpg",
    },
    {
      name: "Mohit Kumar",
      feedback:
        "Clear teaching with hands-on practice made learning Selenium easy and effective. Highly recommended!",
      image: "mohit.avif",
    },
    {
      name: "Bhargavi Sherla",
      feedback:
        "Sir’s step-by-step teaching from basics with practical examples made Selenium very easy to understand.",
      image: "bhargavi.avif",
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          💬 What Our Students Say
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 bg-slate-800 border border-slate-700 shadow-md text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-600"
                />
                <h4 className="text-white font-semibold text-lg">{t.name}</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                &ldquo;{t.feedback}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
