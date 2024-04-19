import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  readonly order: OrderItem[];
  readonly subtotalAmount: OrderItem["quantity"];
  readonly tipAmount: OrderItem["quantity"];
  readonly totalAmount: OrderItem["quantity"];
  readonly saveOrder: () => void;
};

export default function OrderTotals({
  order,
  subtotalAmount,
  tipAmount,
  totalAmount,
  saveOrder
}: OrderTotalsProps) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a Pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10" onClick={() => saveOrder()}>
        Guardar Orden
      </button>
    </>
  );
}
