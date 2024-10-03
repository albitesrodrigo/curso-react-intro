import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={(event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
