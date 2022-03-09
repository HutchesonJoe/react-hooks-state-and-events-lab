import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [foodType, setFoodType] = useState(items)

  function handleChange(e){
    if (e.target.value === "All"){
     const foodType = items
     setFoodType(foodType)
    } else {
    const foodType = items.filter((item) => e.target.value === item.category)
    setFoodType(foodType)
    console.log(foodType)
    }
    
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodType.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
