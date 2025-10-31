import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: string;
  title: string;
  year: string;
  date: string;
  image: string;
}

const Archive = () => {
  const [activeView, setActiveView] = useState<"portfolio" | "webdesign">(
    "portfolio",
  );

  const portfolioTimeline: TimelineItem[] = [
    {
      id: "0",
      title: "Includes an AI chatbot about Irene (Ver.2)",
      year: "2025",
      date: "2025",
      image: "/images/versions/web-portfolio-2025-Chatbot.png",
    },
    {
      id: "1",
      title: "Portfolio developed with AI (Ver.1)",
      year: "2025",
      date: "2025",
      image: "/images/versions/web-portfolio-2025-port.png",
    },
    {
      id: "2",
      title: "Portfolio nr. 4 was mobile responsive",
      year: "2015",
      date: "2015",
      image: "/images/versions/web-porfolio-4.gif",
    },
    {
      id: "3",
      title: "Portfolio nr. 3",
      year: "2011",
      date: "2011",
      image: "/images/versions/web-porfolio-3.gif",
    },
    {
      id: "4",
      title: "My first portfolio website with flash animations",
      year: "2001",
      date: "2001",
      image: "/images/versions/web-portfolio-2.png",
    },
    {
      id: "5",
      title: "My first ever 'Homepage' as it was called in 1998",
      year: "1998",
      date: "1998",
      image: "/images/versions/web-portfolio-1.png",
    },
  ];

  const webdesignTimeline: TimelineItem[] = [
    {
      id: "1",
      title: "LeadTalent",
      year: "2022",
      date: "2022",
      image: "/images/webhistory/web-2022-Lead.gif",
    },
    {
      id: "2",
      title: "Legalito",
      year: "2017",
      date: "2017",
      image: "/images/webhistory/web-2017-legalito.gif",
    },
    {
      id: "3",
      title: "LKzwo GmbH",
      year: "2015",
      date: "2015",
      image: "/images/webhistory/web-2015-lkzwo.gif",
    },
    {
      id: "4",
      title: "Smart&Frank",
      year: "2008",
      date: "2008",
      image: "/images/webhistory/web_2008_s&F.png",
    },
    {
      id: "5",
      title: "8cl cocktailcatering",
      year: "2006",
      date: "2006",
      image: "/images/webhistory/web_2006_8cl.png",
    },
    {
      id: "6",
      title: "Gecolia",
      year: "2004",
      date: "2004",
      image: "/images/webhistory/web-2004-gekolia.png",
    },
    {
      id: "7",
      title: "Triple-0 Microscopy",
      year: "2002",
      date: "2002",
      image: "/images/webhistory/web_2002_triple0.png",
    },
    {
      id: "8",
      title: "Alpha Contec",
      year: "2001",
      date: "2001",
      image: "/images/webhistory/web_2001_aphacontect.png",
    },
    {
      id: "9",
      title: "AnagnosTec",
      year: "2001",
      date: "2001",
      image: "/images/webhistory/web-2001-angostec.png",
    },
    {
      id: "10",
      title: "Dooyoo AG",
      year: "2000",
      date: "2000",
      image: "/images/webhistory/web-2000-dooyoo.png",
    },
    {
      id: "11",
      title: "TecNet",
      year: "2000",
      date: "2000",
      image: "/images/webhistory/Web_2000_tecnet.png",
    },
    {
      id: "12",
      title: "8cl cocktailcatering",
      year: "2000",
      date: "2000",
      image: "/images/webhistory/web_2000_8cl.png",
    },
  ];

  const currentTimeline =
    activeView === "portfolio" ? portfolioTimeline : webdesignTimeline;

  // Get unique years sorted from earliest to latest
  const uniqueYears = Array.from(
    new Set(currentTimeline.map((item) => item.year)),
  ).sort((a, b) => parseInt(a) - parseInt(b));

  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* White Content Frame */}
      <div className="bg-black rounded-lg shadow-2xl max-w-5xl mx-auto overflow-y-auto">
        <div className="px-6 pt-12 pb-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(340,30%,80%)]">
              Let's go back in time
            </h1>

            {/* View Toggle */}
            <div className="inline-flex bg-[#1a1a1a] rounded-full p-1 gap-1">
              <button
                onClick={() => setActiveView("portfolio")}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeView === "portfolio"
                    ? "bg-[#7bd1de] text-black font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Portfolio timeline
              </button>
              <button
                onClick={() => setActiveView("webdesign")}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeView === "webdesign"
                    ? "bg-[#7bd1de] text-black font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Web design work
              </button>
            </div>

            {/* View-specific descriptions */}
            <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
              {activeView === "portfolio"
                ? "Scroll down to explore how this and previous portfolios have evolved over time, all the way back to 1998!"
                : "See how web design has evolved throughout the years. Here some of my web design work."}
            </p>
          </motion.div>

          {/* Horizontal Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 sticky top-4 z-10 bg-black/90 backdrop-blur-sm py-6 rounded-lg"
          >
            <div className="relative max-w-4xl mx-auto px-8">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-600 -translate-y-1/2" />

              {/* Year Buttons */}
              <div className="relative flex justify-between items-center">
                {uniqueYears.map((year, index) => (
                  <button
                    key={year}
                    onClick={() => scrollToYear(year)}
                    className="group relative flex flex-col items-center"
                  >
                    {/* Circle Button */}
                    <div className="w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-400 transition-all duration-300 group-hover:bg-[#7bd1de] group-hover:border-[#7bd1de] group-hover:scale-125 cursor-pointer" />

                    {/* Year Label */}
                    <span className="absolute -bottom-8 text-xs text-gray-400 group-hover:text-[#7bd1de] transition-colors duration-300 whitespace-nowrap">
                      {year}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Items */}
            <div className="space-y-16">
              {currentTimeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  id={`year-${item.year}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative scroll-mt-32"
                >
                  {/* Content Card - Scaled down 15% */}
                  <div className="bg-[#2a2a2a] border border-gray-400 rounded-lg overflow-hidden max-w-[85%] mx-auto">
                    <div className="p-4 bg-[#2a2a2a]">
                      <h3 className="text-lg font-semibold text-white">
                        {item.date}
                      </h3>
                      <p className="text-gray-300 mt-1">{item.title}</p>
                    </div>
                    <div className="p-6">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-gray-400">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Year Marker at bottom - No circle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative flex items-center gap-8 md:gap-12 mt-16"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
