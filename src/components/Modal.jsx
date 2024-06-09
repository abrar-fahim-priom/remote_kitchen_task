import { motion } from "framer-motion";
import { useState } from "react";

export default function Modal({
  setfoodToUpdate,
  foodToUpdate,
  setShowModal,
  handleAddEditFood,
  handleEditFood,
}) {
  const [food, setFood] = useState(
    foodToUpdate || {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      price: "",
      isFavourite: false,
    }
  );

  const [isAdd, setisAdd] = useState(Object.is(foodToUpdate, null));

  function checkAllFilled() {
    handleAddEditFood(food, isAdd);
  }

  function handleChange(evt) {
    const name = evt.target.name;
    let value = evt.target.value;
    setFood({
      ...food,
      [name]: value,
    });
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70"
        ></motion.div>
        <motion.form
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="
            mx-auto
            w-full
            max-w-[400px]
            sm:max-w-[500px]
            rounded-xl
            border
            border-[#FEFBFB]/[36%]
            bg-[#f3f4f5]
            p-6
            max-md:px-3
            md:p-8
            z-10
          "
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-black lg:mb-8 lg:text-[28px]">
            {isAdd ? "Add New Task" : "Edit"}
          </h2>
          {/* <!-- inputs --> */}
          <div className="space-y-6 text-black lg:space-y-7">
            {/* <!-- title --> */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="title">Name</label>
              <input
                className="block w-full rounded-md bg-[#c2c2c2] px-3 py-2.5"
                type="text"
                name="name"
                id="name"
                value={food.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* <!-- description --> */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[80px] w-full rounded-md bg-[#c2c2c2] px-3 py-2.5 lg:min-h-[90px]"
                type="text"
                name="description"
                id="description"
                value={food.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* <!-- price --> */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="description">Price</label>
              <textarea
                className="block w-full rounded-md bg-[#c2c2c2] px-3 py-2.5"
                type="number"
                name="price"
                id="price"
                value={food.price}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-12 flex justify-between lg:mt-14">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowModal(false);
                setfoodToUpdate(null);
              }}
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                checkAllFilled();
                setShowModal(false);
              }}
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Save
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
}
