"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongodb</li>
        <li>Django</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Associate degree in Software Engineering, ALX</li>
        <li>Associate degree in Rest API with Flask and Python, Udemy</li>
        <li>Associate degree in SQL-MYSQL for Data Analystics and Business Intelligence, Udemy</li>
        <li>Associate degree in Bash Shell Mastering, Udemy</li>
        <li>Postgraduate in Business Administration, University of Abuja</li>
        <li>Postgraduate in Investigative Journalism, IIJ</li>
        <li>Bachelor of Applied Science in Industry Chemistry, University of Benin</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Artificial Intelligence Essential Course</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py- px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
        src="/me3.jpg"
        alt="aboutme"
        width={500} 
        height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Having made the leap from journalism to tech, I have garnered invaluable 
          hands-on experience in developing and maintaining robust web applications. 
          Leveraging cutting-edge technologies, I strive to push the boundaries of innovation, 
          creating impactful solutions that drive business success.

          Proficient in both frontend and backend development, I specialize in crafting seamless
          user experiences using, Next.js, TypeScript, Django and Flask, while ensuring robust 
          backend functionality.

          I utilize emerging technologies to enhance application functionality, whether it is
           integrating OpenAI technologies or optimizing databases, I am dedicated to finding 
           creative solutions to complex problems.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;