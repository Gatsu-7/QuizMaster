// import React from "react";
// import { PiBrainDuotone } from "react-icons/pi";
// import { motion } from "framer-motion"; // Animation library

// export default function Hero() {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/path-to-your-video.mp4" type="video/mp4" />
//         <img
//           src="https://source.unsplash.com/featured/?quiz,knowledge"
//           alt="Quiz Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </video>

//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>

//       <motion.div
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute left-8 bottom-20 text-white opacity-50"
//       >
//         <PiBrainDuotone className="h-28 w-28 hidden md:block text-red-500 hover:scale-110 duration-200 transition-all ease-in-out" />
//       </motion.div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
//         <div className="max-w-3xl">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="text-5xl sm:text-7xl font-extrabold leading-tight text-white"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-200">
//               QuizMaster
//             </span>
//             : Test Your Knowledge
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="mt-4 text-lg sm:text-xl text-gray-300"
//           >
//             Engage in thrilling quizzes, challenge your friends, and rise to the
//             top of the leaderboard.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 1 }}
//             className="mt-8 space-x-4"
//           >
//             <a
//               href="/quizzes"
//               className="inline-block px-8 py-4 bg-red-400 text-white font-bold text-lg rounded-full hover:bg-red-500 transition duration-300"
//             >
//               Take a Quiz
//             </a>
//             <a
//               href="/learn-more"
//               className="inline-block px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition duration-300"
//             >
//               Learn More
//             </a>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 1 }}
//             className="mt-6 text-sm text-gray-400"
//           >
//             Thousands of questions across various topics!
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { PiBrainDuotone } from "react-icons/pi";
import { motion } from "framer-motion"; // for animations
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522069213448-443a614da9b6?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: `translateY(${offsetY * 0.5}px)`,
          opacity: 0.5,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </motion.div>

      <motion.div
        className="absolute left-10 top-40 text-yellow-400 opacity-70 rounded-full shadow-lg shadow-yellow-500/50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <PiBrainDuotone className="h-20 w-20" />
      </motion.div>

      <motion.div
        className="absolute right-10 bottom-40 text-red-300 opacity-70 rounded-full shadow-lg shadow-red-500/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PiBrainDuotone className="h-16 w-16" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 sm:px-12 h-full flex flex-col justify-center items-center text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-8xl font-extrabold leading-tight"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} // Slower parallax effect
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300 mb-4">
            QuizMaster
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-xl sm:text-3xl text-white pb-20 "
        >
          Challenge your knowledge, dominate the leaderboard, and prove you’re
          the master of quizzes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="space-x-6 mt-28"
        >
          <a
            href="/quizzes"
            className="px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-md transition transform hover:scale-110 hover:shadow-lg hover:bg-red-700 hover:shadow-red-700/50"
          >
            Take a Quiz
          </a>
          <a
            href="/learn-more"
            className="px-8 py-4 border border-white text-white font-bold text-lg rounded-full transition transform hover:scale-110 hover:border-yellow-400 hover:bg-black hover:shadow-lg hover:shadow-yellow-400/50"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="pt-8"
        >
          <div className=" flex justify-center items-center text-gray-300 text-lg">
            Scroll down to explore
            <MdKeyboardArrowDown className="inline mx-2 text-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
