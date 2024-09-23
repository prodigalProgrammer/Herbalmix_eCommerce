import Card from "../Card";
import Product from "../Products";

const HomeCards = () => {
  return (
    <>
      <Card bg="bg-indigo-800">Hey People</Card>
      <Card bg="bg-gray-500">Nononono</Card>
      <Card>Try Again!</Card>
      <Product prod="iPhone X" price={999} desc="The new revolution" />
      <Product
        prod="GameBoy Colour"
        price={49.99}
        desc="Nintendo's pocket rocket"
      />
      <Product prod="Tesla X" price="150,000" desc="A game changer" />
    </>
  );
};

export default HomeCards;
