import { RiChatDeleteFill } from "react-icons/ri";

const OrdersTable = ({ orders }) => {
  const { img, title, email, price, date } = orders;
  console.log(orders);
  return (
    <>
      <tr>
        <th>
          <button>
            <RiChatDeleteFill className="text-4xl"></RiChatDeleteFill>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>

        <td> ${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs bg-orange-600 text-white">
            details
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrdersTable;
