import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveChatbot from "./InteractiveChatbot";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if any portfolio modal is open by observing the DOM
  useEffect(() => {
    const checkForModals = () => {
      const portfolioModal = document.querySelector('[role="dialog"]');
      setIsModalOpen(!!portfolioModal);
    };

    // Check immediately
    checkForModals();

    // Set up observer for DOM changes
    const observer = new MutationObserver(checkForModals);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render if a portfolio modal is open
  if (isModalOpen && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Floating Avatar Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg overflow-hidden border-2 border-[#7bd1de] hover:border-[#6bc1ce] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <img
            src="/irene-avatar.jpg"
            alt="Chat with Irene"
            className="w-16 h-16 object-cover"
          />
        </motion.button>
      )}

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            onWheel={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl h-[90vh] bg-[#2a2a2a] border-4 border-border shadow-none rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 px-8 pt-6 pb-4 border-b border-gray-600">
                <h2 className="text-2xl font-semibold text-gray-100">
                  Ask my Avatar about me
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-full p-2 shadow-md transition-colors"
              >
                <X className="w-5 h-5 text-gray-300" />
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

export default FloatingChatbot;