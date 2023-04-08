import React from 'react'
import  Tilt  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
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
<img src={icon} alt={title}
className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
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
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sit saepe possimus, ratione amet dolorem ipsa corrupti sapiente nobis quo. Deserunt iste corporis atque optio facere tempora mollitia a ad sint perferendis libero distinctio impedit, nostrum ab magnam fugiat amet quia harum, blanditiis aperiam odio animi? Mollitia corporis saepe unde perspiciatis vitae aspernatur beatae voluptas distinctio eos porro cumque quaerat sint rem tenetur, doloremque provident id blanditiis magnam aliquam, eum laboriosam excepturi esse repellat omnis. Non vero provident corporis a, facilis earum sunt architecto nobis eaque deleniti maiores nulla et eveniet dolorum quia incidunt commodi aliquid officiis sapiente sit perferendis, eum dicta numquam! Possimus architecto reprehenderit vel excepturi atque ab nostrum repellendus commodi esse quasi nam accusantium eum deserunt tempore ad, repellat labore aliquam, iusto, a suscipit! Adipisci, neque. Quo quod quidem labore nostrum placeat a voluptatem, assumenda inventore suscipit eveniet dolores soluta ad nihil neque quos voluptates dignissimos in doloremque mollitia, quam totam consequatur ut. Quae quis quam perferendis omnis porro quibusdam sit quas, earum doloremque, consequuntur similique nemo reprehenderit. Natus, nemo illo accusantium perspiciatis sint, laborum sit assumenda ut cupiditate mollitia dolor voluptatum, officia modi? Ipsum veritatis molestias, odio exercitationem illo consectetur libero natus dicta minima cum sunt!
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