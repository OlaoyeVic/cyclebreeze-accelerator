import FeatureCard from "../shared/FeatureCard";
import rectangle1 from "../assets/rectangle1.svg";
import rectangle2 from "../assets/rectangle2.svg";
import rectangle3 from "../assets/rectangle3.svg";

const features = [
  {
    title: "Accelerate Your Sales",
    description:
      "Generate up to 500 quality leads daily and maximize conversions with up to 300+ outbound calls daily.",
    image: rectangle1,
  },
  {
    title: "Affordable & Seamless",
    description:
      "Say goodbye to expensive, hard-to-access tools. We’ve cracked the code for cost-effective sales tools tailored for businesses.",
    image: rectangle2,
  },
  {
    title: "Data-Driven Strategies",
    description:
      "We provide AI-powered insights and analytics that help businesses make smarter sales decisions.",
    image: rectangle3,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to ensure you get the best experience using our sales tools.",
    image: rectangle1,
  },
];

const Features = () => {
  return (
    <section className="p-40 relative flex flex-col items-center gap-16">
      <h2 className="text-[#000000] text-4xl font-semibold mb-16">Why Choose the 10X Sales Accelerator?</h2>
      {features.map((feature, index) => (
        <FeatureCard key={index} index={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;
