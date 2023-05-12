import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {orders.map((order) => (
              <OrdersTable key={order._id} orders={order}></OrdersTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
