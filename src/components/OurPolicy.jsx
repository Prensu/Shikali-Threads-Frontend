import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useState } from 'react';

const policyData = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange Policy",
    description: "We offer hassle-free exchange policy",
  },
  {
    icon: assets.quality_icon,
    title: "7-day return policy",
    description: "We provide a 7-day return policy",
  },
  {
    icon: assets.support_img,
    title: "Best customer support",
    description: "We provide 24/7 customer support",
  },
];

// Reusable Card Component with Professional Hover Effect
const PolicyCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center overflow-hidden border border-gray-200 hover:border-gray-400"
    >
      {/* Icon */}
      <motion.img
        src={icon}
        alt={title}
        className="w-14 mb-5 group-hover:scale-110 transition-transform duration-300"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const OurPolicy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-12">
        Our Policies
      </h2>
      <motion.div
        className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {policyData.map((policy, index) => (
          <PolicyCard
            key={index}
            icon={policy.icon}
            title={policy.title}
            description={policy.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default OurPolicy;
