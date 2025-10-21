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
    <main>
      {/*✅contenedor secundario*/}
      <div className="bg-Purple max-w-full h-screen">
        {/* IMAGEN-HEAD */}
        <img src={background} alt="imagen de la cabezera"
          width={1600} />

        <div className="flex justify-center-safe relative items-center top-[-120px]  ">

          <div className="bg-White w-140 h-110 flex rounded-md self-center-safe shadow-purple-300/50 shadow-2xl   ">
            <div className=" flex relative text-Purple-950 text-5xl ">
              <img
                src={iconstar}
                alt="imagen of the start"
                width={40}
                className="flex relative -top-[150px]  
                "
              />
              {/*title*/}
              <h1 className="relative ">
                FAQs
              </h1>
            </div>

          </div>
          {/*letter and questions*/}
          <button className="justify-center justify-items-center  absolute text-Purple-950 ">
            <p className="flex gap-10 items-center p-2">
              What is Frontend Mentor, and how will it help me?
              <img src={iconplus} alt="icono de mas +" />
            </p>
            {/*fag-answer*/}
            <div className="text-justify  text-Purple-600 font-medium " >
              Frontend Mentor offers realistic coding challenges to help <br /> developers improve their
              frontend coding skills with projects in <br /> HTML, CSS, and JavaScript. It's suitable for
              all levels and ideal <br />  for portfolio building.
            </div>
          </button>
 <br />
          <button className="justify-center justify-items-center absolute text-Purple-950 top-[190px]">
            <p className="flex gap-18 self-center items-center "> Is Frontend Mentor Free?
              <img src={iconplus} alt="icono de mas +" />
            </p>
            </button>
            {/*fag-answer
            <div  className="text-justify  text-Purple-600 font-medium" >
              Yes, Frontend Mentor offers both free and premium coding
              challenges,  <br /> with the free option providing access to a range of projects<br/>suitable for all skill levels.
            </div>
          
          {/* 
          <button className="justify-center justify-items-center  absolute text-Purple-950 ">
            <p> Can I use Frontend Mentor projects in my portfolio?
              <img src={iconplus} alt="icono de mas +" />
            </p>
            {/*fag-answer
            <div>
              Yes, Frontend Mentor offers both free and premium coding challenges, with the free
              option providing access to a range of projects suitable for all skill levels.
            </div>
          </button>
                 */}
        </div>
      </div>
    </main>
  );
}

export default App;
