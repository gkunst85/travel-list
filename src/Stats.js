export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((x) => x.packed).length;
  const percentage =
    numPacked === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everting! Ready to do ✈️</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed&nbsp;
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
