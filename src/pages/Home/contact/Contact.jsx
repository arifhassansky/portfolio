import Aos from "aos";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6gnqrj",
        "template_7uizrws",
        form.current,
        "H-t7KaPvHV_1LxB21"
      )
      .then(() => {
        form.current.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your message has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="contacts"
      className="w-11/12 mx-auto py-28 text-gray-200"
    >
      <div className="px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg ">
            What's next? Feel free to reach to me if you'er looking for a
            developer, have a query, or simple want to connect.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Left Section: Form */}
          <div className="md:rounded-l-xl shadow-lg p-8 md:w-1/2 bg-[#293549]">
            <h3 className="text-3xl font-semibold  mb-6">Contact Me</h3>
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full border-2 border-primary bg-transparent  p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="input input-bordered w-full border-2 border-primary bg-transparent p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  className="input input-bordered w-full border-2 border-primary bg-transparent p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="input input-bordered w-full  border-2 border-primary bg-transparent p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="textarea textarea-bordered w-full h-32 border-2 border-primary bg-transparent p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
              ></textarea>
              <button
                type="submit"
                className="btn w-full px-9 py-3 text-white text-lg font-semibold rounded-lg bg-primary border-none hover:bg-white hover:text-black transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="md:w-1/2 text-gray-200 mt-4 md:mt-0 pl-8 md:rounded-r-xl bg-[#28282d]">
            <div className="md:py-[99px] lg:py-28 space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-primary">
                  <FaLocationDot size={40} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p>Mohammadpur, Dhaka, Bangladesh.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary">
                  <FaPhone size={40} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p>+01960606195</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary">
                  <MdEmail size={40} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p>mdarifhassan374@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
