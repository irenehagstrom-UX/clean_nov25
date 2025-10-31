import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectTag {
  id: string;
  name: string;
}

interface FeaturedProjectProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: ProjectTag[];
  detailedDescription?: string;
  additionalImages?: string[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title = "UX Redesign for Financial App",
  description = "A complete redesign of a financial management application focusing on improving user experience and accessibility.",
  imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  tags = [
    { id: "1", name: "UX Design" },
    { id: "2", name: "UI Design" },
    { id: "3", name: "Financial Services" },
    { id: "4", name: "Accessibility" },
  ],
  detailedDescription = "This project involved a comprehensive redesign of a financial management application used by over 500,000 users. The goal was to improve user experience, increase accessibility, and modernize the visual design while maintaining the app's core functionality. Through user research, wireframing, prototyping, and testing, we created a solution that increased user satisfaction by 35% and reduced task completion time by 25%.",
  additionalImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  ],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 bg-[#1a1a1a]">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Featured Project</h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Card className="overflow-hidden border-0 shadow-lg bg-[#2a2a2a]">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-100">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <Badge key={tag.id} variant="secondary" className="bg-[#3a3a3a] text-gray-300">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="mt-1 text-gray-300 hover:text-gray-100">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#2a2a2a] border-4 border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-100">{title}</DialogTitle>
            <DialogDescription className="text-base text-gray-300">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="bg-[#3a3a3a] text-gray-300">
                  {tag.name}
                </Badge>
              ))}
            </div>

            <div className="mb-6">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto rounded-md mb-6 border border-gray-400"
              />
              <p className="text-gray-300">{detailedDescription}</p>
            </div>

            {additionalImages && additionalImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {additionalImages.map((img, index) => (
                  <div key={index} className="rounded-md overflow-hidden border border-gray-400">
                    <img
                      src={img}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturedProject;