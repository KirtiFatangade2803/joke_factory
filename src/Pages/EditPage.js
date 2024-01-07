import { useEffect, useState } from "react";
import "./EditPage.css";
import Writeimg from "./create.jpg";
import { Jokes } from "../Jokes";

export default function EditPage() {
  //creating a state to bind the data
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [lines, setLines] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(Jokes);
  }, []);

  const handleSave = (e) => {
    let error = "";

    if (title === "") error += "Title is required ";

    if (lines === "") error += "Joke Lines are required";

    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: Jokes.length + 1,
        title: title,
        lines: lines,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  };
  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].title = title;
    dt[index].lines = lines;

    setData(dt);
  };

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id !== id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setTitle(dt[0].title);
      setLines(dt[0].lines);
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  return (
    <div className="write">
      <img className="writeimg" src={Writeimg} alt="write" />

      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className=" writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileinput" />
          <input
            type="text"
            placeholder="title"
            className="writeinput"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="writeformgroup">
          <textarea
            placeholder="Tel Your story"
            type="text"
            className="writetext"
            onChange={(e) => setLines(e.target.value)}
            value={lines}
          ></textarea>
        </div>
        {!isUpdate ? (
          <button
            className="writesubmit"
            id="addBtn"
            onClick={(e) => handleSave(e)}
          >
            <i className="fa-solid fa-plus"></i>Add
          </button>
        ) : (
          <button
            className="writesubmit"
            id="updateBtn"
            onClick={() => handleUpdate()}
          >
            <i className="fa-solid fa-plus"></i>Update
          </button>
        )}
      </form>
      <table className="table table-hover">
        <tr>
          <th>Sr.No</th>
          <th>Id</th>
          <th>Title</th>
          <th>Jokelines</th>
          <th>Funtions</th>
        </tr>

        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.lines}</td>
              <td>
                <button
                  className="writesubmit"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
                <button
                  className="writesubmit"
                  onClick={() => handleEdit(item.id)}
                >
                  <i className="fa-solid fa-pen"></i>Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
