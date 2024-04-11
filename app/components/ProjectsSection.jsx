"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "EkpetiUghe",
    description: "In my language, Television is referred to as EkpetiUghe. Reflecting on the disruption in the movie industry, I remember the once-popular movie rental business which was taken over by online streaming platforms such as Netflix, in creating my streaming platform. It was built using Nextjs, TailwindCSS and Supabase for storage.",
    image: "/ekpetiughe4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sylvan452/ekpeti_ughe",
    previewUrl: "https://ekpeti-ughe.vercel.app/home",

  },
  {
    id: 2,
    title: "Ifoto",
    description: "In my language, images and pictures are called Ifoto. Leveraging the power of Artificial Intelligence (AI) and using cutting-edge technologies such as Next js, TailwindCSS, Dall-E, ChatGPT (OpenAI) and Microsoft Azure, I built a powerful AI image generator called Ifoto. Ifoto listens to descriptive prompts to paint images in a few seconds.",
    image: "/ifoto.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sylvan452/ifoto",
    previewUrl: "https://ifoto-psi.vercel.app/",
  },
  {
    id: 3,
    title: "My ChatGPT",
    description: "Inspired by  GhatGpt, Germini and Bard and using latest technologies I build my own MyChatGpt, a powerful Artificial Intelligence tool connected to the OpenAi API in real-time.  With MyChatGpt, you can quickly and accurately fix common mistakes in resumes, generate content, edit and rewrite articles, and perform many other essential tasks.",
    image: "/mychatgpt.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sylvan452/my_chat_gpt",
    previewUrl: "https://my-chat-gpt-or4y.vercel.app/",
    "previewUrlTarget": "_blank",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;