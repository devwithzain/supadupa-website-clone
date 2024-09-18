"use client";
import { useRef } from "react";
import { TmarqueeProps } from "@/types";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Marquee({
	titile1,
	titile2,
	className,
}: TmarqueeProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const sc = useTransform(scrollYProgress, [0, 1], [200, -1000]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
	return (
		<div
			className="w-full padding-x py-10 xm:hidden sm:hidden"
			ref={container}>
			<motion.div
				style={{ x: sc }}
				className="w-full flex whitespace-nowrap gap-10">
				<h1
					className={`text-[200px] ${className} font-bold leading-none tracking-tight`}>
					{titile1}
				</h1>
				<motion.img
					style={{ rotate: rotate }}
					src="/companiesImg.svg"
					alt="companiesImg"
				/>
				<h1
					className={`text-[200px] ${className} font-bold leading-none tracking-tight`}>
					{titile2}
				</h1>
			</motion.div>
		</div>
	);
}
