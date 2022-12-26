import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [word, setWork] = useState("");

  // contain an value word
  const [jobs, setJobs] = useState([]);
  function handleChangeInput(event) {
    setWork(event.target.value);
  }
  function handleRenderWord() {
    if (jobs?.some((item) => item.id === word?.replace(/\s/g, ""))) {
      toast.warn("Công việc này đã có rồi");
    } else {
      setJobs((prev) => [...prev, { id: word?.replace(/\s/g, ""), job: word }]);
      setWork("");
      toast.success("Thêm thành công ");
    }
  }

  function handleDelete(id) {
    setJobs((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <>
      <div
        className="h-screen flex justify-center items-center flex-col
      ">
        <div>
          <input
            type="text"
            className="outline-none border border-blue-300 px-4 py-2 w-[400px] "
            value={word}
            onChange={handleChangeInput}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-400 rounded-md text-white ml-3"
            onClick={() => handleRenderWord()}>
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-center">Content : </h3>
          <ul>
            {jobs.map((job, index) => (
              <li key={job.id} className="flex items-center mb-2">
                {job.job}{" "}
                <span
                  className="ml-[12px] p-1 bg-violet-300 cursor-pointer"
                  onClick={() => handleDelete(job.id)}>
                  X
                </span>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
