import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemsList([...itemsList, newItem]);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }

    return (
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> 
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

