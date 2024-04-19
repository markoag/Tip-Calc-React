import { useState, useMemo } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  // Quitar orden del Hook order
  const removeItem = (id: MenuItem['id']) => {
    setOrder(prevItem => prevItem.filter(item => item.id !== id))
  };

  // Sumar Subtotal de la orden
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

  // Calcular la propina
  const tipAmount = useMemo(()=> subtotalAmount * tip , [tip, order] )

  // Calcular el total a pagar
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  // Guardar la orden
  const saveOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,    
    setTip,
    addItem,
    removeItem,
    subtotalAmount,
    tipAmount,
    totalAmount,
    saveOrder
  };
}
