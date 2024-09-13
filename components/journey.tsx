"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export default function Journey() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "center center"],
	});
	const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 0.98]);
	const scaleSmooth = useSpring(scale);

	return (
		<motion.div
			className="w-full h-screen flex items-center justify-center rounded-[30px] py-10 bg-[#FFD7EF] transition-all duration-300 ease-linear mb-20"
			style={{ scale: scaleSmooth }}
			ref={container}>
			<div className="w-[70%] h-full flex items-center justify-center">
				<h1 className="text-[100px] text-[#260A2F] font-bold leading-none tracking-tight text-center">
					At Supa Dupa we help companies on their journey to do good business in
					a sustainable way. Because good business leads to a better future.
				</h1>
			</div>
			<div className="w-full h-full absolute">
				<div className="absolute right-24 -bottom-10">
					<motion.img
						animate={{ rotate: [-360, 360] }}
						transition={{
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						}}
						src="/circle2.svg"
						alt="circle2"
						width={130}
						height={130}
					/>
				</div>
				<div className="absolute right-60 -bottom-12">
					<motion.img
						animate={{ rotate: [-360, 360] }}
						transition={{
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						}}
						src="/circle1.svg"
						alt="circle1"
						width={100}
						height={100}
					/>
				</div>
			</div>
		</motion.div>
	);
}
