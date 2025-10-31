import { Suspense, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Mail, Linkedin, Download } from "lucide-react";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import PortfolioGrid from "./components/PortfolioGrid";
import Archive from "./components/Archive";
import AnimatedFloralBackground from "./components/AnimatedFloralBackground";
import FloatingChatbot from "./components/FloatingChatbot";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const [movementIntensity, setMovementIntensity] = useState(10);

  // Sample data for portfolio items
  const experienceProjects = [
    {
      id: "1",
      title: "Senior Product & UX Designer",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      additionalImages: [
        "/images/PR_aiven_overview.png",
        "/images/PR_aiven_wireframes.png",
        "/images/PR_ux_services.png",
        "/images/PR_aiven_CRDR.png",
      ],
      tags: [
        "Product design",
        "UX/UI design",
        "Developer tools",
        "Product management",
        "Leadership and mentoring",
      ],
      description:
        "UX and Product Design for developer tools. Transforming complex technical workflows into intuitive, user-friendly interfaces through research-driven design and close cross-functional collaboration.",
      experience:
        "At Aiven I design complex, data-intensive developer products. My role spans from discovery to delivery, including research, benchmarking, workshops, wireframes to high-fidelity designs, and testing. For certain projects I act as a product lead, ensuring alignment across product and engineering. Mentoring and leading new junior designers is also part of my role.",
      year: "2021-now, Berlin, Aiven",
    },
    {
      id: "2",
      title: "Marketing and Brand Lead",
      image: "/images/PR_brand_lead_thumb.png",
      additionalImages: [
        "/images/PR_brand_card.png",
        "/images/PD-LKzwo-web.png",
        "/images/PD-brand_legalito.png",
        "/images/PR_brand_logo.png",
      ],
      tags: [
        "Branding",
        "Web Design",
        "Digital Marketing",
        "Organizational Effectiveness",
      ],
      description:
        "Developing comprehensive strategies, building brand identities, and creating digital experiences.",
      experience:
        "At LKzwo GmbH, I developed marketing strategies, oversaw content, built brand identities, and designed and developed corporate websites.",
      year: "2015-2020, Berlin, LKzwo",
    },
    {
      id: "3",
      title: "Demand Manager",
      image: "/images/PR_keks_uml_diagram.png",
      additionalImages: [
        "/images/PD-keks-func_specs_b.png",
        "/images/PR-Cornelsen_Func specs.png",
        "/images/PR_keks_uml_diagram.png",
        "/images/PD-learncoachies-screen.png",
      ],
      tags: ["Service Design", "Cross-department", "Education Tech", "Kanban"],
      description:
        "Service design and product ownership in education technology. Working cross-functionaly to develop innovative e-learning solutions through user-centered design and agile methodologies.",
      experience:
        "At Cornelsen Verlag, I developed e-learning tools, including evaluation and training systems. Worked cross-department using both Agile and Waterfall approaches. From persona creation to user testing. I led requirement analysis and created functional specifications/user stories.",
      year: "2012-2013, Berlin, Cornelsen",
    },
    {
      id: "4",
      title: "Senior Business Analyst",
      image: "/images/PD_worfklow.png",
      additionalImages: [
        "/images/PR-standards_process.png",
        "/images/PD-stadnard-req.png",
        "/images/PR-standards.png",
        "/images/PD_standards_hub-project.jpg",
      ],
      tags: [
        "Business analysis",
        "Business process mapping",
        "Stakeholder management",
        "Team leadership",
        "Service design",
      ],
      description:
        "Senior business analysis and service design. Leading a large-scale digital transformation project, stakeholder management, and process optimization for an organizational workflows.",
      experience:
        "At Standards Australia, I worked on the design of document workflow and knowledge management systems for internal teams and 8,000 external users. I ran stakeholder workshops, mapped and streamlined business processes, established requirements and functional specs, conducted on-site user testing and led the external development team through a two year-long development phase.",
      year: "2006-2008, Sydney, Standards Australia",
    },
    {
      id: "5",
      title: "Founder & Lead Designer",
      image: "/images/PR_fashion_thumb.png",
      additionalImages: [
        "/images/PR_honeyants_screenprinting.jpeg",
        "/images/PD_honeyants_e-com.png",
        "/images/PD_fasion_rack.jpg",
        "/images/PR-honeyants-magazine.png",
        "/images/PD_fashion_fabric.jpg",
      ],
      tags: [
        "Sustainable Fashion",
        "Entrepreneurship",
        "Product Design",
        "E-Commerce",
      ],
      description:
        "Entrepreneurship and sustainable fashion design. Co—founder and Designer of unique childrens clothes. From concept to market, combining creative design with ethical business practices and e-commerce innovation.",
      experience:
        "Founded Honeyants Pty Ltd, a sustainable children's fashion label. Designed garments, developed print graphics for screen printing, managed supply chains, created brand and marketing campaigns, and launched an e-commerce platform.",
      year: "2008-2010, Sydney Australia",
    },
    {
      id: "8",
      title: "Product Manager and Facilitator",
      image: "/images/PR_pm_thumb.png",
      additionalImages: [
        "/images/PR-PM_workshop.jpg",
        "/images/PR-aiven_workshop.jpg",
      ],
      tags: [
        "Facilitator",
        "Workshop led",
        "Stakeholder engager",
        "Presenter",
        "Product Manager",
      ],
      description:
        "Strategic communication and stakeholder engagement. Driving project success through transparent collaboration, workshop facilitation, and storytelling that aligns teams and delivers results.",
      experience:
        "I take ownership of my projects and actively engage stakeholders to ensure key goals and requirements aren't missed. Through needs and goals workshops, ideation workshops and regular updates, sharing progress, prototypes, and test results. I promote transparency and shared ownership, helping identify pain points, needs, risks, and constraints for greater project success.",
      year: "always",
      outcomes:
        "97% of projects I have been involved in have been successfully implemented.",
    },
    {
      id: "7",
      title: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      imageStyle: "h-48",
      additionalImages: [
        "/images/PR_iso_meeting.jpg",
        "/images/PR-pm-iso.png",
        "/images/PR_pm_plan.png",
      ],
      tags: [
        "Project Management",
        "Event Planning",
        "Stakeholder Communication",
        "Standards Development",
      ],
      description:
        "Project management and stakeholder coordination. Orchestrating multi-stakeholder initiatives, process improvement, and international collaboration in standards development.",
      experience:
        "At Standards Australia, I coordinated national and international meetings and ISO plenary sessions, introduced new improved business workflows, and facilitated standards committee collaborations for the establishment of internaional ISO standards, in the field of MPEG4, accessibility, user interfaces and e-learning.",
      year: "2004-2006, Sydney, Standards Australia",
    },
  ];

  const disciplineProjects = [
    {
      id: "1",
      title: "UX & Product Design in Tech",
      image: "/images/PD_UX_thumb.png",
      additionalImages: [
        "/images/PD_celtic_edit.png",
        "/images/PR_aiven_wireframes.png",
        "/images/PD_ux_journey_2.png",
        "/images/PR-aivenCRDR.png",
        "/images/PR_figma_prot.png",
      ],
      tags: [
        "UX design",
        "Product design",
        "Developer tools",
        "Cloud computing",
        "Figma",
        "Prototype",
        "Wireframe",
      ],
      description:
        "UX and Product Design for developer tools. Transforming complex technical workflows into intuitive, user-friendly interfaces through research-driven design and close cross-functional collaboration.",
      modalContent: {
        overview:
          "This project showcases my approach to UX and Product Design through work on developer tooling platforms. The projects involved complex user journeys, technical data flows, and the challenge of delivering intuitive designs to technical audiences.",
        process:
          "I led discovery, journey mapping, and benchmarking, utilising both qualitative and quantitative UX research, designed wireframes, prototypes, and high-fidelity designs, and coordinated user testing. Collaborated closely with customers, engineers and product managers throughout the lifecycle.",
        outcomes:
          "Successfully delivered and implemented user-friendly interfaces to complex technical features, reducing user onboarding time and increasing stakeholder alignment.",
        year: "2023-2025, Berlin, Aiven",
      },
    },
    {
      id: "2",
      title: "Branding & Visual Design",
      image: "/images/PD_branding_thumb.png",
      additionalImages: [
        "/images/web-2015-Lead.gif",
        "/images/8cl_werbung2.jpg",
        "/images/logos.png",
        "/images/web-2004-gekolia.gif",
        "/images/PD_brand_logos.png",
        "/images/lkzwo karten.jpg",
      ],
      tags: [
        "Branding",
        "Graphic Design",
        "Logo Design",
        "Web design",
        "Freelance",
      ],
      description:
        "Extensive experience in graphic design and branding across diverse industries, delivering visual identities and marketing assets that enhance brand presence and credibility.",
      modalContent: {
        overview:
          "Both freelance work and as an employed Graphic Designer. Over the years I've been involved in developing visual identities, marketing assets, and corporate branding for a variety of industries, such as scientific products, tech startups, food, event management and more.",
        process:
          "Delivered full-scale branding from concept to execution, from business cards to full-scale Websites. Created logos, UI elements, animations, product manuals, and designed print-ready collateral and exhibition materials.",
        outcomes:
          "Elevated the brand presence for niche companies and strengthened their credibility.",
        year: "2000-2024",
      },
    },
    {
      id: "3",
      title: "Workflow System Design",
      image: "/images/PD_worfklow.png",
      additionalImages: [
        "/images/PR-standards_process.png",
        "/images/PR-stadnard-leading.png",
        "/images/PD-stadnardhub.png",
        "/images/PD-stadnards-flow.png",
      ],
      tags: [
        "Project lead",
        "Service design",
        "Process improvement",
        "Change management",
      ],
      description:
        "Led the design and delivery of a web-based workflow system for Standards Australia, streamlining collaboration and modernizing the development of national and international standards.",
      modalContent: {
        overview:
          "This 2 year long project involved designing and delivering a web-based document and workflow management system for Standards Australia. The goal was to modernize the way national and international standards were established and agreed upon.",
        process:
          "From requirement gathering, gap analysis, stakeholder workshops to development, validation planning, and user testing and production. I led external development team through the product life cycle. In addition I authored user training material and conducted onboarding sessions.",
        outcomes:
          "From fax and email based processes to a truly online based solution, the final system improved collaboration across 8,000 committee members and internal staff, reducing process friction and enabling more efficient standards development. It laid the foundation for future digital transformation within the organization.",
        year: "2007-2009, Sydney - Standards Australia",
      },
    },
    {
      id: "4",
      title: "Sustainable Fashion Design",
      image: "/images/PD_honeyants_thumb.jpg",
      additionalImages: [
        "/images/PD_fashion_clothes.jpg",
        "/images/PD_fashion_photos.png",
        "/images/PD_fasion_rack.jpg",
        "/images/PR_fashion_store.png",
        "/images/PD_fashion_pants.jpg",
      ],
      tags: [
        "Fashion design",
        "Sustainable design",
        "E-commerce",
        "Entrepreneurship",
      ],
      description:
        "Co-founded a sustainable children's clothing brand, overseeing everything from concept to e-commerce—combining ethical production with original design to build a distinct market presence.",
      modalContent: {
        overview:
          "Co-founded a boutique sustainable children's clothing brand in 2008. From ideation to e-commerce launch.",
        process:
          "Designed garments, developed print graphics for screen printing, sourced ethical suppliers and manufactures to produce garments made with certified organic cotton and eco-friendly dyes. Designed brand, created marketing material and set-up the online shop.",
        outcomes:
          "Gained media coverage for sustainability efforts and unique designs.",
        year: "2008, Syndey Australia",
      },
    },
    {
      id: "5",
      title: "EdTech UX Design",
      image: "/images/PD-edutech_thumb.png",
      additionalImages: [
        "/images/PD-learncoachies-flow.png",
        "/images/PD-learncoachies_book.png",
        "/images/PD-learncoachies-screen.png",
        "/images/PD_learncoachies_func_specs.png",
      ],
      tags: [
        "EdTech",
        "UX Design",
        "Curriculum Integration",
        "Agile Development",
        "Design Manager",
      ],
      description:
        "An e-learning solution developed to complement Cornelsen's textbooks, offering interactive digital learning paths aligned with classroom curricula and enhancing both student engagement and teaching support.",
      modalContent: {
        overview:
          "This project focused on designing e-learning solutions tightly integrated with Cornelsen's textbook offerings to provide digital learning paths aligned with classroom curricula.",
        process:
          "Managed cross-departmental projects, collaborating with stakeholders from diverse educational disciplines to define unified functional specifications. Partnered with graphic designers, software engineers, and Product Owners to ensure design consistency across all fields.",
        outcomes:
          "The online solution provided an alternative to the CD-ROMs bundled with textbooks, allowing students to enhance their skills through interactive e-learning modules aligned with their school books. This increased student engagement and gave teachers digital content to support their lesson plans. Launched in 2012, it marked Cornelsen's first step toward digital learning.",
        year: "2012, Berlin - Cornelsen",
      },
    },
    {
      id: "9",
      title: "AI Product Design",
      image: "/images/PD_ai_thumb.png",
      additionalImages: [
        "/images/PD_celtic_edit.png",
        "/images/PD_celtic-resources.png",
        "/images/PD_crabline.png",
        "/images/PD_kapa.png",
        "/images/PD_ai_app.png",
      ],
      tags: ["AI creative tools", "App deployment design", "Context Design"],
      description: "New learnings in ever-evolving field of AI.",
      modalContent: {
        overview:
          "For more than two years I have been focusing on learning about new developments within Generative AI. In my current role, I have been involved in several AI realted project, currently working on an internal AI app solution for our Support team.",
        process:
          "No matter how powerful an AI tool may be, successful outcomes still rely on the fundamentals of product design, planning, scope, user insights, functional specifications, and the right look and feel. While AI makes it possible to create quickly, it still requires proper context, guidance, and detailed requirements for the outcomes to be successful.",
        outcomes:
          "As in any field it's an ongoing learning journey. I am looking at understaning overall application development and deployment, system prompting, UI design for AI tools and more. This portfolio is an ever evolving product using tools such as TempoLabs, Leonardo.ai, and ChatGPT and GitHub.",
        year: "First deployment Aug 2025- ongoing development.",
      },
    },
    {
      id: "6",
      title: "EdTech Evaluation Tool Design",
      image: "/images/PD_keks_thumb.png",
      additionalImages: [
        "/images/PD-Keks-portal.png",
        "/images/PD-Keks-student view.png",
        "/images/PD-Keks-results.png",
      ],
      tags: [
        "UX design",
        "Evaluation tools",
        "Education",
        "Data visualization",
      ],
      description:
        "A digital evaluation tool designed to help teachers assess student skills more efficiently, turning paper-based assessments into actionable, online insights.",
      modalContent: {
        overview:
          "This project involved the design of a digital evaluation tool enabling teachers to assess students' skills in key curriculum topics. The goal was to simplify skill-based assessments and generate actionable insights.",
        process:
          "Conducted needs analysis workshops with educators, mapped evaluation flows, and designed a scoring system. Delivered wireframes and prototypes and ran on-site usability testing sessions with teachers.",
        outcomes:
          "From paper-based testing and analysis to an online scoring tool for e-learning platforms.",
        year: "2013, Berlin - Cornelsen",
      },
    },
    {
      id: "7",
      title: "Industrial Design",
      image: "/images/PD_industrial design.jpg",
      additionalImages: [
        "/images/PD_industrial_reeko.jpg",
        "/images/PD_industrial_D.png",
        "/images/PD_industrial_C.png",
        "/images/PD_industrial_B.png",
        "/images/PD_industrial_A.png",
        "/images/PD_industrial_2.jpg",
      ],
      tags: ["Industrial design", "Sustainable design", "Industrial", "Product design"],
      description:
        "This project explores the design of sustainable recycling bins for public spaces, with a focus on combining functionality, cost-efficiency, and visual appeal. Inspired by natural forms, the result is a modular solution that balances smart design with environmental responsibility.",
      modalContent: {
        overview:
          "My thesis project in 1999 involved creating sustainable recycling bins for public spaces. The wood production company's requirements was to design a sustainable and cost-efficient product. From a design perspective the aim was to design a smart, usable and visually appealing product.",
        process:
          "With inspiration from nature and beehives, we settled on the hexagon shape, which uses the least amount of material but maximum stability. Its shape also allows for different setups and has a unique and beautiful style compared to most bins.",
        outcomes:
          "Even if this was only a thesis project, it caught ground. 25 years later similar recycling bins, from different producers, can still be seen throughout public spaces in Sweden. These photos were recently taken from a shopping center and Landvetter airport.",
        year: "1999, Stockholm Sweden",
      },
    },
    {
      id: "8",
      title: "Art & Photography",
      image: "/images/PD_arts_tumb.jpg",
      additionalImages: [
        "/images/PD_art_1.jpg",
        "/images/PD_art_2.jpg",
        "/images/PD_art_3.jpg",
        "/images/PD_art_4.jpg",
        "/images/PD_art_6.jpg",
        "/images/PD_art_7.jpg",
        "/images/PD_frames.jpg",
      ],
      tags: ["Drawing", "Acryl painting", "Photography"],
      description: "Showcase of some of my more artistic side.",
      modalContent: {
        overview:
          "Throughout my life I've' been drawing, painting, photographing, creating videos, crafting and more. Starting with the sun made in Kindergarten. Here are some sample works, created from the age of age 11.",
        process: "creative flow, paitience, trust, failure and trying again",
        outcomes: "some great and some not so great work",
        year: "1980 to now",
      },
    },
  ];

  return (
    <div className="min-h-screen relative bg-black">
      {/* Animated Floral Background */}
      <AnimatedFloralBackground
        animationSpeed={animationSpeed / 100}
        movementIntensity={movementIntensity / 100}
        className="fixed inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        {/* Navigation */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-end items-center">
            {/* Main Navigation */}
            <ul className="flex space-x-6 h-[30px]">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-200 hover:text-primary transition-colors font-satoshi"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/roles")}
                  className="text-gray-200 hover:text-primary transition-colors font-satoshi"
                >
                  Roles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/discipline")}
                  className="text-gray-200 hover:text-primary transition-colors font-satoshi"
                >
                  Discipline
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about-me")}
                  className="text-gray-200 hover:text-primary transition-colors font-satoshi"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/archive")}
                  className="text-gray-200 hover:text-primary transition-colors font-satoshi"
                >
                  Archive
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <Suspense fallback={<p className="text-gray-200 p-4">Loading...</p>}>
          <>
            <Routes>
              {/* Home Page */}
              <Route 
                path="/" 
                element={
                  <Home 
                    animationSpeed={animationSpeed}
                    movementIntensity={movementIntensity}
                    onSpeedChange={setAnimationSpeed}
                    onIntensityChange={setMovementIntensity}
                  />
                } 
              />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/archive" element={<Archive />} />
              <Route
                path="/roles"
                element={
                  <div className="container mx-auto px-4 pb-20">
                    <PortfolioGrid
                      projects={experienceProjects}
                      title="Browse by Role"
                      description=""
                      type="experience"
                    />
                  </div>
                }
              />
              <Route
                path="/discipline"
                element={
                  <div className="container mx-auto px-4 pb-20">
                    <PortfolioGrid
                      projects={disciplineProjects}
                      title="Browse by Discipline"
                      description=""
                      type="discipline"
                    />
                  </div>
                }
              />
            </Routes>
          </>
        </Suspense>

        {/* Footer - Hidden on home page */}
        {location.pathname !== "/" && (
          <footer className="py-6">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-400 text-xs mt-3">
                © 2025 Irene Hagström Portfolio. All rights reserved.
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <a
                  href="mailto:irene.hagstrom@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors text-xs font-satoshi flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/irene-hagström"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-xs font-satoshi flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn profile
                </a>
                <a
                  href="/Irene_Hagstrom_Profile.pdf"
                  download="Irene_Hagstrom_Profile.pdf"
                  className="text-gray-400 hover:text-primary transition-colors text-xs font-satoshi flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Download Resume
                </a>
              </div>
            </div>
          </footer>
        )}

      </div>

      {/* Floating Chatbot - Hidden on home page */}
      {location.pathname !== "/" && <FloatingChatbot />}
    </div>
  );
}

export default App;