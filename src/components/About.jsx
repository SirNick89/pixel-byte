import React from 'react'
import  Tilt  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, count }) => {
return (
<Tilt className="xs:w-[250px] w-full">
<motion.div
variants={fadeIn('up', 'spring', 0.75 * index, 0.75)}
className="w-full green-pink-gradient p-[1px] rounded-[200px] shadow-card"
>
<div options={{
  max: 45,
  scale: 1,
  speed: 450
}}
className="bg-tertiary rounded-[200px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
>
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
<p className='text-white text-[15px]  text-center'>{count}</p>
</div>
</motion.div>

</Tilt>
)
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Want to know us better?</p>
<h2 className={styles.sectionHeadText}>About Us</h2>

    </motion.div>
    
    <motion.p
    variants={fadeIn('', '', 0.5, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
We are a firm of graphic designers. We provide services like designing assets, like logos, banners, brochures etc. to editing advertisement videos etc. We can match your idea and vision of your bussiness. We are based in Alwar, Rajasthan &#40;301001&#41; and are in bussiness since 2 years. We have worked for over 200 clients matching their needs and delivered over 1000 designs. Most people think that hiring someone to make assets is expensive, our costs and deadlines are very affordable and puctual. We have worked for many startups and bussinesses to boost their advertisements with our designs. And we only finalize our designs unless our clients are satisfied with them.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServiceCard key={services.title} index={index} {...services} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')