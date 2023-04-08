import { motion} from "framer-motion";
import { styles } from "../styles";
import { art } from "../assets";
import { useState } from "react";


const Hero = () => {


  return (
   

 <section className="relative w-full h-screen mx-auto">
<motion.div 

initial={{ opacity: 0, scale: 1 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}

className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
<div className="flex flex-col justify-center items-center mt-5">
  </div>
<div>
  <h1 className={`antialiased ${styles.heroHeadText}`}>
<span className="text-gray-700 font-Audiowide">ideas.</span><span className="text-gray-800 font-Audiowide"><br/>vision.</span>
<span className="text-gray-900 font-Audiowide"><br/>boost.</span>
  </h1>
  <p className={`antialiased ${styles.heroSubText} mt-10 text-gray-800 font-Audiowide`}>
  Design creates an experience, <br/>forms a shape, expresses a message. <br/> We use it to create an advantage.
  </p>
 
  </div>
</motion.div>

<motion.img
  initial={{ opacity: 0, scale: 1 }}
  animate={{ opacity: 1, scale: 1}}
  transition={{ duration: 1 }}
src={art} className="hero-banner-img"/>




<div className="absolute sx:bottom-5 bottom-0 w-full flex justify-center items-center">
<a href="#about">
<motion.div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
<motion.div
animate={{
  y: [0, 24, 0]
}}
transition={{
  duration: 1.5,
  repeat: Infinity,
  repeatType: "loop"
}}
className="w-3 h-3 rounded-full bg-black mb-1"
/>

</motion.div>
</a>
</div>
</section>

  )
}

export default Hero