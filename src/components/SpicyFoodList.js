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

  const [filterBy, setFilterBy] = useState("All");

  const filteredFoods = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  function handleFilter(e) {
    setFilterBy(e.target.value);
  }



  const foodList = filteredFoods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} <button onClick={() => handleUpdateHeat(food.id)}>Add Heat Level</button> | Cuisine: {food.cuisine} | <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
