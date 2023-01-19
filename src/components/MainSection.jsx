import MainInnerWrapper from "./MainInnerWrapper";

export default function MainSection() {
  return (
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
  );
}
