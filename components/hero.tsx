"use client";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { arrowDown, heroCircle } from "@/public";

export default function Hero() {
	const t = useTranslations("heroContent");
	const textRef = useRef<HTMLSpanElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

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

	const plane1 = useRef(null);
	let requestAnimationFrameId: any = null;
	let xForce = 0;
	let yForce = 0;
	const easing = 0.08;
	const speed = 0.01;

	const manageMouseMove = (e: any) => {
		const { movementX, movementY } = e;
		xForce += movementX * speed;
		yForce += movementY * speed;

		if (requestAnimationFrameId == null) {
			requestAnimationFrameId = requestAnimationFrame(animate);
		}
	};

	const lerp = (start: number, target: number, amount: number) =>
		start * (0.8 - amount) + target * amount;

	const animate = () => {
		xForce = lerp(xForce, 0, easing);
		yForce = lerp(yForce, 0, easing);
		gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
		if (Math.abs(xForce) < 0.01) xForce = 0;
		if (Math.abs(yForce) < 0.01) yForce = 0;

		if (xForce != 0 || yForce != 0) {
			requestAnimationFrame(animate);
		} else {
			cancelAnimationFrame(requestAnimationFrameId);
			requestAnimationFrameId = null;
		}
	};

	// Reset the video position when the mouse leaves the container
	const resetVideoPosition = () => {
		gsap.to(plane1.current, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
		xForce = 0;
		yForce = 0;
	};

	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center padding-x gap-10">
			<Navbar />
			<div
				className="flex flex-col justify-start w-full"
				ref={containerRef}>
				<h1 className="text-[24px] text-[#9FE870] font-normal leading-tight tracking-tight">
					{t("welcome-to-the-world-of")}
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
			<div
				className="w-full flex flex-col gap-10 relative"
				onMouseMove={manageMouseMove}
				onMouseLeave={resetVideoPosition}>
				<div className="w-[600px] h-[400px] absolute left-64  rounded-lg">
					<motion.video
						ref={plane1}
						initial={{ y: 20, opacity: 0.5, scale: 0.5 }}
						whileInView={{ y: 0, opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
						viewport={{ once: true }}
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
							className="h-fit"
						/>
						<h1 className="whitespace-nowrap text-[20px] uppercase text-[#9FE870] font-normal leading-tight tracking-tight rotate-90 absolute -bottom-5 -left-[73px]">
							{t("start")}
						</h1>
					</div>
					<div className="flex flex-col gap-5">
						<h1
							className="text-[24px] text-[#9FE870] font-normal leading-tight tracking-tight"
							dangerouslySetInnerHTML={{ __html: t("where-the-journey") }}
						/>
						<div className="w-fit flex flex-col gap-2">
							<Link
								className="text-[18px] text-secondary font-normal leading-tight tracking-tight"
								href="/">
								{t("lets-build")}
							</Link>
							<div className="w-full h-[1px] rounded-lg bg-secondary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
