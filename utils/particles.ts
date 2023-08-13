import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  name: "Links",
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
      },
      max: 75
    },
    color: {
      value: "#0000FF",
      animation: {
        enable: true,
        speed: 5,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    links: {
      enable: true,
      distance: 100,
      color: "#666666",
      opacity: 0.3,
      width: 1,
      triangles: {
        enable: true,
        color: "#A7A7A7",
        opacity: 0.05,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.8,
        },
      },
      push: {
        quantity: 3,
      },
    },
  },
  background: {
    color: "transparent",
  },
  delay: 1,
};

export default options;
