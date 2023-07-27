// Page Animations
export const pageVariants = {
  pageInitial: {
    opacity: 0,
    x: "80%",
  },
  pageOriginal: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    x: 0,
  },
  pageExit: {
    opacity: 0,
    x: "-80%",
  },
};

export const navBarVariants = {
  barInitial: {
    opacity: 0,
    y: "-30%",
  },
  barAnimate: {
    opacity: 1,
    y: 0,
  },
};

export const footerVariants = {
  footerInitial: {
    opacity: 0,
    y: "30%",
  },
  footerAnimate: {
    opacity: 1,
    y: 0,
  },
};

export const ENTRY_DELAY = 1.5;
