import React from 'react'
import Image from 'next/image'

const skills =[
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "Python"},
    {skill: "Java"},
    {skill: "C++"},
    {skill: "C##"},
    {skill: "Flutter"},
    {skill: "MongoDB"},
    {skill: "MySQL"},
    {skill: "PHP"}
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col md:flex-row space-y-10 justify-center align-top items-stretch md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
                    <p>
                        {" "}
                        Hi my name is Carl and I am{" "}
                        <span className="font-bold">{"eager to learn"}</span>,
                        <span className="font-bold">{" adaptable"}</span>, and
                        <span className="font-bold">{" fast-learner"}</span> student.
                    </p>
                    <br/>
                    <p>
                        In my free time, I enjoy playing video games, watching movies, and playing basketball, 
                        as they help me relax and stay active. At the same time, I have an interest in programming, 
                        and even though I am still a beginner, I am open to learning new things and improving my skills.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left"
                    >My Skills</h1>
                    <div className="flex flex-wrap flex-row justify-center md:justify-start">
                        {skills.map((item, idx)=>{
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection