"use client";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function TriangleParticles() {
  // particles init state
  const [init, setInit] = useState(false);

  // particles setup
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  // particles options
  const options: ISourceOptions = useMemo(
    () => ({
      name: "Fireflies",
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
          value: 0.3,
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
          animation: {
            enable: true,
            startValue: "max",
            destroy: "min",
            speed: 1,
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
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 80,
          },
          push: {
            quantity: 5,
          },
        },
      },
      background: {
        color: "transparent",
      },
      delay: 1,
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
