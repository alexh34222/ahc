import Header from "./Header";
import "../assets/css/About.css";

export default function About() {
  return (
    <div className="about aboutBackground">
      <div className="aboutHeader">
        <Header />
      </div>
      <div className="aboutContent">
        <div className="aboutTitle">
          {" "}
          <h1>ABOUT</h1>
        </div>
        <div className="aboutText">
          <p>
            I'm a native of Seattle, Washington, where my journey into the world
            of technology began. From a young age, I've been captivated by the
            possibilities technology offers, and I've always had a knack for
            problem-solving and creativity. <br /> <br />
            My primary goal is to create websites that are not only
            aesthetically pleasing but also highly functional, providing users
            with an exceptional experience. I'm driven by the idea that a
            well-designed website can leave a lasting impression on its
            visitors. <br /> <br />
            My educational background has equipped me with skills in both
            front-end and back-end technologies. However, I've found my passion
            lies in front-end development, and I've been using tools like Vite
            and React to craft websites that not only look great but also work
            seamlessly. <br /> <br />
            One of the aspects I love most about my career is that it's a
            continuous journey of learning. Technology is ever-evolving, and
            there are always new challenges to tackle and skills to acquire.
            This perpetual cycle of growth and discovery keeps me excited and
            motivated. <br /> <br /> Outside of the digital world, you'll often
            find me on a soccer field, whether I'm playing or watching a match.
            I'm also a fitness enthusiast, and staying active is an integral
            part of my life. Additionally, I have a creative side and enjoy
            making music in my free time. <br /> <br /> I'm thrilled to be on
            this tech adventure, and I'm looking forward to all the future
            challenges and opportunities it will bring.
          </p>
        </div>
      </div>
    </div>
  );
}
