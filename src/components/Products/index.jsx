import ItemMix from "../ItemMix";

const Product = ({ prod, price, desc }) => {
  return (
    <div className="text-sky-950">
      <h5 className="text-3xl">{prod}</h5>
      <p>{desc}</p>
      <h2 className="text-xl">${price}</h2>

      <ItemMix name={prod} desc={desc} cost={price} />
    </div>
  );
};

export default Product;
