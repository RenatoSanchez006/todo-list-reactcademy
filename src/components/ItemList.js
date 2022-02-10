import { useContext } from "react";
import { itemsContext } from "../context/items-context";
import Item from "./Item";

export default function ItemList() {
  const { itemList } = useContext(itemsContext);

  return (
    <div>
      {itemList.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
