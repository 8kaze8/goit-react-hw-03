function SearchBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <br />
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        style={{
          width: "250px",
          padding: "5px",
          border: "1px solid black",
        }}
      />
    </div>
  );
}

export default SearchBox;
