"use client";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { testimonialsItems } from "@/constants";
import { arrowLeft, arrowRight } from "@/public";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
	const swiperRef = useRef<any | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full pb-10 bg-[#FFD7EF]">
			<div className="p-5 overflow-hidden">
				<Swiper
					modules={[Navigation]}
					loop
					spaceBetween={30}
					slidesPerView={2}
					onSwiper={(swiper) => (swiperRef.current = swiper)}>
					{testimonialsItems.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[400px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{item.title}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{item.heading}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{item.para}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
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
	);
}
