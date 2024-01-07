import "./Jokeitem1.css";
import jokeimg from "./Joke3.jpg";

export default function Jokeitem2() {
  return (
    <>
      <div className="joke1">
        {/* <NavLink to='/single' className='link'> */}
        <img className="jokeimg" src={jokeimg} alt="JokeImage" />
        {/* </NavLink> */}
        <div className="jokeinfo">
          <h5 className="joketitle">Food Jokes </h5>
          <span className="jokecat"> What do you call a sad coffee? A: Depresso.</span>
          
    
        </div>
      </div>
    </>
  );
}