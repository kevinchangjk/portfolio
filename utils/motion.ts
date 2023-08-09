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
    y: "-20%",
  },
  barAnimate: {
    opacity: 1,
    y: 0,
  },
};

export const footerVariants = {
  footerInitial: {
    opacity: 0,
    y: "20%",
  },
  footerAnimate: {
    opacity: 1,
    y: 0,
  },
};

export const introVariants = {
  introInitial: {
    opacity: 0,
    y: "20%",
  },
  introAnimate: {
    opacity: 1,
    y: 0,
  },
  introOriginal: {
    opacity: 0,
    y: 0,
  },
};

export const ENTRY_DELAY = 2;
export const PAGE_TRANSITION_DURATION = 0.25;
