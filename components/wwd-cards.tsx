"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Tcardsprops } from "@/types";
import { useTransform, motion, useScroll } from "framer-motion";

export default function Card({
	i,
	title,
	para,
	heading1,
	heading2,
	src,
	href,
	bgColor,
	textColor,
	linkColor,
	progress,
	range,
}: Tcardsprops) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

	return (
		<div
			ref={container}
			className="h-auto flex items-center justify-center sticky top-40 w-full">
			<motion.div
				style={{
					backgroundColor: bgColor,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className="w-full p-20 flex justify-between rounded-[30px] gap-10 relative -top-[45%] h-[800px] transform origin-top">
				<div className="w-1/2 h-full flex flex-col gap-14 pt-10">
					<div className="flex flex-col gap-2">
						<h4
							className="text-[24px] leading-tight tracking-tighter"
							style={{ color: textColor }}>
							{title}
						</h4>
						<h2
							className="text-[80px] font-bold leading-[80px] tracking-tighter"
							style={{ color: textColor }}>
							{heading1}
							<br />
							{heading2}
						</h2>
						<h4
							className="text-[20px] leading-normal tracking-tighter"
							style={{ color: textColor }}>
							{para}
						</h4>
					</div>
					<div className="w-fit flex flex-col gap-2">
						<Link
							style={{ color: linkColor }}
							className="text-[18px] font-normal leading-tight tracking-tight"
							href="/">
							{href}
						</Link>
						<div
							className="w-full h-[1px] rounded-lg"
							style={{ backgroundColor: linkColor }}
						/>
					</div>
				</div>
				<motion.div
					className="w-1/2 h-full flex items-center justify-center"
					style={{ scale: imageScale }}>
					<Image
						src={src}
						alt="whatwedoImg"
						className="w-[80%] object-cover"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}
