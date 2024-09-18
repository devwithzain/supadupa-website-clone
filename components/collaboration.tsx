"use client";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
	arrowLeft,
	arrowRight,
	collaborationCircle,
	hartman1,
	hartmanBlack,
	saion1,
	saionBlack,
} from "@/public";
import { useTranslations } from "next-intl";
import { collaborationItems } from "@/constants";

export default function Collaboration() {
	const container = useRef(null);
	const t = useTranslations("ourImpactContent");
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const sc = useTransform(scrollYProgress, [0, 1], [100, -1500]);

	const swiperRef = useRef<any | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div
			id="our-impact"
			className="w-full bg-[#260A2F] py-10 padding-x">
			<div className="w-full flex justify-start items-center xm:pb-10 sm:pb-10">
				<div className="w-[72%] xm:w-full sm:w-full flex flex-col gap-4">
					<h4 className="text-[24px] text-[#FFD7EF] leading-tight tracking-tighter">
						{t("ourImpactHeading1")}
					</h4>

					<h1 className="text-[80px] xm:text-[35px] sm:text-[40px] xm:leading-[40px] sm:leading-[50px] text-[#FFD7EF] font-bold leading-[80px] tracking-tighter">
						{t("ourImpactHeading2")}
					</h1>
				</div>
			</div>
			<div
				className="w-full py-20 xm:hidden sm:hidden"
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
				<div className="p-5 overflow-hidden">
					<Swiper
						modules={[Navigation]}
						loop
						spaceBetween={30}
						slidesPerView={1}
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						<SwiperSlide>
							<motion.div className="w-full p-14 xm:p-0 sm:p-0 flex justify-between  rounded-[30px] gap-20 xm:gap-10 sm:gap-10 xm:flex-col sm:flex-col">
								<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-14 pt-10 xm:gap-5 sm:gap-5">
									<Image
										src={hartmanBlack}
										alt="whatwedoImg"
										className="w-[100px] object-cover text-black"
									/>
									<div className="flex flex-col gap-4">
										<h4 className="text-[40px] xm:text-[27px] sm:text-[27px] leading-tight tracking-tight">
											{t("title1")}
										</h4>
										<div className="flex flex-col">
											<h2 className="text-[24px] xm:text-[20px] sm:text-[20px] leading-tight tracking-tighter">
												{t("heading1")}
											</h2>
											<h4 className="text-[24px] xm:text-[20px] sm:text-[20px] leading-tight tracking-tighter">
												{t("para1")}
											</h4>
										</div>
									</div>
								</div>
								<motion.div className="w-1/2 xm:w-full sm:w-full flex items-center justify-center relative">
									<Image
										src={hartman1}
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
										className="flex items-center absolute -bottom-14 right-20 xm:hidden sm:hidden">
										<Image
											src={collaborationCircle}
											alt="heroCircleImg"
											width={120}
											height={120}
										/>
									</motion.div>
								</motion.div>
							</motion.div>
						</SwiperSlide>
						<SwiperSlide>
							<motion.div className="w-full p-14 flex justify-between rounded-[30px] gap-20 xm:gap-10 sm:gap-5 xm:flex-col sm:flex-col xm:p-0 sm:p-0">
								<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-14 pt-10 xm:gap-5 sm:gap-5">
									<Image
										src={saionBlack}
										alt="whatwedoImg"
										className="w-[100px] object-cover text-black"
									/>
									<div className="flex flex-col gap-4">
										<h4 className="text-[40px] xm:text-[27px] sm:text-[27px] leading-tight tracking-tight">
											{t("title2")}
										</h4>
										<div className="flex flex-col">
											<h2 className="text-[24px] xm:text-[20px] sm:text-[20px] leading-tight tracking-tighter">
												{t("heading2")}
											</h2>
											<h4 className="text-[24px] xm:text-[20px] sm:text-[20px] leading-tight tracking-tighter">
												{t("para2")}
											</h4>
										</div>
									</div>
								</div>
								<motion.div className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-center relative">
									<Image
										src={saion1}
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
										className="flex items-center absolute -bottom-14 right-20 xm:hidden sm:hidden">
										<Image
											src={collaborationCircle}
											alt="heroCircleImg"
											width={120}
											height={120}
										/>
									</motion.div>
								</motion.div>
							</motion.div>
						</SwiperSlide>
					</Swiper>
					<div className="flex w-fit gap-2 pl-10 xm:p-0 sm:p-0 xm:pt-5 sm:pt-5">
						<div
							onClick={handlePrev}
							className="bg-[#FFD7EF] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-3 py-2 rounded-[30px]">
							<Image
								src={arrowLeft}
								alt="arrowLeft"
								className="!w-[55px]"
								width={55}
								height={55}
							/>
						</div>
						<div
							onClick={handleNext}
							className="bg-[#FFD7EF] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-3 py-2 rounded-[30px]">
							<Image
								src={arrowRight}
								alt="arrowRight"
								width={55}
								height={55}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
