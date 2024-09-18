"use client";
import React, { useRef } from "react";
import { TParagraphProps, TWordProps } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ paragraph }: TParagraphProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.8", "start 0.15"],
	});

	const words = paragraph.split(" ");
	return (
		<>
			<p
				ref={container}
				className="text-[100px] lg:text-[70px] md:text-[60px] xm:text-[36px] sm:text-[40px] text-[#260A2F] font-bold leading-none tracking-tight text-center flex flex-wrap items-center justify-center">
				{words.map((word, i) => {
					const start = i / words.length;
					const end = start + 1 / words.length;
					return (
						<Words
							key={i}
							progress={scrollYProgress}
							range={[start, end]}>
							{word}
						</Words>
					);
				})}
			</p>
		</>
	);
}

const Words = ({ children, progress, range }: TWordProps) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="relative mr-[12px] mt-[12px]">
			<span className="absolute opacity-0">{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
