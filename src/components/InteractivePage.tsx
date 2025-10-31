import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import AnimatedFloralBackground from "./AnimatedFloralBackground";
import AnimationControls from "./AnimationControls";
import InteractiveChatbot from "./InteractiveChatbot";

const InteractivePage = () => {
  const navigate = useNavigate();
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const [movementIntensity, setMovementIntensity] = useState(10);

  return (
    <div className="min-h-screen relative bg-white">
      {/* Animated Floral Background */}
      <AnimatedFloralBackground
        animationSpeed={animationSpeed / 100}
        movementIntensity={movementIntensity / 100}
        className="fixed inset-0 z-0"
      />

      {/* Animation Controls */}
      <AnimationControls
        speed={animationSpeed}
        intensity={movementIntensity}
        onSpeedChange={setAnimationSpeed}
        onIntensityChange={setMovementIntensity}
      />

      {/* Mode Switcher */}
      <header className="container mx-auto px-4 py-6 relative z-10">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-2 text-gray-700 hover:text-[#7bd1de] transition-colors text-sm font-satoshi bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-200"
        >
          <ArrowLeftRight className="w-4 h-4" />
          Switch to Portfolio Mode
        </button>
      </header>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-3 font-satoshi">
            Ask about me
          </h1>
        </motion.div>

        <InteractiveChatbot />
      </div>
    </div>
  );
};

export default InteractivePage;
