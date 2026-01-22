import { useState } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
function App() {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  let submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ heading, details });
    setTask(copyTask);

    setDetails("");
    setHeading("");
  };
  let done = (idx) => {
    let copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <>
      <div className="realmain h-screen flex flex-col md:flex-row bg-gray-950">
        <div className="main  md:w-1/2 w-full text-white">
          <form
            onSubmit={(e) => {
              submitHandler(e);
              console.log(mail);
            }}
            className="flex  flex-col mx-5 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter Heading"
              value={heading}
              onChange={(e) => {
                setHeading(e.target.value);
              }}
              name=""
              id=""
              className="input border-2 border-gray-600 mx-2 my-4 p-4  w-full rounded-xl text-center text-2xl md:text-4xl "
            />
            <textarea
              placeholder="Enter Details"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              name=""
              id=""
              className="input border-2 border-gray-600 mx-2 my-4 p-4 w-full rounded-xl text-xl min-h-40 items-start md:text-3xl"
            ></textarea>
            <input
              type="submit"
              value="Add Note"
              className="text-center bg-gray-600 text-xl text-white mx-2 my-4 p-2 w-40 border-2 border-gray-600 rounded-xl hover:bg-gray-700 md:text-3xl"
            />
          </form>
        </div>
        <div className="flex text-white justify-start  h-full md:w-1/2 w-full flex-wrap overflow-auto ">
          {task.map(function (e, idx) {
            return (
              <div className=" flex flex-col justify-between  border-2 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFb8iEm6rbk63tEbrfwilQQxQhsohVq63vw&s')] overflow-hidden bg-center  border-gray-600 md:mx-5 md:my-4 md:p-1  mx-2 rounded-xl  h-30 w-20  md:h-55 md:w-38">
                <div className="content">
                  <h3 className="  text-center font-bold md:pb-2 ">
                    {e.heading}
                  </h3>
                  <p className=" font-thin tracking-tighter font-serif text-[10px] md:text-xs ">
                    {e.details}
                  </p>
                </div>
                <div className="btn flex justify-center">
                  <button
                    onClick={() => {
                      done(idx);
                    }}
                    className="md:mb-2  bg-[#413939] rounded-sm w-10 h-5text-sm md:w-20 p-1 text-[10px] md:text-xl font-thin md:font-bold flex justify-center items-center gap-1 cursor-e-resize++++++"
                  >
                    DONE <MdOutlineDoneOutline className="text-3xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
