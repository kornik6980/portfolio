"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({ src: "../fonts/Migra.otf" });

type Props = {};

function Header({}: Props) {
	return (
		<header className="sticky top-0 z-50 w-full h-fit">
			<div className="absolute left-0 right-0 backdrop-blur-sm">
				<motion.div
					className="p-5 mx-5 flex z-20 items-end justify-between border-b border-solid border-white"
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="flex flex-col items-left gap-3 md:flex-row">
						<h1 className={myFont.className}>Cezary Nartowski</h1>
						<p className="hidden sm:inline-flex text-sm font-semibold text-amber-100">
							UX/UI & WEB DEVELOPER
						</p>
					</div>
					<div className="flex flex-row items-center gap-1 text-sm ml-3">
						<div className="relative">
							<Link href="#info">
								<AnimatedLink title={"informacje,"} />
							</Link>
						</div>
						<div className="relative">
							<Link href="#skills">
								<AnimatedLink title={"umiejętności,"} />
							</Link>
						</div>
						<div className="relative">
							<Link href="#projects">
								<AnimatedLink title={"projekty"} />
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</header>
	);
}

export default Header;
