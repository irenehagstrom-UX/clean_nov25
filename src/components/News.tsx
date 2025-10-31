import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Download,
  Mail,
  Linkedin,
  MapPin,
  Languages,
  BookOpen,
  Plane,
  Coffee,
  Camera,
  Palette,
  Users,
} from "lucide-react";

interface NewsProps {
  onBackClick?: () => void;
}

const News = ({ onBackClick }: NewsProps) => {
  const skills = [
    "UX Strategy",
    "Product Design",
    "User Research",
    "Design Systems",
    "Prototyping",
    "Information Architecture",
  ];

  const methodologies = [
    "Design Thinking",
    "Agile/Scrum",
    "Lean UX",
    "Human-Centered Design",
    "Service Design",
    "Design Sprints",
  ];

  const countries = [
    { name: "Sweden", flag: "🇸🇪", role: "Born & Raised" },
    { name: "USA", flag: "🇺🇸", role: "Early Childhood" },
    { name: "Chile", flag: "🇨🇱", role: "Teenage Years" },
    { name: "Sweden", flag: "🇸🇪","Australia", flag: "🇦🇺", role:"University" },
    { name: "Asutralia", flag: "🇦🇺","Germany", flag: "🇩🇪",role:"Work" },
  ];

  const languages = [
    { name: "Swedish",flag: "🇸🇪", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Fluent" },
    { name: "Spanish", level: "Conversational" },
  ];

  const topBooks = [
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "UX Design",
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      category: "Design Psychology",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Personal Development",
    },
    {
      title: "Sprint",
      author: "Jake Knapp",
      category: "Design Process",
    },
  ];

  const travelHighlights = [
    "Scuba diving in the Great Barrier Reef",
    "Skiing in the Swiss Alps",
    "Exploring Patagonia's wilderness",
    "Cultural immersion in Southeast Asia",
    "Northern Lights in Lapland",
  ];

  const interests = [
    { icon: Camera, label: "Family Tim" },
    { icon: Palette, label: "Art & Photography" },
    { icon: Coffee, label: "Hosting Dinners" },
    { icon: Users, label: "Travel" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      {onBackClick && (
        <div className="container mx-auto px-4 py-6">
          <Button
            onClick={onBackClick}
            variant="ghost"
            className="text-gray-600 hover:text-primary hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      )}

      {/* Magazine Layout */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Magazine Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1
                className="text-8xl font-light text-gray-900 leading-none tracking-tight mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                IRENE
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-0.5 bg-red-500"></div>
                <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
                  Design Quarterly
                </span>
              </div>
              <p className="text-lg text-gray-600 font-light">
                Issue #01 • Winter 2025
              </p>
            </motion.div>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold text-gray-200 mb-2">01</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Portfolio
            </div>
          </div>
        </div>

        {/* Hero Feature Article */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Large Feature Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Irene at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2">
                <span className="text-xs font-medium text-gray-900 uppercase tracking-widest">
                  Feature Story
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h2
                  className="text-5xl font-light text-white mb-4 leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  She's talking
                  <br />
                  <span className="font-bold text-6xl">TO US</span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Article Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                  Interview
                </span>
              </div>

              <div className="text-sm leading-relaxed text-gray-700 space-y-4">
                <p className="font-medium text-lg text-gray-900 mb-4">
                  From the mountains of Sweden to the beaches of Australia,
                  Irene Hagström's journey spans continents and cultures.
                </p>
                <p>
                  With over 8 years of experience crafting digital experiences
                  that solve real problems, Irene brings a unique perspective
                  shaped by her multicultural background.
                </p>
                <p className="italic border-l-2 border-gray-300 pl-4">
                  "Design isn't just about making things look beautiful. It's
                  about understanding people, their struggles, and creating
                  solutions that genuinely improve their lives."
                </p>
                <p>
                  Her approach combines rigorous research with creative
                  problem-solving, always keeping the human element at the
                  center of every decision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Magazine Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-black text-white p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl font-bold">06</span>
                <div className="w-8 h-0.5 bg-white"></div>
              </div>
              <h3
                className="text-3xl font-light mb-8"
                style={{ fontFamily: "Georgia, serif" }}
              >
                EXPERTISE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-300">
                    Core Skills
                  </h4>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="text-sm border-b border-gray-700 pb-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-300">
                    Methodologies
                  </h4>
                  <div className="space-y-2">
                    {methodologies.map((method, index) => (
                      <div
                        key={index}
                        className="text-sm border-b border-gray-700 pb-1"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-100 p-6 h-full">
              <div className="text-2xl font-bold text-gray-900 mb-6">
                GLOBAL
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-medium mb-3 uppercase tracking-widest text-gray-500">
                    Countries Lived
                  </h4>
                  <div className="space-y-2">
                    {countries.slice(0, 3).map((country, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-lg">{country.flag}</span>
                        <div>
                          <div className="text-sm font-medium">
                            {country.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {country.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium mb-3 uppercase tracking-widest text-gray-500">
                    Languages
                  </h4>
                  <div className="space-y-1">
                    {languages.slice(0, 3).map((lang, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{lang.name}</span>
                        <span className="text-gray-600">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="lg:col-span-1"
          >
            <div className="bg-red-500 text-white p-6 h-full">
              <h3
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                CONNECT
              </h3>
              <div className="space-y-4">
                <button
                  className="block w-full text-left text-sm hover:underline"
                  onClick={() =>
                    window.open("https://linkedin.com/in/irene-hagstrom")
                  }
                >
                  LinkedIn Profile →
                </button>
                <button
                  className="block w-full text-left text-sm hover:underline"
                  onClick={() =>
                    (window.location.href = "mailto:irene@example.com")
                  }
                >
                  Email Me →
                </button>
                <button
                  className="block w-full text-left text-sm hover:underline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv-irene-hagstrom.pdf";
                    link.download = "Irene-Hagstrom-CV.pdf";
                    link.click();
                  }}
                >
                  Download CV →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Book List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white border-2 border-gray-900 p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold">14</span>
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
              <h3
                className="text-xl font-light mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                TOP READS
              </h3>
              <div className="space-y-4">
                {topBooks.slice(0, 3).map((book, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">
                      {book.title}
                    </h4>
                    <p className="text-xs text-gray-600">{book.author}</p>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {book.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Travel Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                alt="Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">08</span>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
                <h3
                  className="text-xl font-light text-white mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  ADVENTURES
                </h3>
                <div className="space-y-2">
                  {travelHighlights.slice(0, 3).map((highlight, index) => (
                    <p key={index} className="text-xs text-white/90">
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="bg-yellow-400 p-6 h-full">
              <h3
                className="text-6xl font-bold text-gray-900 mb-6 leading-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                NEW
                <br />
                <span className="text-2xl font-light">GLAMOUR</span>
              </h3>
              <div className="space-y-3">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-gray-900" />
                      <span className="text-sm font-medium text-gray-900">
                        {interest.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-900/20">
                <p className="text-xs text-gray-800 italic">
                  "Creativity flows through everything I do – from design work
                  to weekend projects."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Magazine Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-between items-center mt-16 pt-8 border-t border-gray-900"
        >
          <div className="text-xs text-gray-500 uppercase tracking-widest">
            Design Quarterly • Issue #01 • Winter 2025
          </div>
          <div className="text-xs text-gray-500">
            Published by Irene Hagström
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
