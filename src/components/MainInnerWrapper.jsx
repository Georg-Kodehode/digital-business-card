import LinkWrapper from "./LinkWrapper";
import About from "./About";
import Interests from "./Interests";

export default function MainInnerWrapper() {
  return (
    <div className="main-inner-wrapper">
      <LinkWrapper></LinkWrapper>
      <About></About>
      <Interests></Interests>
    </div>
  );
}
