import type { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/db";

type TipPercentageFormProps = {
  readonly setTip: Dispatch<SetStateAction<number>>;
  readonly tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex items-center mt-1 space-x-3">
            <input
              type="radio"
              id={option.id}
              name="tip"
              value={option.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tip === +option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
