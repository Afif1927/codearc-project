import { motion, useAnimation } from 'framer-motion';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full  py-20 bg-zinc-800">

      <div className="w-full px-5 md:px-20 border-b-[1px] pb-10 md:pb-20 border-zinc-700">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-mono tracking-tighter text-center md:text-left">
          Featured projects
        </h1>
      </div>


      <div className="px-5 md:px-20">
{/* part-1 */}
        <div className="cards w-full flex flex-col md:flex-row gap-5 md:gap-10 mt-10">  
          <motion.div
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
          >
            <h1 className="absolute overflow-hidden flex md:right-0 
            top-2/3  md:top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-5xl md:text-6xl lg:text-7xl font-semibold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Project FYDE"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1 className="absolute overflow-hidden flex  md:right-full top-2/3  md:top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter font-semibold z-[9] text-5xl md:text-6xl lg:text-7xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Project VISE"
              />
            </div>
          </motion.div>
  </div>

{/* //part-2 */}
        <div className="cards w-full flex flex-col md:flex-row gap-5 md:gap-10 mt-10">
          
          <motion.div
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
          >
            <h1 className="absolute overflow-hidden flex left-full sm:right-0 
            top-1/2  sm:top-1/2 -translate-x-2/3 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-5xl sm:text-6xl font-semibold">
              {"ABOARDED SPACES".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Project FYDE"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1 className="absolute overflow-hidden flex  md:right-full top-2/3  md:top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter font-semibold z-[9] text-5xl md:text-6xl lg:text-7xl">
              {"H2 & MATTHORR".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="Project VISE"
              />
            </div>
          </motion.div> 
           </div>

{/* part-3 */}
        <div className="cards w-full flex flex-col md:flex-row gap-5 md:gap-10 mt-10">
          
          <motion.div
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
          >
            <h1 className="absolute overflow-hidden flex md:right-0 
            top-2/3  md:top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-5xl md:text-6xl lg:text-7xl font-semibold">
              {"trawa".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="Project FYDE"
              />
            </div>
          </motion.div>
    
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1 className="absolute overflow-hidden flex  md:right-full top-2/3  md:top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter font-semibold z-[9] text-5xl md:text-6xl lg:text-7xl">
              {"Premium Blend".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="Project VISE"
              />
            </div>
          </motion.div>



          
        </div>
      </div>
    </div>
  );
}

export default Featured;
