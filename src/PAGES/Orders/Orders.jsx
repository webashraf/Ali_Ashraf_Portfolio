import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [deleteLodaer, setDeleteLoader] = useState(false);

  useEffect(() => {
    fetch(`https://car-doctor-server-pink.vercel.app/order?email=${user?.email}`, {
      method:  "GET",
      headers: {
        authorization : `Bearer ${localStorage.getItem("car-access-token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deleteLodaer]);

  const handelBooking = (id) =>{
        fetch(`https://car-doctor-server-pink.vercel.app/order/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
        const remaining = orders.filter(order=> order._id !== id);
        const updated = orders.find(order => order._id === id);
        updated.status = "confirm"
        setOrders([updated, ...remaining]);
  }

console.log(orders);

  return (
    <>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {orders.map((order) => (
              <OrdersTable key={order._id} orders={order} setDeleteLoader={setDeleteLoader} deleteLodaer={deleteLodaer} handelBooking={handelBooking}></OrdersTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
