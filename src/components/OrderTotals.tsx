import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { Dispatch, useCallback } from "react";
import { TipAction } from "../reducers/tip-reducer";

type OrderTotalsProps = {  
  readonly order: OrderItem[];
  readonly tip: number;
  readonly dispatch: Dispatch<TipAction>;
};

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {  
  const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
  const tipAmount = useCallback(()=> subtotalAmount() * tip , [tip, order] )
  const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [subtotalAmount, tipAmount])  
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a Pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10" onClick={() => dispatch({type: 'save-order'})}>
        Guardar Orden
      </button>
    </>
  );
}
