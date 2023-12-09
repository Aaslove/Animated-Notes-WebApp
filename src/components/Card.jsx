import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div
      drag
      dragConstraints={props.reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 overflow-hidden text-white py-10 px-8"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-5 py-3 px-8">
          <h5>.4mb</h5>
          <span className="bg-zinc-600 w-7 h-7 rounded-full flex items-center justify-center ">
            <LuDownload size=".7em" color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
