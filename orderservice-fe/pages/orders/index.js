import styles from "../../styles/orders.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.orders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <div className={styles.container}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Total</th>
                    <th>Shipping Address</th>
                    <th>Items</th>
                    <th>Payment</th>
                    <th>Billing Address</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr key={i}>
                      <td data-label="Total">${o.total}</td>
                      <td data-label="Shipping Address">
                        {o.shippingAddress.city}, {o.shippingAddress.state} {o.shippingAddress.postalCode}
                      </td>
                      <td data-label="Item">
                        {o.items[0].quantity} {o.items[0].name} at ${o.items[0].price} each
                      </td>
                      <td data-label="Payment">
                        {o.payment.method}: {o.payment.number}
                      </td>
                      <td data-label="Shipping Address">
                        {o.payment.billingAddress.city}, {o.payment.billingAddress.state} {o.payment.billingAddress.postalCode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </>
    );
};

export default Orders;
