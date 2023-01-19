import LinkWrapper from "./LinkWrapper";

export default function MainInnerWrapper() {
  return (
    <div className="main-inner-wrapper">
      <LinkWrapper></LinkWrapper>
      <h4 className="main-section-titles">About</h4>
      <p className="main-section-paragraphs">
        I am a full stack developer who likes to learn how to use new
        technologies. When I work, I like to do tasks properly, and reach set
        goals.
      </p>
      <h4 className="main-section-titles">Interests</h4>
      <p className="main-section-paragraphs">
        Programming. Technology. Movies and TV. Board games. Video games. Books.
        Football. Travel.
      </p>
    </div>
  );
}
