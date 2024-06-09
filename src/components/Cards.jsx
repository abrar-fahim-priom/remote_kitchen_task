import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";

export default function Cards({
  handleDeleteFood,
  onEdit,
  setfoodToUpdate,
  foodToUpdate,
  setIsAdd,
  isAdd,
  setShowModal,
  foods,
}) {
  const placeholderImageUrl =
    "https://via.placeholder.com/160x110?text=Food+Image";

  return (
    <AnimatePresence>
      {foods.map((food) => (
        <motion.div
          key={food.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              boxShadow: 4,
              opacity: 4,
              borderRadius: 3,
              maxWidth: 345,
              marginBottom: 3,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 160, overflow: "hidden" }}
                width="110"
                image={food.image ? `/${food.image}` : placeholderImageUrl}
                alt="Food Image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ height: 30, overflow: "hidden" }}
                  variant="h5"
                  component="div"
                >
                  {food.name}
                </Typography>

                <Typography
                  sx={{ height: 80, overflow: "hidden" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {food.description}
                </Typography>

                <Typography variant="h6" color="text.primary">
                  {`$${food.price}`}
                </Typography>
                <hr />
              </CardContent>
            </CardActionArea>

            <div className="absolute bottom-0 right-0"></div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(food);
                setShowModal(true);
              }}
              className="m-3 transition-all hover:opacity-80 rounded-md bg-blue-500 px-3.5 py-2.5 text-white text-sm font-semibold"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                handleDeleteFood(food.id);
                e.stopPropagation();
              }}
              className="rounded-md transition-all hover:opacity-80 bg-red-500 px-3.5 py-2.5 text-sm text-white font-semibold"
            >
              Delete
            </button>
          </Card>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
