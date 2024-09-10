"use client";
import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { arrowDown, heroCircle } from "@/public";

export default function Hero() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center padding-x gap-10">
			<Navbar />
			<div className="flex flex-col justify-start w-full">
				<h1 className="text-[24px] text-[#9FE870] font-normal leading-tight tracking-tight">
					Welcome to the world of
				</h1>
				<h1 className="text-[250px] text-[#9FE870] font-bold leading-[200px] tracking-tighter">
					Supa Dupa
				</h1>
			</div>
			<div className="w-full flex flex-col gap-10 relative">
				<div className="w-[600px] h-[400px] absolute left-64 -top-10 rounded-lg">
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
				<div className="w-full border-b border-[#9FE870] py-10" />
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
