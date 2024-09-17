"use client";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Navigation } from "swiper/modules";
import { arrowLeft, arrowRight } from "@/public";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
	const t = useTranslations("sliderContent");
	const swiperRef = useRef<any | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div
			id="transformation"
			className="w-full flex flex-col gap-10 pb-10 bg-[#FFD7EF]">
			<div className="w-full flex justify-start items-center padding-x">
				<div className="w-[72%] flex flex-col gap-7">
					<h4 className="text-[24px] text-[#260A2F] leading-tight tracking-tighter">
						{t("sliderHeading1")}
					</h4>

					<h1 className="text-[80px] text-[#260A2F] font-bold leading-[80px] tracking-tighter">
						{t("sliderHeading2")}
					</h1>
					<h4 className="text-[24px] text-[#260A2F] leading-normal tracking-tighter">
						{t("sliderHeading3")}
					</h4>
				</div>
			</div>
			<div className="w-full">
				<div className="p-5 overflow-hidden">
					<Swiper
						modules={[Navigation]}
						loop
						spaceBetween={30}
						slidesPerView={2}
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						<SwiperSlide>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[450px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{t("title1")}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{t("heading1")}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{t("para1")}
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[450px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{t("title2")}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{t("heading2")}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{t("para2")}
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[450px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{t("title3")}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{t("heading3")}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{t("para3")}
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[450px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{t("title4")}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{t("heading4")}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{t("para4")}
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[450px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{t("title5")}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{t("heading5")}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{t("para5")}
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="flex mt-6 w-full gap-2">
						<div
							onClick={handlePrev}
							className="bg-[#9fe870] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-3 py-2 rounded-[30px]">
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
							className="bg-[#9fe870] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-3 py-2 rounded-[30px]">
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
