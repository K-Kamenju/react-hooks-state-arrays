import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods([...foods, newFood]);
  }

  function handleDeleteFood(id) {
    setFoods(foods.filter((food) => food.id !== id));
  }
  
  function handleUpdateHeat(id) {
    setFoods(foods.map((food) => {
      if(food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 };
      } else {
        return food;
      }
    }))
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} <button onClick={() => handleUpdateHeat(food.id)}>Add Heat Level</button> | Cuisine: {food.cuisine} | <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
