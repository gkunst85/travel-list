import { useState } from "react";

export function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const item = { description, quantity, packed: false, id: Date.now() };

    onAddItem(item);

    resetForm();
  }

  function resetForm() {
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={({ target }) => setQuantity(target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} label={number} key={number} />
        ))}
      </select>
      <input
        type="tezt"
        placeholder="item..."
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <button>add</button>
    </form>
  );
}
