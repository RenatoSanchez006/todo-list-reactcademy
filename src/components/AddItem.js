import { useContext } from "react";
import { itemsContext } from "../context/items-context";

export default function AddItem() {
  const { newItemText, addItem, setTextHandler } = useContext(itemsContext);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addItem();
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={newItemText}
          onChange={(e) => setTextHandler(e.target.value)}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
