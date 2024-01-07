import "./Jokeitem1.css";
import jokeimg from "./Joke6.jpg";

export default function Jokeitem2() {
  return (
    <>
      <div className="joke1">
        {/* <NavLink to='/single' className='link'> */}
        <img className="jokeimg" src={jokeimg} alt="JokeImage" />
        {/* </NavLink> */}
        <div className="jokeinfo">
          <h5 className="joketitle">Office Jokes </h5>
          <span className="jokecat">Why won't sharks attack lawyers? Professional courtesy.</span>
          
    
        </div>
      </div>
    </>
  );
}