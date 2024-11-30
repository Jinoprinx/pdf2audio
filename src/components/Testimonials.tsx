import { useState } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    review: "This app is a lifesaver! It converted my PDFs into audio seamlessly.",
    avatar: "/images/user1.jpg",
  },
  {
    name: "John Smith",
    review: "The multilingual support is fantastic. I highly recommend it!",
    avatar: "/images/user2.jpg",
  },
  {
    name: "Emily Davis",
    review: "Super fast and accurate. Perfect for students and professionals alike.",
    avatar: "/images/user3.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center space-x-4">
          <button onClick={prevTestimonial} className="text-primary text-2xl">
            ◀
          </button>
          <div className="text-center">
            <img
              src={testimonials[currentIndex].avatar}
              alt={`${testimonials[currentIndex].name}'s avatar`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 italic">
              "{testimonials[currentIndex].review}"
            </p>
            <h4 className="text-primary font-semibold mt-2">
              - {testimonials[currentIndex].name}
            </h4>
          </div>
          <button onClick={nextTestimonial} className="text-primary text-2xl">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
