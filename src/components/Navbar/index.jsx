const Navbar = ({ title, subs = "I actually get it", cool }) => {
  const me = {
    myName: "Monrone",
    age: 35,
    children: 1,
    partner: "Danielle",
  };
  const tellStory = true;
  return (
    <>
      <h1 className="text-5xl">{title}</h1>
      {tellStory ? (
        <h2 className="text-4xl">
          My name is {me.myName} and I am {me["age"]}. I have {me.children}
          child with my partner named {me["partner"]} <strong>{cool}</strong>
        </h2>
      ) : (
        <h1 style={{ color: "red", backgroundColor: "#eee" }}>
          I ain't telling no stories!
        </h1>
      )}
      {subs}
    </>
  );
};

export default Navbar;
