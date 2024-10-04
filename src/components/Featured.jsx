import { motion, useAnimation } from 'framer-motion'

function Featured() {
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: "0" })
  }

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }

  return (
    <div className="w-full py-20 bg-zinc-800">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-7xl font-mono tracking-tighter">Featured projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            className="cardcontainer relative w-1/2 h-[70vh]"
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
          >
            <h1 className="absolute overflow-hidden flex right-0 top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-7xl font-semibold">
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
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter font-semibold z-[9] text-7xl">
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
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
