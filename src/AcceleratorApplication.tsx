import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import GallerySlider from "./components/GallerySlider";
import Navbar from "./components/Navbar";

const AcceleratorApplication = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white sm:px-20 px-6 overflow-x-hidden">
        <GallerySlider />
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  )
}
export default AcceleratorApplication;