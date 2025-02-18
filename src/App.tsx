import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SalesFeatures from "./components/SalesFeatures";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SalesFeatures />
    </div>
  );
}

export default App;