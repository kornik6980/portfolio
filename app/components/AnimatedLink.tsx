"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {
	title: string;
};

export default function AnimatedLink({ title }: Props) {
	const [isHovered, setIsHovered] = React.useState(false);
	return (
		<motion.div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative overflow-hidden cursor-pointer">
			<AnimatedWord
				title={title}
				animation={letterAnimation}
				isHovered={isHovered}
			/>
			<div className="absolute top-0">
				<AnimatedWord
					title={title}
					animation={letterAnimationTwo}
					isHovered={isHovered}
				/>
			</div>
		</motion.div>
	);
}

const titleAnimation = {
	rest: {
		transition: {
			staggerChildren: 0.003,
		},
	},
	hover: {
		transition: {
			staggerChildren: 0.003,
		},
	},
};

const letterAnimation = {
	rest: {
		y: 0,
	},
	hover: {
		y: -25,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

const letterAnimationTwo = {
	rest: {
		y: 25,
	},
	hover: {
		y: 0,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

const AnimatedWord = ({
	title,
	animation,
	isHovered,
}: {
	title: string;
	animation: Variants;
	isHovered: boolean;
}) => {
	return (
		<motion.span
			variants={titleAnimation}
			initial="rest"
			animate={isHovered ? "hover" : "rest"}
			className="whitespace-nowrap relative">
			{title.split("").map((character: string, i) =>
				character === " " ? (
					<span key={i}>&nbsp;</span>
				) : (
					<motion.span
						variants={animation}
						className="relative inline-block whitespace-nowrap"
						key={i}>
						{character}
					</motion.span>
				)
			)}
		</motion.span>
	);
};
