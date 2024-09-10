"use client";
import Link from "next/link";
import Image from "next/image";
import TextHover from "./text-hover";
import { motion } from "framer-motion";
import { navVariants } from "@/motion";
import { blackCircle, logo } from "@/public";

export default function Navbar() {
	return (
		<>
			<motion.nav
				className="w-full py-3 padding-x fixed top-0 left-0 z-50 backdrop-blur-[5px] flex items-center justify-between"
				initial="hidden"
				whileInView="vissible"
				variants={navVariants}>
				<div className="w-[50%]">
					<Link href="/">
						<Image
							src={logo}
							alt="supadupa logo"
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<div className="flex gap-x-[20px]">
					<button className="text-[17px] font-semibold uppercase text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-6 py-3">
						nl
					</button>

					<button className="flex gap-2 items-center text-[17px] font-semibold capitalize text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-4 py-3">
						<Image
							src={blackCircle}
							alt="blackCircle"
							width={20}
							height={20}
						/>
						<TextHover
							titile1="Menu"
							titile2="Menu"
						/>
					</button>
				</div>
			</motion.nav>
		</>
	);
}
