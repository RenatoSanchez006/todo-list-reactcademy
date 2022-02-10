import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useItems = () => {
  const todoList = [
    {
      id: uuidv4(),
      text: "Buy Stuff",
      done: false,
    },
    {
      id: uuidv4(),
      text: "Dinner",
      done: true,
    },
  ];

  const [itemList, setItemListState] = useState(todoList);

  const addItem = (newText) => {
    const newItem = {
      id: uuidv4(),
      text: newText,
      done: false,
    };
    setItemListState([...itemList, newItem]);
  };

  const checkItem = ({ id, done }) => {
    const itemListCopy = [...itemList];
    itemListCopy.find((item) => item.id === id).done = !done;
    setItemListState(itemListCopy);
  };

  const deleteItem = (id) => {
    const itemsCopy = itemList.filter((item) => item.id !== id);
    setItemListState(itemsCopy);
  };

  return {
    itemList,
    addItem,
    checkItem,
    deleteItem,
  };
};
