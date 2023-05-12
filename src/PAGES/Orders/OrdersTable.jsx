import { RiChatDeleteFill } from "react-icons/ri";
import Swal from "sweetalert2";

const OrdersTable = ({ orders, setDeleteLoader, deleteLodaer }) => {
  const {_id, img, title, email, price, date } = orders;
  console.log(orders);

  const handleDelete = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your order has been deleted.',
            'success'
          )

        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => setDeleteLoader(!deleteLodaer))

        // console.log(id);
        }
      })
      

  }





  return (
    <>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)}>
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
