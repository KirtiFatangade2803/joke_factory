import "./Jokeitem1.css";
import jokeimg from "./Joke5.jpg";

export default function Jokeitem2() {
  return (
    <>
      <div className="joke1">
        {/* <NavLink to='/single' className='link'> */}
        <img className="jokeimg" src={jokeimg} alt="JokeImage" />
        {/* </NavLink> */}
        <div className="jokeinfo">
          <h5 className="joketitle">School Jokes </h5>
          <span className="jokecat">Teacher: "Name a bird with wings but can't fly." Student: "A dead bird, sir."</span>
          
    
        </div>
      </div>
    </>
  );
}