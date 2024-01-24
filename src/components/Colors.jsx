const Colors = ({ color, setColor }) => {
  return (
    <div style={{ color }}>
      <button onClick={() => setColor("purple")}>Change color</button>
    </div>
  );
};

export default Colors;
