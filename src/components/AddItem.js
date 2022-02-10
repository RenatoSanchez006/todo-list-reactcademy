import { useContext } from "react";
import { itemsContext } from "../context/items-context";
import { useForm } from "react-hook-form";

export default function AddItem() {
  const { addItem } = useContext(itemsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm
  } = useForm();

  const onSubmitHandler = (data) => {
    addItem(data.text);
    resetForm()
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input {...register("text", { required: true })} placeholder="Enter your task"/>
          <button type="submit">Add</button>
        </div>
        {errors.text?.type === "required" && <label>*Text is required</label>}
      </form>
    </div>
  );
}
