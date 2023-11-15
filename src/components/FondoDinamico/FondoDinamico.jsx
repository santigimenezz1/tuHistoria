 "use client"
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particles.json";
import Particles from "react-tsparticles";

function FondoDinamico() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, [])

  return (
    <div>
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  )
}

export default FondoDinamico;
