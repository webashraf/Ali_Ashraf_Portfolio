import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
    return <div>
        {service.title}
    </div>;
};

export default CheckOut;
