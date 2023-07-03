import ali_ashraf from "/public/ali_ashraf.png";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row px-16">
        <div className="lg:w-1/2 relative">
          <img
            src={ali_ashraf}
            className="max-w-md rounded-lg shadow-xl shadow-[#329eb6]"
          />
          {/* <img src={parts} className="max-w-sm hidden lg:block rounded-lg shadow-2xl absolute top-1/2 left-40 border-8 border-white" /> */}
        </div>
        <div className="lg:w-3/2 px-10">
          <h3 className="text-xl font-bold text-zinc-500">About Me</h3>
          <h1 className="text-5xl font-bold text-cyan-500">
            A Brief Introduction to Who I Am{" "}
          </h1>
          <p className="py-6">
            Welcome to my portfolio! I am a passionate front-end developer
            specializing in HTML, CSS, Bootstrap, React Bootstrap, Tailwind CSS,
            and basic JavaScript. My mission is to unleash creativity and
            transform ideas into captivating web experiences.
          </p>
          <p className="py-6">
            Driven by a relentless pursuit of excellence, I combine technical
            proficiency with a keen eye for aesthetics, crafting visually
            stunning and intuitive interfaces. Whether harnessing the power of
            React Bootstrap or leveraging the flexibility of Tailwind CSS, I
            create dynamic and responsive applications that leave a lasting
            impression.
          </p>
          <p className="py-6">
            Although my professional journey is just beginning, my dedication to
            continuous learning ensures that I stay ahead of the curve. I am
            excited to collaborate with like-minded professionals and contribute
            to innovative projects that push the boundaries of web development.
          </p>
          <p className="py-6">
            Thank you for visiting my portfolio. Let's create something
            extraordinary together!
          </p>
          <button className="btn rounded-none border-0 border-b-2 border-cyan-400 bg-[#1e1d1d9e]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
