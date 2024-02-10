"use client";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function TriangleParticles() {
  // particles init state
  const [init, setInit] = useState(false);

  // particles setup
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("loaded particles");
    // console.log(container);
  };

  // particles options
  const options: ISourceOptions = useMemo(
    () => ({
      name: "Links",
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#0000FF",
          animation: {
            enable: true,
            speed: 3,
            sync: true,
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.05, max: 0.3 },
          animation: {
            enable: true,
            speed: 0.5,
            startValue: "max",
            sync: false,
            destroy: "min",
          },
        },
        life: {
          duration: {
            sync: false,
            value: 5,
          },
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        links: {
          enable: true,
          distance: 130,
          color: "#666666",
          opacity: 0.25,
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
          outModes: "bounce",
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
      delay: 0, // normally set to 1
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
