import { motion } from 'framer-motion'; 
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <motion.p
              className="w-8 md:w-11 h-[2px] bg-[#414141]"
              whileHover={{ width: '100%' }}
            ></motion.p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <motion.h1
            className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed"
            whileHover={{ scale: 1.1 }}
          >
            Latest Arrivals
          </motion.h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <motion.p
              className="w-8 md:w-11 h-[1px] bg-[#414141]"
              whileHover={{ width: '100%' }}
            ></motion.p>
          </div>
        </div>
      </motion.div>

      {/* Hero Right Side */}
      <motion.img
        src={assets.hero_maicha_icon}
        alt=""
        className="w-full sm:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Hero;
