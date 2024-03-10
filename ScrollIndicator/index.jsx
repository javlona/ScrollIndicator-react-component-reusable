import { useState, useEffect } from "react";
import "./scroll.style.css";

function ScrollIndicator({
  bgColor = "#9d9d9d",
  barColor = "blueviolet",
  barHeight = "4px",
}) {
  const [scrollPer, setScrollPer] = useState(0);

  function handleScroller() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = Math.ceil((winScroll / height) * 100);
    setScrollPer(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);

    return () => window.removeEventListener("scroll", function () {});
  }, [scrollPer]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        className="scroll-bar"
        style={{ backgroundColor: bgColor, height: barHeight }}
      >
        <div
          className="scroll-per"
          style={{ width: `${scrollPer}%`, backgroundColor: barColor }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
