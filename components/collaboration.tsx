"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { collaborationItems, collaborationSliderItems } from "@/constants";
import { arrowLeft, arrowRight, collaborationCircle } from "@/public";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Pagination, Navigation]);
export default function Collaboration() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const sc = useTransform(scrollYProgress, [0, 1], [100, -1500]);

	const swiperRef = useRef<Swiper | null>(null);

	useEffect(() => {
		swiperRef.current = new Swiper(".card-wrapper", {
			loop: true,
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 1,
				},
			},
		});
	}, []);
	return (
		<div className="w-full bg-[#260A2F] py-10 padding-x">
			<div className="w-full flex justify-start items-center">
				<div className="w-[72%] flex flex-col gap-4">
					<h4 className="text-[24px] text-[#FFD7EF] leading-tight tracking-tighter">
						Our Impact
					</h4>

					<h1 className="text-[80px] text-[#FFD7EF] font-bold leading-[80px] tracking-tighter">
						We love collaborating with good people, family-owned businesses, and
						B-Corps!
					</h1>
				</div>
			</div>
			<div
				className="w-full py-20"
				ref={container}>
				<motion.div
					style={{ x: sc }}
					className="w-full flex whitespace-nowrap gap-3">
					{collaborationItems.map((item) => (
						<div
							className="min-w-[500px] flex items-center justify-center py-5 px-5 border-[1.5px] border-[#FFD7EF] rounded-[20px]"
							key={item.id}>
							<Image
								src={item.src}
								alt="companiesImg"
								className="w-[600px] h-[100px] object-contain"
							/>
						</div>
					))}
				</motion.div>
			</div>
			<div className="w-full pb-10 bg-[#9FE870] rounded-[20px]">
				<div className="swiper">
					<div className="card-wrapper p-5 overflow-hidden">
						<ul className="swiper-wrapper">
							{collaborationSliderItems.map((item) => (
								<motion.div
									className="w-full p-10 !flex justify-between rounded-[30px] gap-20 swiper-slide"
									key={item.id}>
									<div className="w-1/2 h-full flex flex-col gap-14 pt-10">
										<Image
											src={item.src1}
											alt="whatwedoImg"
											className="w-[100px] object-cover text-black"
										/>
										<div className="flex flex-col gap-4">
											<h4 className="text-[40px] leading-tight tracking-tight">
												{item.title}
											</h4>
											<div className="flex flex-col">
												<h2 className="text-[24px] leading-tight tracking-tighter">
													{item.para1}
												</h2>
												<h4 className="text-[24px] leading-tight tracking-tighter">
													{item.para2}
												</h4>
											</div>
										</div>
									</div>
									<motion.div className="w-1/2 h-full flex items-center justify-center relative">
										<Image
											src={item.src}
											alt="img"
											className="w-full object-cover"
										/>
										<motion.div
											animate={{ rotate: [-360, 360] }}
											transition={{
												repeat: Infinity,
												repeatType: "loop",
												duration: 20,
												ease: "linear",
											}}
											className="flex items-center absolute -bottom-14 right-20">
											<Image
												src={collaborationCircle}
												alt="heroCircleImg"
												width={120}
												height={120}
											/>
										</motion.div>
									</motion.div>
								</motion.div>
							))}
						</ul>
						<div className="flex !relative w-full ml-10">
							<div className="bg-[#FFD7EF] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-10 py-[17px] rounded-[30px]">
								<Image
									src={arrowLeft}
									alt="arrowLeft"
									className="!w-[55px] swiper-button-prev"
									width={55}
									height={55}
								/>
							</div>
							<div className="!absolute !left-20 bg-[#FFD7EF] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-10 py-[17px] rounded-[30px] ml-3">
								<Image
									src={arrowRight}
									alt="arrowRight"
									className="!w-[55px] swiper-button-next"
									width={55}
									height={55}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
