import "./Jokeitem1.css";
import jokeimg from "./Joke1.jpg";

export default function Jokeitem1() {
  return (
    <>
      <div className="joke1">
        <img className="jokeimg" src={jokeimg} alt="postImage" />

        <div className="jokeinfo">
          <span className="joketitle">Animal Joke</span>

          <span className="jokecat">
            What do fish say when they hit a concrete wall? Dam!
          </span>
        </div>
      </div>
    </>
  );
}
