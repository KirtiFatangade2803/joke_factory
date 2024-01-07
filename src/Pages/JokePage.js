import Header from "../Component/Header";
import "./JokePage.css";
import JokeItems from "./JokeItems";
import Sidebar from "../Sidebar";

export default function JokePage() {


  return (
    <>
    <Header/>
      <div className="jokepage">
        <Sidebar />
       {/* grid jokeitems */}
        <JokeItems />
      </div>
    </>
  );
}
