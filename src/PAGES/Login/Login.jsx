import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        signInUser(email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.log(error);
        })

        console.log(email, pass);
    }





  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-[75%] justify-around">
        <div className="text-center lg:text-left">
          <img src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center pb-6">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p>Are you new here <Link to={"/register"} className="text-orange-500">register now.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
