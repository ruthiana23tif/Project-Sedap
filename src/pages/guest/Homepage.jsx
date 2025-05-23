import AboutUs from "../../components/guest/AboutUs";
import MostPopularDestination from "../../components/guest/FavFood";
import Navbar from "../../components/guest/Navbar";
import NewsCardSection from "../../components/guest/NewsCardSection";
import RoomGallery from "../../components/guest/DishGallery";
import StatsSection from "../../components/guest/StatsSection";
import SubscribeSection from "../../components/guest/SubscribeSection";
import TestimonialSlider from "../../components/guest/TestimonialSlider";
import FeatureInfo from "../../layouts/guest/FeatureInfo";
import Footer from "../../components/guest/Footer";
import HeroSection from "../../components/guest/HeroSection";
import BestSeller from "../../pages/guest/BestSeller";
import FacilitiesSection from "../../components/guest/FacilitiesSection";


export default function Homepage() {
  return (
    <div id="dashboard-container">
      <Navbar />
      <HeroSection/>
      {/* <FeatureInfo/> */}
      <BestSeller/>
      <AboutUs/>
      <StatsSection/>
      <FacilitiesSection/>
      <MostPopularDestination/>
      <RoomGallery/>
      <TestimonialSlider/>
      {/* <NewsCardSection/> */}
      <SubscribeSection/>
      <Footer/>
    </div>
  );
}
