import Header from "./Header";
import Emoji from "../assets/images/portfolioEmoji.png";
import "../assets/css/Home.css";

export default function Home() {
  return (
    <div className="home homeBackground">
      <div className="homeHeader">
        <Header />
      </div>
      <div className="homeIntro">
        <div className="homeIntroEmoji">
          {" "}
          <img src={Emoji} alt="Emoji" />
        </div>
        <div className="homeIntroText">
          <p>
            Hello, I'm Alex Hall, a graduate of the University of Washington's
            intensive full stack web development program. I'm passionate about
            technology and excited to kickstart my career in web development. I
            look forward to tackling creative challenges and problem-solving in
            this field. <br />
            Thanks for visiting my website!
          </p>
        </div>
      </div>
    </div>
  );
}
