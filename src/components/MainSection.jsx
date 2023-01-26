import MainInnerWrapper from "./MainInnerWrapper";
import image from "../images/self_portrait.png";

export default function MainSection() {
  return (
    <>
      <img
        src={image}
        alt="business card image"
        className="business-card-image"
      />
      <div className="main">
        <h3 className="my-name">Georg Stava</h3>
        <h5 className="my-title">Full stack developer</h5>
        <h6 className="my-portfolio">
          <a
            href="https://georg-kodehode.github.io/my-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="portfolio-link"
          >
            My portfolio
          </a>
        </h6>
        <MainInnerWrapper></MainInnerWrapper>
      </div>
    </>
  );
}
