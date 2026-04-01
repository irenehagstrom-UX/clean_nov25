import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import { Slider } from "./ui/slider";
import InteractiveChatbot from "./InteractiveChatbot";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HomePageProps {
  animationSpeed?: number;
  movementIntensity?: number;
  onSpeedChange?: (value: number) => void;
  onIntensityChange?: (value: number) => void;
}

const HomePage = ({
  animationSpeed = 10,
  movementIntensity = 10,
  onSpeedChange = () => {},
  onIntensityChange = () => {},
}: HomePageProps) => {
  const navigate = useNavigate();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleExperienceClick = () => {
    navigate("/roles");
  };

  const handleDisciplineClick = () => {
    navigate("/discipline");
  };

  const handleChatbotClick = () => {
    setIsChatbotOpen(true);
  };

  return (
    <>
      <main className="container mx-auto px-4 pb-20 flex flex-col relative">
        {/* Hero Section */}
        <Hero
          onExperienceClick={handleExperienceClick}
          onDisciplineClick={handleDisciplineClick}
          onChatbotClick={handleChatbotClick}
        />

        {/* Animation Controls - Bottom left of entire page */}
        <div className="fixed bottom-4 left-4 w-44 bg-[hsl(var(--surface-2))]/90 backdrop-blur-sm shadow-md border border-[hsl(var(--border))] rounded-lg p-3 space-y-2 z-20">
          <div>
            <label className="text-[10px] font-medium text-[hsl(var(--text-secondary))] mb-1 block">
              Speed: {animationSpeed}%
            </label>
            <Slider
              value={[animationSpeed]}
              onValueChange={(value) => onSpeedChange(value[0])}
              max={100}
              min={1}
              step={1}
              className="w-full cursor-pointer"
            />
          </div>
          
          <div>
            <label className="text-[10px] font-medium text-[hsl(var(--text-secondary))] mb-1 block">
              Intensity: {movementIntensity}%
            </label>
            <Slider
              value={[movementIntensity]}
              onValueChange={(value) => onIntensityChange(value[0])}
              max={100}
              min={1}
              step={1}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </main>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsChatbotOpen(false)}
            onWheel={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl h-[90vh] bg-[hsl(var(--surface-1))] border-4 border-border shadow-none rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 px-8 pt-6 pb-4 border-b border-[hsl(var(--border))]">
                <h2 className="text-2xl font-semibold text-[hsl(var(--text-primary))]">
                  Ask my Avatar about me
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="absolute top-4 right-4 z-10 bg-[hsl(var(--surface-3))] hover:bg-[hsl(var(--surface-2))] rounded-full p-2 shadow-md transition-colors"
              >
                <X className="w-5 h-5 text-[hsl(var(--text-secondary))]" />
              </button>

              {/* Chatbot Content */}
              <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
                <InteractiveChatbot />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;