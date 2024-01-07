import "./Jokeitem1.css";
import jokeimg from "./Joke4.jpeg";

export default function Jokeitem2() {
  return (
    <>
      <div className="joke1">
        {/* <NavLink to='/single' className='link'> */}
        <img className="jokeimg" src={jokeimg} alt="JokeImage" />
        {/* </NavLink> */}
        <div className="jokeinfo">
          <h5 className="joketitle">Science Jokes </h5>
          <span className="jokecat">I just read a book about Helium. It was so good that I can't put it down.</span>
          
    
        </div>
      </div>
    </>
  );
}