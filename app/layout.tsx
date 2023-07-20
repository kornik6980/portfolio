import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Cezary Nartowski 🤙",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`bg-[rgb(36,36,36)] text-white scroll-smooth ${inter.className}`}>
				{children}
			</body>
		</html>
	);
}
