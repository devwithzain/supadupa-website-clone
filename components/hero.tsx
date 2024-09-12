"use client";
import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { arrowDown, heroCircle } from "@/public";

export default function Hero() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		resizeText();

		window.addEventListener("resize", resizeText);

		return () => {
			window.removeEventListener("resize", resizeText);
		};
	}, []);

	const resizeText = () => {
		const container = containerRef.current;
		const text = textRef.current;

		if (!container || !text) {
			return;
		}

		const containerWidth = container.offsetWidth;
		let min = 1;
		let max = 2500;

		while (min <= max) {
			const mid = Math.floor((min + max) / 2);
			text.style.fontSize = mid + "px";

			if (text.offsetWidth <= containerWidth) {
				min = mid + 1;
			} else {
				max = mid - 1;
			}
		}

		text.style.fontSize = max + "px";
	};

	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center padding-x gap-10">
			<Navbar />
			<div
				className="flex flex-col justify-start w-full"
				ref={containerRef}>
				<h1 className="text-[24px] text-[#9FE870] font-normal leading-tight tracking-tight">
					Welcome to the world of
				</h1>
				<span
					className="flex text-[250px] text-[#9FE870] font-bold leading-[200px] tracking-tighter mx-auto whitespace-nowrap text-center mt-20"
					ref={textRef}>
					{"SupaDupa".split("").map((item: string, i: number) => (
						<motion.p
							initial={{ y: "100%" }}
							whileInView={{ y: 0 }}
							transition={{
								delay: i * 0.08,
								duration: 1,
								ease: [0.4, 0, 0.2, 1],
							}}
							viewport={{ once: true }}
							key={i}>
							{item}
						</motion.p>
					))}
				</span>
			</div>
			<div className="w-full flex flex-col gap-10 relative">
				<div className="w-[600px] h-[400px] absolute left-64  rounded-lg">
					<video
						src="./heroVideo.mp4"
						autoPlay
						loop
						muted
						className="rounded-[30px] w-full h-full object-cover"
					/>
					<motion.div
						animate={{ rotate: [-360, 360] }}
						transition={{
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						}}
						className="flex items-center absolute top-36 -left-16">
						<Image
							src={heroCircle}
							alt="heroCircleImg"
							width={120}
							height={120}
						/>
					</motion.div>
				</div>
				<motion.div
					initial={{ borderTopWidth: 0, width: "0%" }}
					viewport={{ once: true }}
					whileInView={{
						borderTopWidth: 1,
						width: "100%",
						borderColor: "#9FE870",
						origin: "left",
					}}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: "easeInOut",
					}}
					className="w-full mt-20"
				/>
				<div className="w-full flex justify-between relative">
					<div className="flex flex-col gap-5 relative">
						<Image
							src={arrowDown}
							alt="arrowDownImg"
							width={20}
							height={20}
						/>
						<h1 className="whitespace-nowrap text-[20px] uppercase text-[#9FE870] font-normal leading-tight tracking-tight rotate-90 absolute -bottom-5 -left-[73px]">
							start exploring
						</h1>
					</div>
					<div className="flex flex-col gap-5">
						<h1 className="text-[24px] text-[#9FE870] font-normal leading-tight tracking-tight">
							Where the journey of discovery is as exciting <br /> as the
							destination.
						</h1>

						<div className="w-fit flex flex-col gap-2">
							<Link
								className="text-[18px] text-secondary font-normal leading-tight tracking-tight"
								href="/">
								Let&apos;s build good companies
							</Link>
							<div className="w-full h-[1px] rounded-lg bg-secondary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
