const fetchMyOrder = async () => {
  return fetch(`/api/order/my`).then((res) => res.json());
};

const createOrder = async (order) => {
  return fetch("/api/order", {
    method: "POST",
    body: JSON.stringify(order),
  }).then((res) => res.json());
};

const OrderApi = {
  fetchMyOrder,
  createOrder,
};

export default OrderApi;
