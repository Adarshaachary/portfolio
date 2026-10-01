import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_afncqda",
        "template_i9ancfi",
        form.current,
        {
          publicKey: "uDhX3yoyEZJD3ZLaR",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-3xl mx-auto">

        {/* Heading */}
        <div
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Contact Me
          </h2>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          data-scroll-animation="scale"
          style={{ transitionDelay: "0.25s" }}
          className="
            bg-gray-900
            shadow-lg
            rounded-xl
            p-8
            flex
            flex-col
            gap-6
            border
            border-gray-800
            transition-all
            duration-300
            hover:border-gray-700
            hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)]
          "
        >

          {/* Name */}
          <div
            data-scroll-animation="fade-up"
            style={{ transitionDelay: "0.4s" }}
          >
            <label className="block mb-2 font-medium text-white">
              Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="
                w-full
                p-3
                bg-gray-800
                text-white
                placeholder-gray-400
                border
                border-gray-700
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                duration-300
              "
            />
          </div>

          {/* Email */}
          <div
            data-scroll-animation="fade-up"
            style={{ transitionDelay: "0.55s" }}
          >
            <label className="block mb-2 font-medium text-white">
              Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="
                w-full
                p-3
                bg-gray-800
                text-white
                placeholder-gray-400
                border
                border-gray-700
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                duration-300
              "
            />
          </div>

          {/* Message */}
          <div
            data-scroll-animation="fade-up"
            style={{ transitionDelay: "0.7s" }}
          >
            <label className="block mb-2 font-medium text-white">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="
                w-full
                p-3
                bg-gray-800
                text-white
                placeholder-gray-400
                border
                border-gray-700
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                duration-300
                resize-y
              "
            ></textarea>
          </div>

          {/* Button */}
          <div
            data-scroll-animation="fade-up"
            style={{ transitionDelay: "0.85s" }}
          >
            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-blue-700
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(37,99,235,0.30)]
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              Send Message
            </button>
          </div>

        </form>

        {/* Status Message */}
        {status && (
          <p
            data-scroll-animation="fade-up"
            style={{ transitionDelay: "0.1s" }}
            className={`
              text-center
              mt-5
              font-semibold
              ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }
            `}
          >
            {status}
          </p>
        )}

      </div>
    </section>
  );
};

export default Contact;