import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface Props {
	title: string;
	imageSrc: string;
	github?: string;
	demo?: string;
}

const imageVariants: Variants = {
	hover: {
		scale: 1.2,
		clipPath: "inset(0% 0 0 0)",
		transition: { duration: 0.7, type: "tween", ease: "easeOut" },
	},
	rest: {
		scale: 1,
		clipPath: "inset(100% 0 0 0)",
		transition: { duration: 0.7, type: "tween", ease: "easeIn" },
	},
};

const arrowVariants: Variants = {
	hover: {
		rotate: 180,
		transition: { duration: 0.7, type: "tween", ease: "easeOut" },
	},
};

const titleVariants: Variants = {
	hover: {
		color: "rgb(254 243 199)",
		transition: { duration: 0.5, type: "tween", ease: "easeOut", delay: 0.2 },
	},
};

const Project: React.FC<Props> = ({ title, imageSrc, github, demo }) => {
	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			className="relative flex flex-col uppercase pl-3 md:p-5 md:items-center md:grid md:grid-cols-2 w-full h-36 border-b border-amber-100 z-10 overflow-hidden">
			<motion.img
				variants={imageVariants}
				src={imageSrc}
				alt=""
				className="absolute top-0 left-0 w-full h-36 object-cover -z-10 saturate-0"
			/>
			<motion.div
				variants={arrowVariants}
				className="absolute top-6 right-1 md:right-5 text-lg">
				↗
			</motion.div>
			<motion.div
				variants={titleVariants}
				className="pt-6 pb-2 md:pt-0 md:pb-0 font-bold text-lg tracking-wider md:text-2xl">
				{title}
			</motion.div>
			<div className="flex flex-row flex-wrap gap-3 pr-4">
				{github && (
					<Link href={`${github}`} target="_blank">
						<motion.div
							initial={{
								background: "rgb(36,36,36)",
								color: "#fff",
							}}
							whileHover={{
								background: "rgb(254 243 199)",
								color: "#000",
							}}
							className="text-xs px-4 py-2 rounded-[100px] border w-fit uppercase bg-[rgb(36,36,36)] tracking-wider cursor-pointer">
							<p>Github</p>
						</motion.div>
					</Link>
				)}
				{demo && (
					<Link href={`${demo}`} target="_blank">
						<motion.div
							initial={{
								background: "rgb(36,36,36)",
								color: "#fff",
							}}
							whileHover={{
								background: "rgb(254 243 199)",
								color: "#000",
							}}
							className="text-xs px-4 py-2 rounded-[100px] border w-fit uppercase bg-[rgb(36,36,36)] tracking-wider cursor-pointer">
							<p>Demo</p>
						</motion.div>
					</Link>
				)}
			</div>
		</motion.div>
	);
};

export default Project;
