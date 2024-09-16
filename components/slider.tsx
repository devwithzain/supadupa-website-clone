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
		<div
			id="transformation"
			className="w-full flex flex-col gap-10 pb-10 bg-[#FFD7EF]">
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
			<div className="w-full">
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
		</div>
	);
}
