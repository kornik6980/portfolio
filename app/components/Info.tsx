"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StatueCanvas from "./canvas/StatueCanvas";
import localFont from "next/font/local";

const tusker = localFont({ src: "../fonts/Tusker.otf" });

type Props = {};

function Info({}: Props) {
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const rotateStar = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div
			ref={targetRef}
			className="relative h-screen mx-7 items-center justify-between gap-14 lg:gap-5 flex flex-col lg:flex-row pt-20">
			<div className="flex flex-col gap-5 md:pl-20 max-w-2xl">
				<motion.div
					initial={{ opacity: 0, rotate: 10, y: 150 }}
					whileInView={{ opacity: 1, rotate: 0, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					viewport={{ once: true }}
					className="flex flex-row items-center gap-3">
					<motion.img
						style={{ rotate: rotateStar }}
						src="/star.png"
						alt=""
						className="w-12 h-12"
					/>
					<h1 className={`uppercase text-6xl ${tusker.className}`}>
						cześć, jestem{" "}
						<span className="text-amber-100 text-7xl">Cezary</span>
					</h1>
				</motion.div>
				<motion.p
					initial={{ opacity: 0, rotate: 10, y: 150 }}
					whileInView={{ opacity: 1, rotate: 0, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
					className="indent-28 uppercase font-semibold lg:text-2xl tracking-widest">
					Używając moich pasji i umiejętności, zajmuję się tworzeniem stron
					internetowych od implementacji wszystkich funcjonalności, aż po
					tworzenie UI. Praca nad projekatmi daje mi dużo satysfakcji i
					spełnienia. Szukam możliwości dalszego rozwoju swoich umiejętności.
					Kiedy nie jestem przyklejony do komputera lubię aktywnie spędzać czas,
					gotować albo czytać o filozofii i psychologii.
				</motion.p>
			</div>
			<StatueCanvas />
		</div>
	);
}

export default Info;
