import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import GallerySlider from "./components/GallerySlider";
import Header from "./components/Header";

const AcceleratorApplication = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="bg-white mt-[100px] sm:px-20 px-6 overflow-x-hidden">
        <GallerySlider />
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  );
};
export default AcceleratorApplication;
