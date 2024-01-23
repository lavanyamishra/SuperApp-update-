const Chips = ({ name, setSelect, select }) => {
  const handleClick = () => {
    const index = select.indexOf(name);
    select.splice(index, 1);
    setSelect([...select]);
  };
  return (
    <div style={{ width: "58vw" }}>
      {select?.map((category) => (
        <button className="chips" onClick={handleClick}>
          {category}
          <span>X</span>
        </button>
      ))}
    </div>
  );
};

export default Chips;
