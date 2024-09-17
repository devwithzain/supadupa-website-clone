"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Marquee, Card } from "@/components";
import { whatwedoCircleImg } from "@/public";

export default function Whatwedo() {
	const t = useTranslations("whatwedoContent");
	return (
		<div
			id="what-we-do"
			className="w-full py-20 bg-[#FFD7EF] relative">
			<motion.div
				animate={{ rotate: [-360, 360] }}
				transition={{
					repeat: Infinity,
					repeatType: "loop",
					duration: 20,
					ease: "linear",
				}}
				className="flex items-center absolute -top-14 right-40">
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
			<div className="w-full flex items-center justify-center">
				<div className="w-[80%]">
					<p
						className="text-[25px] text-[#260A2F] leading-normal tracking-tight"
						dangerouslySetInnerHTML={{ __html: t("whatwedoHeading") }}
					/>
				</div>
			</div>
			<div className="w-full padding-x py-20">
				<Card />
			</div>
		</div>
	);
}
