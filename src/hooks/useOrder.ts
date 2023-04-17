import { useState } from "react";
import { serviceList } from "../components/utils/data";

export type Add = {
  name: string;
  price: number;
};

export type Order = {
  customerId: string;
  serviceId: string;
  qty: number;
  adds?: Add[];
  price: number;
};

const useOrder = () => {
  const [orders, setOrders] = useState([] as Order[]);

  const updateOrderPrice = (order: Order) => {
    const servicePrice =
      serviceList.find((service) => service.id === order.serviceId)?.price ?? 0;
    const addsTotal =
      order.adds?.reduce((accumulated, add) => {
        return (accumulated += add.price);
      }, 0) ?? 0;
    return { ...order, ...{ price: order.qty * servicePrice + addsTotal } };
  };

  const addOrder = (item: Order) => {
    const newOrder = updateOrderPrice(item);
    setOrders((items) => [...items, newOrder]);
  };

  const deleteOrder = (itemId: string, customerId: string) => {
    const filteredItems = orders.filter(
      (order) => order.serviceId !== itemId && order.customerId !== customerId
    );
    setOrders([...filteredItems]);
  };

  return { orders, addOrder, deleteOrder };
};

export { useOrder };
