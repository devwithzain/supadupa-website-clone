import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components";
import { motion } from "framer-motion";
import { whatwedoItems } from "@/constants";
import { whatwedoCircleImg } from "@/public";

export default function Whatwedo() {
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
			<div className="w-full padding-x py-20">
				{whatwedoItems.map((item) => (
					<div
						className="w-full p-20 flex justify-between rounded-[30px] gap-10"
						style={{ backgroundColor: item.bgColor }}
						key={item.id}>
						<div className="w-1/2 h-full flex flex-col gap-14">
							<div className="flex flex-col gap-2">
								<h4
									className="text-[24px] leading-tight tracking-tighter"
									style={{ color: item.textColor }}>
									{item.title}
								</h4>
								<h2
									className="text-[80px] font-bold leading-[80px] tracking-tighter"
									style={{ color: item.textColor }}>
									{item.heading.part1}
									<br />
									{item.heading.part2}
								</h2>
								<h4
									className="text-[20px] leading-normal tracking-tighter"
									style={{ color: item.textColor }}>
									{item.para}
								</h4>
							</div>
							<div className="w-fit flex flex-col gap-2">
								<Link
									style={{ color: item.linkColor }}
									className="text-[18px] font-normal leading-tight tracking-tight"
									href="/">
									{item.href}
								</Link>
								<div className="w-full h-[1px] rounded-lg bg-secondary" />
							</div>
						</div>
						<div className="w-1/2 h-full flex items-center justify-center">
							<Image
								src={item.img}
								alt="whatwedoImg"
								className="w-[80%] object-cover"
							/>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-start items-center padding-x py-20">
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
