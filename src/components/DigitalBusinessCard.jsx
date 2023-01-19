import image from "../images/self_portrait.png";
import MainSection from "./MainSection";
import Footer from "./Footer";

export default function DigitalBusinessCard() {
  return (
    <div className="business-card">
      <img
        src={image}
        alt="business card image"
        className="business-card-image"
      />
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}
