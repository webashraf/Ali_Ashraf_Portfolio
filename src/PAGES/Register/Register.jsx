import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";

const Register = () => {
    const {createUserEmailPass, user} = useContext(AuthContext)
    console.log(user);
    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;

        console.log(name, email, pass);

        createUserEmailPass(email, pass)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })



    }

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 text-center pb-6">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        <p>
          All ready have an account 
          <Link to={"/login"} className="text-orange-500">
            &nbsp; login now.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
