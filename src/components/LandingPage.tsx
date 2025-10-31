import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedFloralBackground from "./AnimatedFloralBackground";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-white flex items-center justify-center">
      {/* Animated Floral Background */}
      <AnimatedFloralBackground
        animationSpeed={0.1}
        movementIntensity={0.1}
        className="fixed inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 p-8 rounded-lg backdrop-blur-sm border border-gray-200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-satoshi leading-relaxed">
            Welcome to Irene's portfolio.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed">
            Before we start, this portfolio is ever evolving, so it might look
            different next week.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            You can explore it as a{" "}
            <button
              onClick={() => navigate("/portfolio")}
              className="text-[#7bd1de] hover:text-[#F4C56D] transition-colors font-semibold"
            >
              traditional website
            </button>
            .
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            Have questions? Chat with my avatar using the chatbot in the bottom right corner!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;