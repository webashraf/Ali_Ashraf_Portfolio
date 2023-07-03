import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_2wsjccd",
        "template_1ypdryr",
        form.current,
        "jdMquwCyg3sRsQuFG"
      )
      .then(
        (result) => {
          console.log(result);
          event.target.reset();
          Swal.fire({
            icon: 'success',
            title: 'Your message has been sent',
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="py-36">
      <div className="text-center lg:w-1/2 mx-auto lg:pb-24 text-white-100">
        <h3 className="text-xl font-bold text-zinc-500 ">
          Have a project on Mind?
        </h3>
        <h1 className="text-5xl font-bold text-cyan-500 capitalize">
          Feel free to drop me a message{" "}
        </h1>
      </div>

      <div className="lg:flex items-center flex-row-reverse lg:px-20 shadow-2xl shadow-cyan-400 lg:mb-3 lg:mx-20">
        <div className="lg:w-1/2 contact-form">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card-body text-white-100"
          >
            <h2 className="text-cyan-500 text-4xl uppercase underline font-serif">
              Get a Quote
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white-100">Name*</span>
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="input input-bordered input-info text-cyan-600 font-bold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white-100">Email*</span>
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="input input-bordered input-info text-cyan-600 font-bold"
              />
              <label className="label">
                <span className="label-text text-white-100">Message*</span>
              </label>
              <textarea
                className="textarea textarea-info text-cyan-600 font-bold"
                name="message"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-info send-btn"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>

        <div className="lg:w-1/2 shadow-2xl shadow-cyan-500 p-10">
          <h1 className="text-4xl underline uppercase text-cyan-500 mb-6 font-serif">
            Contact Info
          </h1>

          <h3 className="text-cyan-400 text-xl">
            <span className="font-bold">Phone: </span>+880 1323521082
          </h3>
          <h3 className="text-cyan-400 text-xl">
            <span className="font-bold">Email: </span>aliashraftamim@gmail.com
          </h3>
          <h3 className="text-cyan-400 text-xl">
            <span className="font-bold">Address: </span>Narayanganj, Dhaka,
            Bangladesh
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
