"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { slideInFromLeft } from "@/lib/motion";
import { EXPERIENCE } from "@/constants";
import Link from "next/link";
const Experience = () => {
  return (
    <>
      <motion.div variants={slideInFromLeft(0.5)} className="text-white flex flex-col items-center" id="work">
        <h1 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Work Experience
        </h1>
      </motion.div>
      <div className="flex flex-col">
        <VerticalTimeline>
          {EXPERIENCE.map((experience) => {
            return (
              <VerticalTimelineElement
                contentStyle={{ background: "#1d1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #232631" }}
                date={experience.date}
                icon={
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                }
                iconStyle={{
                  backgroundColor: experience.iconBg,
                  display: "grid",
                  placeItems: "center",
                }}
                visible
              >
                <div>
                  <h3 className="text-white text-2xl max-xs:text-center">
                    {experience.title}
                  </h3>
                  <Link
                    key={experience.title}
                    href="https://www.cognizant.com/"
                    className="text-gray-400 text-md max-xs:text-center mt-1 underline"
                  >
                    {experience.company_name}
                  </Link>
                  <ul className="m-4 text-gray-300">
                    {experience.points.map((point) => {
                      return <li className="list-disc m-1">{point}</li>;
                    })}
                  </ul>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
