import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFigma } from "react-icons/fa"
import { BsGithub, BsArrowRight } from 'react-icons/bs'
import SlideUp from './SlideUp'


const projects = [
    {
        name: "Inventory Management System",
        description: "An Inventory Management System developed using Python and Django as a web-based application to manage and track product inventory efficiently. It allows users to add, update, and delete items while monitoring stock levels through a simple and user-friendly interface.",
        video: "https://drive.google.com/file/d/1p4h8FmRZQC40PU5UV5BMv1kOpQzi6Vex/view?usp=sharing",
        github: "https://github.com/carl-rivero13/Inventory-Management-System",
    },
    {
        name: "Bayani Rise of Heroes",
        description: "Bayani: Rise of Heroes is a 2D game developed using Unity and C# for mobile and desktop platforms. Players control Dr. Jose Rizal as they dodge enemies, focusing on fast-paced gameplay and reflex-based movement inspired by Filipino history.",
        video: "https://drive.google.com/file/d/1PDe0KinzgLui1ZjVAue57xVZx2JGL6Ud/view?usp=sharing",
        github: "https://github.com/carl-rivero13/Bayani-Rise-of-Heroes",
    },
    {
        name: "3MigsBarong E-Commerce",
        description: "3 Migs Barong is an e-commerce web application developed using PHP and Laravel for selling traditional Barong clothing online. It allows users to browse products, add items to their cart, and make purchases through a simple and user-friendly interface.",
        video: "https://drive.google.com/file/d/1KbuPE5w21b3PzGzt7Gf5XaH1zAnPNUk1/view?usp=sharing",
        github: "https://github.com/carl-rivero13/3MigsBarong",
    },
    {
        name: "Alert U: Disaster Risk and Incident Reporting System",
        description: "(UNDER DEVELOPMENT) ALERT U is a disaster risk and incident reporting system built with Flutter and Firebase for mobile and web that enables real-time reporting and monitoring of emergencies to improve communication and safety.",
        video: "https://drive.google.com/file/d/1xyM7qa_DW3F1y85FzsBhAuA1eNl_Kh_o/view?usp=sharing",
        github: "https://www.figma.com/proto/142x57WT9Jc8SAOkdndQ4B/Mobile-Based-AlertU?node-id=2853-2646&p=f&t=wvRK7Tpg2AUhxW3y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2297%3A497",
    },
]
const ProjectsSection = () => {
  return (
    <section id="projects">
       <h1 className="text-center font-bold text-4xl">
        Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project,idx)=>{
                    return <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                        <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                            <div className="mt-8 md:w-1/2">
                            
{project.video.includes("drive.google.com") ? (
  <iframe
    className="w-full h-[300px] md:h-[400px] rounded-xl shadow-xl"
    src={project.video.replace("/view?usp=sharing", "/preview")}
    allow="autoplay"
  ></iframe>
) : (
  <video
    controls
    src={project.video}
    className="w-full rounded-xl shadow-xl hover:opacity-70"
  ></video>
)}

                            </div>
                            <div className="mt-12 md:w-1/2">
                              <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                              <p className="text-xl leading-7 mb-4">{project.description}</p>
                              <div className="flex flex-row align-bottom space-x-4">
                                <Link href={project.github} target="_blank">
                                
{project.name.includes("Alert U") ? (
      <FaFigma
        size={30}
        className="hover:-translate-y-1 transition-transform cursor-pointer"
      />
    ) : (
      <BsGithub
        size={30}
        className="hover:-translate-y-1 transition-transform cursor-pointer"
      />
    )}

                              </Link>
                              </div>

                            </div>
                        </div>
                       </SlideUp>
                    </div>
                
                })}
            </div>
        </section>
  )
}

export default ProjectsSection