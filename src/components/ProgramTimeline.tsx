import { motion } from "framer-motion";
import applicationPeriod from "../assets/applicationPeriod.svg";
import programKickoff from "../assets/programKickoff.svg";
import selectionPhase from "../assets/selectionPhase.svg";
import support from "../assets/support.svg";
import vector1 from "../assets/vector1.svg";

const timelineData = [
  { id: 1, title: "Application Period", desc: "Submit your form within the next 40 days", icon: applicationPeriod, direction: "-100%" },
  { id: 2, title: "Selection Phase", desc: "Applications will be reviewed, and winners notified within 7 days of application closing.", icon: programKickoff, direction: "100%" },
  { id: 3, title: "Program Kickoff", desc: "Selected businesses will begin the 2-week Accelerator Program, including setup and training.", icon: selectionPhase, direction: "-100%" },
  { id: 4, title: "Post-Program Support", desc: "Ongoing check-ins and support to ensure continued success.", icon: support, direction: "100%" },
];

const ProgramTimeline = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Program Timeline</h2>
      <img src={vector1} alt="Vector 1" className="w-[90px] mx-auto my-4" />
      <div className="flex flex-wrap justify-center gap-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: item.direction }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 text-center w-64"
          >
            <div className="flex justify-center">
              <motion.img src={item.icon} alt={item.title} className="w-[90px]" />
              {/* <item.icon className="text-blue-500 text-5xl" /> */}
            </div>
            <h3 className="font-normal text-lg font-normal leadinf-[32px] text-black">{item.title}</h3>
            <p className="font-normal text-sm text-[#333333]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgramTimeline;