import Container from "@mui/material/Container";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Cards from "../../components//Cards.jsx";
import Modal from "../../components/Modal.jsx";

import { secondary } from "@material-tailwind/html/theme/base/colors.js";
import { Alert, Box, CircularProgress } from "@mui/material";
import {
  useAddFoodsMutation,
  useDeleteFoodsMutation,
  useGetfoodsQuery,
  useUpdateFoodsMutation,
} from "../api/apiSlice.js";

export default function FoodList() {
  const [showModal, setShowModal] = useState(false);

  const [foodToUpdate, setfoodToUpdate] = useState(null);

  const {
    data: foods,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetfoodsQuery();

  function handleEditFood(food) {
    //using state for the newly edited task to send into <AddTaskModal

    setfoodToUpdate(food);
    console.log(food);
    setShowModal(true);
  }

  const [addFoods] = useAddFoodsMutation();
  const [updateFoods] = useUpdateFoodsMutation();
  const [deleteFoods] = useDeleteFoodsMutation();

  function handleAddEditFood(newFood, isAdd) {
    if (isAdd) {
      addFoods(newFood);
    } else {
      updateFoods(newFood);
    }
    //bringing the old ones and adding new one
    setShowModal(false);
  }

  function handleDeleteFood(foodId) {
    console.log(foodId);
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this food item?"
    );
    if (isConfirmed) {
      deleteFoods({ id: foodId });
    }
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          color: secondary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={80} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ width: "100%" }}>
        <Alert severity="error">{`Error: ${JSON.stringify(error)}`}</Alert>
      </Box>
    );
  }

  return (
    <div className="">
      <Container className="mt-36">
        <AnimatePresence>
          {showModal && (
            <Modal
              setfoodToUpdate={setfoodToUpdate}
              foodToUpdate={foodToUpdate}
              setShowModal={setShowModal}
              handleAddEditFood={handleAddEditFood}
            />
          )}
        </AnimatePresence>
        <motion.div
          animate={{ y: -100 }}
          className="flex items-center flex-col "
        >
          <button
            className=" mb-7 rounded-md bg-blue-500 px-6 py-2.5 text-white text-md font-semibold"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Food
          </button>

          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4 mt-3">
            <Cards
              handleDeleteFood={handleDeleteFood}
              onEdit={handleEditFood}
              setfoodToUpdate={setfoodToUpdate}
              foodToUpdate={foodToUpdate}
              setShowModal={setShowModal}
              foods={foods}
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
