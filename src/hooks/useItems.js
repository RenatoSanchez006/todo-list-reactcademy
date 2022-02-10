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
  const [newItemText, setNewItemTextState] = useState("");

  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      text: newItemText,
      done: false,
    };
    setItemListState([...itemList, newItem]);
    setNewItemTextState("");
  };

  const setTextHandler = (newText) => {
    setNewItemTextState(newText);
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
    newItemText,
    addItem,
    setTextHandler,
    checkItem,
    deleteItem,
  };
};
