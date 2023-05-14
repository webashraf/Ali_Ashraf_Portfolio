import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services",)
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
      });
  }, []);
  // console.log(services);
  return (
    <div className="py-36">
      <div className="text-center w-1/2 mx-auto pb-24">
        <h3 className="text-xl font-bold text-orange-400">Services</h3>
        <h1 className="text-5xl font-bold">Our Service Area </h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
