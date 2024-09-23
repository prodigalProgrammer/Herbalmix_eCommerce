const ItemMix = ({ name, desc, cost }) => {
  return (
    <div>
      <h1 className="text-8xl text-sky-500 bg-red-600/80">{`${name}, ${desc} at only $${cost}`}</h1>
    </div>
  );
};

export default ItemMix;
