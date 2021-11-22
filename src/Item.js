const Item = ({ height, no }) => {
  return (
    <div
      className="flex-item"
      style={{ height: height, border: "1px solid black" }}
    >
      {no}
    </div>
  );
};

export default Item;
