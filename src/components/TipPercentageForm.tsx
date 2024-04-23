import type { Dispatch } from "react";
import { tipOptions } from "../data/db";
import { TipAction } from "../reducers/tip-reducer";

type TipPercentageFormProps = {
  readonly dispatch: Dispatch<TipAction>;
  readonly tip: number;
};

export default function TipPercentageForm({
  dispatch,
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
              onChange={(e) => dispatch({ type: "add-tip", payload: { value: +e.target.value } })}
              checked={tip === +option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
