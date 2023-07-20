import React from "react";
import localFont from "next/font/local";

const myFont = localFont({ src: "../fonts/Migra.otf" });

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="w-full flex flex-row items-start justify-between px-7 pt-7 my-7 text-[rgb(75,75,75)] border-t border-[rgb(75,75,75)]">
			<div className="text-lg">
				<h1 className={myFont.className}>Cezary Nartowski</h1>
			</div>
			<div className="flex flex-col items-end underline">
				<p>czarek.nartowski@gmail.com</p>
				<p>+48 731 888 928</p>
			</div>
		</div>
	);
};

export default Footer;
