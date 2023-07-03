import "./Contact.css";
const Contact = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(email, pass);
  };
  return (
    <div>
      <div className="text-center w-1/2 mx-auto pb-24 text-white-100">
        <h3 className="text-xl font-bold text-zinc-500 ">
          Have a project on Mind?
        </h3>
        <h1 className="text-5xl font-bold text-cyan-500 capitalize">
          Feel free to drop me a message{" "}
        </h1>
      </div>

      <div className="flex items-center flex-row-reverse px-20 shadow-2xl shadow-cyan-400 my-36 mx-20">
        <div className="w-1/2 contact-form">
          <form onSubmit={handleLogin} className="card-body text-white-100">
            <h2 className="text-cyan-500 text-4xl uppercase underline font-serif">
              Get a Quote
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white-100">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered input-info text-cyan-600 font-bold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white-100">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered input-info text-cyan-600 font-bold"
              />
              <label className="label">
                <span className="label-text text-white-100">Message</span>
              </label>
              <textarea
                className="textarea textarea-info text-cyan-600 font-bold"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info send-btn">Send</button>
            </div>
          </form>
        </div>

        <div className="w-1/2 shadow-2xl shadow-cyan-500 p-10">
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
