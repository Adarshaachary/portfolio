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

      <div className="w-full max-w-3xl">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>


        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 shadow-lg rounded-xl p-8 flex flex-col gap-6"
        >

          {/* Name */}

          <div>
            <label className="block mb-2 font-medium text-white">
              Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>



          {/* Email */}

          <div>
            <label className="block mb-2 font-medium text-white">
              Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>



          {/* Message */}

          <div>
            <label className="block mb-2 font-medium text-white">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>



          {/* Button */}

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>


        </form>



        {/* Status Message */}

        {
          status && (
            <p
              className={`text-center mt-5 font-semibold ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )
        }


      </div>

    </section>
  );
};


export default Contact;