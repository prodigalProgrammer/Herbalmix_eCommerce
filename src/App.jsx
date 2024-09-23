import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <div>
      <Navbar title="My Title" cool={`Daddy Cool!`} />
      <HomeCards />
    </div>
  );
};

export default App;
