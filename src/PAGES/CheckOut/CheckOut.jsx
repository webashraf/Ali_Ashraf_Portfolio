import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  const { price, service_id, img, title } = service;
  const {user} = useContext(AuthContext);
  console.log(user?.email);

  const handleCheckOutForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const fastName = form.fastname.value;
    const phone = form.phone.value;
    const date = form.date.value;
    // const email = form.email.value;
    const message = form.message.value;

    const userData = {
      fastName,
      phone,
      date,
      email: user?.email,
      message,
      price,
      service_id,
      img,
      title
    };
    console.log(userData);

    fetch("http://localhost:5000/order", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="py-36">
      <div className="card flex-shrink-0 w-full max-w-3xl mx-auto shadow-2xl bg-base-100 text-center pb-6">
        <form onSubmit={handleCheckOutForm} className="card-body">
          <h1 className="text-5xl font-bold">Chekout now!</h1>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fast Name</span>
                </label>
                <input
                  type="text"
                  name="fastname"
                  placeholder="fast name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="your phone"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              name="message"
              placeholder="your message"
              className="textarea textarea-bordered w-full"
              id=""
              cols=""
              rows=""
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Check Out"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
