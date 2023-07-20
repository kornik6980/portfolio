"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";

const tusker = localFont({ src: "../fonts/Tusker.otf" });

const skills = [
	{ title: "html", icon: "/icons/html.png" },
	{ title: "css", icon: "/icons/css.png" },
	{ title: "javascript", icon: "/icons/javascript.png" },
	{ title: "typescript", icon: "/icons/typescript.png" },
	{ title: "react", icon: "/icons/react.png" },
	{ title: "redux", icon: "/icons/redux.png" },
	{ title: "tailwind", icon: "/icons/tailwind.png" },
	{ title: "node.js", icon: "/icons/node.png" },
	{ title: "mongodb", icon: "/icons/mongodb.png" },
	{ title: "npm", icon: "/icons/npm.png" },
	{ title: "git", icon: "/icons/git.png" },
	{ title: "next.js", icon: "/icons/next.png" },
	{ title: "three.js", icon: "/icons/three.png" },
	{ title: "motion", icon: "/icons/framermotion.png" },
];

type Props = {};

function Skills({}: Props) {
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const rotateStar = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div
			ref={targetRef}
			className="h-fit mx-7 items-center justify-center flex flex-col pt-40">
			<div className="flex flex-col gap-10">
				<motion.div
					initial={{ opacity: 0, rotate: -10, y: 150 }}
					whileInView={{ opacity: 1, rotate: 0, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					viewport={{ once: true }}
					className="flex flex-row items-center gap-3 justify-center">
					<h1 className={`uppercase text-6xl ${tusker.className}`}>
						Moje <span className="text-amber-100 text-7xl">umiejętoności</span>
					</h1>
					<motion.img
						style={{ rotate: rotateStar }}
						src="/star.png"
						alt=""
						className="w-12 h-12 object-cover"
					/>
				</motion.div>
				<div className="flex flex-row flex-wrap justify-center gap-10">
					{skills.map((skill) => (
						<motion.div
							key={skill.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true }}
							className="flex flex-col justify-center items-center gap-3 uppercase font-semibold md:text-2xl tracking-widest">
							<h1>{skill.title}</h1>
							<img src={skill.icon} alt="" className="h-24" />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;
