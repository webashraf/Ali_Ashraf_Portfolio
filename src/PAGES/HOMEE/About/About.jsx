import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row px-16">
        <div className="lg:w-1/2 relative">
          <img src={person} className="max-w-md rounded-lg shadow-2xl" />
          <img src={parts} className="max-w-sm hidden lg:block rounded-lg shadow-2xl absolute top-1/2 left-40 border-8 border-white" />
        </div>
        <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-orange-400">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="pb-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-orange-500 border-orange-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
