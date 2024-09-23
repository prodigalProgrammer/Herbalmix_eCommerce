const Card = ({ children, bg = `bg-sky-800` }) => {
  return (
    <div className={`w-64 text-center text-white/50 ${bg}`}>{children}</div>
  );
};

export default Card;
