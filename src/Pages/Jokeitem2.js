import "./Jokeitem1.css";
import jokeimg from "./Joke2.webp";

export default function Jokeitem2() {
  return (
    <>
      <div className="joke1">
        {/* <NavLink to='/single' className='link'> */}
        <img className="jokeimg" src={jokeimg} alt="JokeImage" />
        {/* </NavLink> */}
        <div className="jokeinfo">
          <h5 className="joketitle">Family Jokes </h5>
          <span className="jokecat">Why was six scared of seven? A: Because seven "ate" nine.</span>
          
    
        </div>
      </div>
    </>
  );
}