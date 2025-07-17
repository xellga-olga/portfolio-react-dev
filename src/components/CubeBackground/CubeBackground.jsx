"use client"

import { useRef, useEffect } from "react"

import { FaReact } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const skillSet = [
  { icon: <FaReact className="text-orange-500  text-8xl" />},
  { icon: <GrJs className="text-yellow-400 text-8xl" />},
  { icon: <FaGitAlt className="text-orange-500 text-8xl" />},
  { icon: <MdHtml className="text-green-400 text-8xl" /> },
  { icon: <MdCss className="text-blue-500 text-8xl" /> },
  { icon: <RiTailwindCssFill className="text-purple-400 text-8xl" /> }
];

function useAnimationFrame(callback) {
  const requestRef = useRef()
  const previousTimeRef = useRef()

  useEffect(() => {
    const animate = time => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current
        callback(time)
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [callback])
}

export default function CubeBackground() {
  const ref = useRef(null)

  useAnimationFrame((t) => {
    if (!ref.current) return

    const rotate = Math.sin(t / 10000) * 150
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
      <div className="container">
        <div className="cube" ref={ref}>
          <div className="side front flex items-center justify-center">{skillSet[0].icon}</div>
          <div className="side right flex items-center justify-center">{skillSet[1].icon}</div>
          <div className="side back flex items-center justify-center">{skillSet[2].icon}</div>
          <div className="side left flex items-center justify-center">{skillSet[3].icon}</div>
          <div className="side top flex items-center justify-center">{skillSet[4].icon}</div>
          <div className="side bottom flex items-center justify-center">{skillSet[5].icon}</div>
        </div>
        <StyleSheet />
      </div>
    </div>
  )
}


function StyleSheet() {
  return (
    <style>{`
       
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: var(--hue-1-transparent);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: var(--hue-2-transparent);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: var(--hue-3-transparent);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: var(--hue-4-transparent);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: var(--hue-5-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
  )
}
