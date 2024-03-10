import { useState, useEffect } from "react";
import "./scroll.style.css";

function ScrollIndicator() {
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
    <div style={{ position: "relative" }}>
      <div className="scroll-bar">
        <div className="scroll-per" style={{ width: `${scrollPer}%` }}></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
