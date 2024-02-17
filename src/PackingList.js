import { useState } from "react";
import { PackingItem } from "./PackingItem";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleOnChange({ target }) {
    setSortBy(target.value);
  }

  function getSortedItems() {
    switch (sortBy) {
      case "description":
        return items
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));

      case "packed":
        return items
          .slice()
          .sort((a, b) => Number(a.packed) - Number(b.packed));

      case "input":
      default:
        return items;
    }
  }

  const sortedItems = getSortedItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            {...item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleOnChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
