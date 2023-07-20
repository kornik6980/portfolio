"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";

const tusker = localFont({ src: "../fonts/Tusker.otf" });

type Props = {};

export default function Hero({}: Props) {
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const rotateStar = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div className="relative">
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				style={{ rotate: rotateStar }}
				src="/star.png"
				alt=""
				className="absolute top-28 right-10 w-12 h-12"
			/>
			<motion.div
				initial={{
					clipPath: "polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)",
				}}
				animate={{
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				}}
				transition={{
					type: "tween",
					duration: 1,
					delay: 1,
				}}
				style={{ opacity }}
				className="fixed -z-10 top-0 w-full h-[110vh]">
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					src="/dos.webp"
					alt="Image"
					className="w-full h-full object-cover object-center"
				/>
			</motion.div>
			<motion.div ref={targetRef} className="h-screen mx-7 flex">
				<div className="w-full flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-end xl:mb-20 mt-16 sm:mt-0">
					<motion.div style={{ rotate }} className={tusker.className}>
						<motion.div
							initial={{ opacity: 0, y: 150, rotate: 10 }}
							animate={{ opacity: 1, y: 0, rotate: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<h1 className="text-8xl sm:text-[15vw] text-amber-100">
								FULL STACK{" "}
							</h1>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 150, rotate: 10 }}
							animate={{ opacity: 1, y: 0, rotate: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<h1 className="text-8xl sm:text-[15vw] text-amber-100">
								WEB DEVELOPER
							</h1>
						</motion.div>
					</motion.div>
					<div className="flex flex-col items-end justify-center uppercase max-w-screen-sm mt-10">
						<motion.p
							initial={{ opacity: 0, y: 250, rotate: -10 }}
							animate={{ opacity: 1, y: 0, rotate: 0 }}
							transition={{ duration: 0.5, delay: 2 }}
							className="text-left font-semibold md:text-2xl tracking-widest md:ml-20 max-w-xl xl:text-right indent-10">
							Jestem full stack developerem. Posiadam umiejętoności w obszarze
							tworzenia atrakcyjnych wizualnie oraz przyjaznych dla użytkownika
							stron internetowych. Kocham pizzę i filozofię.
						</motion.p>
						<Link href="#info">
							<motion.button
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.8, type: "tween" }}
								className="border p-4 rounded-[100px] mt-4 font-semibold uppercase overflow-hidden">
								<AnimatedLink title="ZOBACZ WIĘCEJ" />
							</motion.button>
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
