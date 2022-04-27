import "./App.css";
import CopyText from "./components/CopyText";
import { RANDOM_BULLSHIT } from "./constant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="container">
        <div className="mb-[20px] flex items-center justify-end">
          <div className="pointer-events-none">
            <img
              className="w-[180px] h-[180px] object-cover pointer-events-none"
              src="/images/cheems-dance.gif"
              alt="cheems-dance"
            />
            <h1 className="text-black dark:text-white font-extrabold text-[20px]">
              Click vào text để copy!
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-y-[35px]">
          {RANDOM_BULLSHIT?.map((item, index) => (
            <CopyText key={index} text={item.text} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
