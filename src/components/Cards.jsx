
import CodeArc from "../assets/codearc.png"
function Cards() {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row items-center px-5 sm:px-14 gap-5 bg-zinc-900">
      {/* Card 1 */}
      <div className="cardcontainer w-full sm:w-1/2 h-[30vh] sm:h-[45vh]  ">
        <div className="card relative w-full sm:h-[50vh] h-[30vh] rounded-xl flex items-center justify-center bg-[#004D43]  transition-transform duration-400 transform hover:scale-95">
          <img
            className="w-28 md:w-60 rounded border-zinc-100" 
            src={CodeArc}
            alt="Logo 1"
          />
          <button className="absolute px-2 text-[3vw] sm:text-xs md:text-xs bottom-5 tracking-tight  rounded-full border-2   ">
            &copy;2019-22
          </button>
        </div>
      </div>

      {/* Card 2 - Split into two sub-cards */}
      <div className="cardcontainer flex flex-col md:flex-row w-full sm:w-1/2 h-screen sm:h-[45vh] gap-5">
      {/* Sub-Card 1 */}
      <div className="card relative w-full sm:h-[50vh] h-[30vh] transition-transform duration-400 transform hover:scale-95 rounded-xl flex items-center justify-center bg-emerald-700 gap-5">
          <img
            className="w-20 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 2"
          />
          <button className="absolute px-2 text-[3vw] sm:text-xs md:text-xs bottom-5 tracking-tight  rounded-full border-2    ">
          Rating 5.00 on clutch
          </button>
        </div>

        {/* Sub-Card 2 */}
        <div className="card relative w-full  sm:h-[50vh] h-[30vh] transition-transform duration-400 transform hover:scale-95 rounded-xl flex items-center justify-center bg-emerald-700 gap-5">
          <img
            className="w-20 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 2"
          />
          <button className="absolute px-2 text-[3vw] sm:text-xs  flex justify-start md:text-xs bottom-5 tracking-tight  rounded-full border-2    ">
        BOOTCAMP BLEND
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cards;
