import { MenuItem, OrderItem } from "../types";

// Define las acciones
export type TipAction =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: 'add-tip', payload: { value: number }}
  | { type: "save-order" };

// Define el estado
export type TipState = {
  order: OrderItem[];
  tip: number;
};

// Define el estado inicial
export const initialState: TipState = {
  order: [],
  tip: 0,
};

// Define el reducer
export const tipReducer = (
  state: TipState = initialState,
  action: TipAction
) => {
  switch (action.type) {
    case "add-item":
      const itemExist = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
        let order : OrderItem[] = [];
      if (itemExist) {
        order = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );        
      } else {
        const newItem = { ...action.payload.item, quantity: 1 };
        order = [...state.order, newItem];
      }
      return { ...state, order };

    case "remove-item":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
      };
    case "add-tip":
        return { ...state, tip: action.payload.value };

    case "save-order":
      return { ...state, order: [], tip: 0 };
    default:
      return state;
  }
};
