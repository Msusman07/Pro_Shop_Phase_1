import { Button, Table } from "react-bootstrap";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import { useGetOrdersQuery } from "../../slices/OrdersApiSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  console.log(orders);
  return (
    <>
      <h1> Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.user && item.user.name}</td>
                <td>{item.createdAt.substring(0, 10)}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {item.isPaid ? (
                    item.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }}></FaTimes>
                  )}
                </td>
                <td>
                  {item.isDelivered ? (
                    item.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }}></FaTimes>
                  )}
                </td>
                <td>
                  <Link to={`/order/${item._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
