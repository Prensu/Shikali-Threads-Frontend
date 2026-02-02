import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        className="text-2xl text-center pt-8 border-t"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Title text1={"ABOUT"} text2={"US"} />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        {/* Left Image */}
        <motion.img
          src={assets.newari_dress_icon}
          alt="Shikali Threads"
          className="w-full md:max-w-[450px] shadow-lg rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ duration: 0.8 }}
        />

        {/* Right Text Section */}
        <motion.div
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          transition={{ duration: 0.8 }}
        >
          <p>
            Shikali Threads, situated in the heart of Bhainsepati, Lalitpur, is
            a celebration of Nepali heritage and culture. We specialize in
            providing a wide range of traditional Nepali clothing and cultural
            wardrobes that reflect the rich diversity of Nepal's ethnic groups.
          </p>
          <p>
            Our journey began with a commitment to preserve and promote the
            traditional attire and craftsmanship of Nepal. From elegant
            <i> daura-suruwal</i> and <i>gunyo-cholo</i> to unique cultural
            dresses of various ethnicities, Shikali Threads ensures that every
            piece tells a story of our proud heritage.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Shikali Threads, our mission is to promote Nepali culture through
            high-quality traditional clothing while providing our customers with
            authentic and unique designs. We aim to foster pride in our culture
            and offer a platform for people to connect with Nepal’s heritage.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="py-4 text-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </motion.div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        {/* Cards with Hover Animations */}
        {[
          {
            title: "Authenticity",
            description:
              "Our products are made with precision and care, ensuring that every item embodies the essence of Nepali tradition and culture.",
          },
          {
            title: "Variety",
            description:
              "We offer a diverse collection of cultural outfits from different ethnicities across Nepal, catering to your needs for both daily wear and special occasions.",
          },
          {
            title: "Exceptional Customer Service",
            description:
              "Our dedicated team is here to ensure you find the perfect piece that resonates with your style and cultural identity.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <b>{item.title}</b>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <NewsLetterBox />
      </motion.div>
    </div>
  );
};

export default About;
