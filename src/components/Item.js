import { useContext } from "react";
import { itemsContext } from "../context/items-context";

export default function Item({ item }) {
  const { checkItem, deleteItem } = useContext(itemsContext);
  return (
    <div>
      <p> {item.text} </p>
      <div>
        <button onClick={() => checkItem(item)}>
          {!item.done ? "Done" : "UnDone"}{" "}
        </button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
  );
}
