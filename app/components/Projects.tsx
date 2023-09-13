"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project from "./Project";
import localFont from "next/font/local";

const tusker = localFont({ src: "../fonts/Tusker.otf" });

type Props = {};

const Projects = (props: Props) => {
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const rotateStar = useTransform(scrollYProgress, [0, 1], [0, 720]);

	const projects = [
		{
			title: "Spotify Clone",
			imageSrc: "./spotify.webp",
			github: "https://github.com/kornik6980/spotify",
			demo: "https://spotify-clone-zeta-rose.vercel.app",
		},
		{
			title: "NotiHub",
			imageSrc: "./notihub.webp",
			github: "https://github.com/kornik6980/notihub",
			demo: "https://notihub.vercel.app",
		},
		{
			title: "Więcej",
			imageSrc: "./dos.webp",
			github: "https://github.com/kornik6980?tab=repositories",
		},
	];

	return (
		<div
			ref={targetRef}
			className="relative flex items-start justify-center flex-col max-w-full pt-60 pb-20 z-0 gap-10 mx-10"
		>
			<motion.div
				initial={{ opacity: 0, rotate: 10, y: 150 }}
				whileInView={{ opacity: 1, rotate: 0, y: 0 }}
				transition={{ duration: 0.3, delay: 0.2 }}
				viewport={{ once: true }}
				className="flex flex-row items-center gap-3"
			>
				<motion.img
					style={{ rotate: rotateStar }}
					src="/star.png"
					alt=""
					className="w-12 h-12"
				/>
				<h1 className={`uppercase text-6xl ${tusker.className}`}>
					wybrane <span className="text-amber-100 text-7xl">Projekty</span>
				</h1>
			</motion.div>
			<div className="flex flex-col justify-center items-center w-full">
				<div className="w-full border-t border-amber-100" />
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
