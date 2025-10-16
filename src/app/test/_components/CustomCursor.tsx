"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.dataset.cursorText) {
        setCursorText(target.dataset.cursorText);
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 hidden lg:block transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`transition-all duration-300 ${
            isHovering
              ? "w-20 h-20 bg-[#FDA228] opacity-80"
              : "w-8 h-8 border-2 border-black dark:border-white"
          } rounded-full flex items-center justify-center`}
        >
          {isHovering && cursorText && (
            <span className="text-xs font-bold text-black uppercase">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
