import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="serviceImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-orange-500 text-xl font-semibold'>Price : ${price}</p>
          <div className="card-actions justify-end">
            <button className=""><AiOutlineArrowRight className='text-orange-500 text-2xl'></AiOutlineArrowRight></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
