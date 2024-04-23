import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { TipAction } from "../reducers/tip-reducer";

type MenuItemsProps = {
  readonly item: MenuItem;
  readonly dispatch: Dispatch<TipAction>;
};

export default function MenuItems({ item, dispatch }: MenuItemsProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" onClick={() => dispatch({type: "add-item", payload: {item}})}>
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
}
