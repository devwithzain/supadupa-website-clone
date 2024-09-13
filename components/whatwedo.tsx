"use client";
import Image from "next/image";
import { useRef } from "react";
import { whatwedoItems } from "@/constants";
import { Marquee, Card } from "@/components";
import { whatwedoCircleImg } from "@/public";
import { motion, useScroll } from "framer-motion";

export default function Whatwedo() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	return (
		<div className="w-full py-20 bg-[#FFD7EF] relative">
			<motion.div
				animate={{ rotate: [-360, 360] }}
				transition={{
					repeat: Infinity,
					repeatType: "loop",
					duration: 20,
					ease: "linear",
				}}
				className="flex items-center absolute -top-10 right-40">
				<Image
					src={whatwedoCircleImg}
					alt="heroCircleImg"
					width={120}
					height={120}
				/>
			</motion.div>
			<Marquee
				className="text-[#260A2F]"
				titile1="What we do"
				titile2="What we do"
			/>
			<div className="w-[80%] flex justify-center">
				<div>
					<p className="text-[25px] text-[#260A2F] leading-normal tracking-tight">
						Together we will look at your organization through four lenses of
						expertise: Business <br /> development, Branding, Sustainability and
						People & Culture. We help organizations <br /> evolve their value
						proposition to generate sustainable business.
					</p>
				</div>
			</div>
			<div
				ref={container}
				className="w-full padding-x py-20">
				{whatwedoItems.map((item, i) => {
					return (
						<Card
							key={item.id}
							i={i}
							title={item.title}
							para={item.para}
							heading1={item.heading1}
							heading2={item.heading2}
							src={item.img}
							href={item.href}
							bgColor={item.bgColor}
							linkColor={item.linkColor}
							textColor={item.textColor}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
						/>
					);
				})}
			</div>
			<div className="w-full flex justify-start items-center padding-x">
				<div className="w-[72%] flex flex-col gap-7">
					<h4 className="text-[24px] text-[#260A2F] leading-tight tracking-tighter">
						Pioneers for the new normal
					</h4>

					<h1 className="text-[80px] text-[#260A2F] font-bold leading-[80px] tracking-tighter">
						Business transformation is a journey that demands time, space and a
						contagious dose of positive energy.
					</h1>
					<h4 className="text-[24px] text-[#260A2F] leading-normal tracking-tighter">
						Our philosophy is that everyone knows their destination; sometimes,
						you just need a guide who knows the way to get there. With our
						transformation journey process, we tailor a unique path aligned with
						your company&apos;s specific needs.
					</h4>
				</div>
			</div>
		</div>
	);
}
