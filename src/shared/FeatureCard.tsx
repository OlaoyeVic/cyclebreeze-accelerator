import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const FeatureCard = ({ title, description, image, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? "-50vw" : "50vw" }} // Slide from far edges
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex w-full ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      } ${index > 0 ? "mt-4 sm:mt-8" : ""} w-full`} // Overlapping effect
    >
      <div className={`flex items-center gap-3 sm:gap-6 ${index % 2 === 0 ? "bg-[#F0F9EC]" : "bg-[#000000]"} shadow-lg rounded-xl overflow-hidden max-w-lg`}>
        {/* Text Section */}
        <div className="p-6 w-1/2 sm:w-auto">
          <h3 className="text-[#6FC446] text-base font-semibold">WHY US</h3>
          <h2 className={`sm:text-3xl text-xl font-normal ${index % 2 === 0 ? "text-[#000000]" : "text-[#FFFFFF]"}`}>{title}</h2>
          <p className={`mt-3 font-normal text-xs sm:text-base ${index % 2 === 0 ? "text-[#676767]" : "text-[#FFFFFF]"}`}>{description}</p>
        </div>

        {/* Image Section */}
        <div className="h-full w-1/2">
          <img src={image} alt={title} className="sm:w-[147px] w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;