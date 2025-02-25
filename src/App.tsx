// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SalesFeatures from "./components/SalesFeatures";
import ProgramTimeline from "./components/ProgramTimeline";
import Pricing from "./components/Pricing";
import Rewards from "./components/Rewards";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* <Navbar /> */}
      <Header />
      <Hero />
      <Features />
      <SalesFeatures />
      <ProgramTimeline />
      <Pricing />
      <Rewards />
      <Sales />
      <Footer />
    </div>
  );
}

export default App;