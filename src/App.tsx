import "./App.css";
import background from "./assets/background-pattern-desktop.svg";
import iconstar from "./assets/icon-star.svg";
import iconminus from "./assets/icon-minus.svg";
import iconplus from "./assets/icon-plus.svg";

function App() {
  const proudOfThisFunc = () => {
    console.log("🎉");
  };

  return (
    /*✅ contenedor-principal */
    <div>
      {/*✅contenedor secundario*/}
      <div className="bg-Purple max-w-full h-screen">
        {/* IMAGEN-HEAD */}
        <img src={background} alt="imagen de la cabezera" />
        <div className="flex justify-center-safe">
          <div className="bg-White w-130 h-100 absolute top-35 rounded-md self-center-safe shadow-purple-300/50 shadow-2xl">
            <img
              src={iconstar}
              alt="imagen of the start"
              className="flex w-8 h-10 relative top-[50px] left-[1.6rem]"
            />
            {/*title*/}
            <h1 className="text-Purple-950 text-4xl flex absolute right-90 top-[50px]">
              FAQs
            </h1>
            {/*letter and questions */}
            <div className="flex justify-items-end justify-end m-0">
              <p className="text-black text-md flex m-auto ">
                what is Frontend Mentor, and how will it help me?
              </p>
              <p>
                {" "}
                frontend mentor offer realistic coding challenges to help
                devloper improve their fronted
              </p>
            </div>
            <div className="grid grid-flow-col  justify-items-end justify-end self-center">
              <img src={iconminus} alt="icono de menor -" />
              <p> Is Frontend Mentor Free?</p>
              <img src={iconplus} alt="icono de mas +" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
