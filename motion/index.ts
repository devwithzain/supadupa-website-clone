export const navVariants = {
   hidden: { y: "-100%", transition: { ease: [0.76, 0, 0.24, 1], duration: 1, } },
   vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.7 }, }
};

export const opacity = {
   initial: {
      opacity: 0
   },
   enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 }
   },
};

export const slideUp = {
   initial: {
      top: 0
   },
   exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
   }
};
