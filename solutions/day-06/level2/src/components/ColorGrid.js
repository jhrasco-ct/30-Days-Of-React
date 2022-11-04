import ColorCell from "./ColorCell";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const ColorGrid = () => {
  return (
    <div className="grid">
      {[...Array(32).keys()].map((number) => (
        <ColorCell key={number} hexColor={hexaColor()} />
      ))}
    </div>
  );
};

export default ColorGrid;
