import { assets } from '../assets/assets';
import Title from '../Components/Title';
import { motion } from 'framer-motion'; // Framer Motion for animations

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Page Title */}
      <motion.div
        className="to-current text-2xl pt-10 border-t"
        variants={itemVariants}
      >
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      {/* Main Contact Section */}
      <motion.div
        className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28 px-6"
        variants={itemVariants}
      >
        {/* Embedded Google Map */}
        <motion.div
          className="w-full sm:max-w-[480px] rounded-lg overflow-hidden shadow-md custom-cursor"
          whileHover={{ scale: 1.03 }}
          variants={itemVariants}
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.997421424259!2d85.28753606433457!3d27.643101547332428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17ee4e10205b%3A0xcc1a88f761f8297a!2sSikali%20Temple!5e0!3m2!1sen!2snp!4v1736238405910!5m2!1sen!2snp"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Contact Info without the box */}
        <motion.div
          className="flex flex-col justify-center items-start gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xl font-bold text-gray-700">Our Store</p>
            <p className="text-gray-600 mt-1">
              44700 Bhainsepati Chowk
              <br />
              Lalitpur, Nepal
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-800">
              Contact No: <span className="text-gray-500">+977 9869221606</span>
            </p>
            <p className="text-lg text-gray-800 mt-1">
              Email: <span className="text-gray-500">ShikaliThreads@gmail.com</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-semibold text-gray-700">Shopping at Shikali Threads</p>
            <p className="text-gray-600 mt-1">
              Explore different rich cultural dresses of Nepal
            </p>
          </motion.div>

          {/* Explore Jobs Button */}
          <motion.button
            className="border border-black px-6 py-2 text-sm font-medium rounded hover:bg-black hover:text-white transition-all duration-500"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Explore Best Suited Cultural Clothes
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
