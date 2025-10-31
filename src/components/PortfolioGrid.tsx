import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  tags: string[];
  content?: React.ReactNode;
  // For experience/roles projects
  experience?: string;
  year?: string;
  outcomes?: string;
  // For discipline projects
  modalContent?: {
    overview: string;
    process: string;
    outcomes: string;
    year: string;
  };
}

interface PortfolioGridProps {
  projects?: Project[];
  title?: string;
  description?: string;
  type?: "discipline" | "experience";
}

const PortfolioGrid = ({
  projects = [],
  title = "Portfolio Projects",
  description = "Browse some sample work",
  type = "discipline",
}: PortfolioGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-100 mb-4 font-satoshi">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Card className="h-full overflow-hidden border-4 border-border hover:shadow-lg transition-shadow duration-300 bg-[#2a2a2a]">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-light mb-2 font-satoshi text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#3a3a3a] text-gray-300 hover:bg-[#3a3a3a] cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#2a2a2a] border-4 border-border shadow-none rounded-none">
            {selectedProject && (
              <>
                <DialogHeader className="bg-[#2a2a2a]">
                  <DialogTitle className="text-2xl font-light font-satoshi text-gray-100">
                    {selectedProject.title}
                  </DialogTitle>
                  {type === "experience" && (
                    <DialogDescription className="text-base text-gray-300">
                      {selectedProject.description}
                    </DialogDescription>
                  )}
                </DialogHeader>

                <div className="mt-6">
                  <div className="rounded-md overflow-hidden mb-6 border border-gray-400">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`w-full ${
                        selectedProject.id === "7"
                          ? "h-48 object-cover"
                          : selectedProject.title === "Founder & Lead Designer"
                            ? "h-[340px] object-cover"
                            : [
                                  "Branding & Visual Design",
                                  "Marketing and Brand Lead",
                                  "Product Manager and Facilitator",
                                  "Industrial Design",
                                  "Project Manager",
                                ].includes(selectedProject.title)
                              ? "h-[400px] object-cover"
                              : [
                                    "Art & Photography",
                                    "Senior Product & UX Designer",
                                  ].includes(selectedProject.title)
                                ? "h-[300px] object-cover object-bottom"
                                : selectedProject.title === "AI Product Design"
                                  ? "h-[350px] object-cover object-top"
                                  : [
                                        "EdTech Evaluation Tool Design",
                                        "Sustainable Fashion Design",
                                      ].includes(selectedProject.title)
                                    ? "h-[350px] object-cover object-center"
                                    : "h-auto object-cover"
                      }`}
                    />
                  </div>

                  {type === "discipline" && selectedProject.modalContent ? (
                    <div className="space-y-6">
                      {selectedProject.modalContent.overview && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Overview
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.modalContent.overview}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.process && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Process
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.modalContent.process}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.outcomes && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Outcomes
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.modalContent.outcomes}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.year && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Production year
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.modalContent.year}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : type === "experience" ? (
                    <div className="space-y-6">
                      {selectedProject.experience && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Experience
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.experience}
                          </p>
                        </div>
                      )}

                      {selectedProject.year && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi text-gray-100">
                            Year
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.year}
                          </p>
                        </div>
                      )}

                      {selectedProject.outcomes && (
                        <div>
                          <h3 className="text-lg font-medium mb-2 font-satoshi text-gray-100">
                            Outcomes
                          </h3>
                          <p className="text-gray-300">
                            {selectedProject.outcomes}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-gray-500 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Image Slider */}
                  {selectedProject.additionalImages &&
                    selectedProject.additionalImages.length > 0 && (
                      <div className="mt-8">
                        <Carousel className="w-full max-w-2xl mx-auto">
                          <CarouselContent>
                            {selectedProject.additionalImages.map(
                              (imageUrl, index) => (
                                <CarouselItem
                                  key={index}
                                  className="md:basis-1/2 pl-6"
                                >
                                  <div className="p-2">
                                    <div className="aspect-[4/3] overflow-hidden rounded-md border border-gray-400">
                                      <img
                                        src={imageUrl}
                                        alt={`${selectedProject.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              ),
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none" />
                          <CarouselNext className="bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none" />
                        </Carousel>
                      </div>
                    )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PortfolioGrid;