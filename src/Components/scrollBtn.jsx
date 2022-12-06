import React, { useState } from "react";
import { useEffect } from "react";

const ScrollButton = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(2500);
  const [visible, setVisible] = useState(false);
  const checkScroll = () => {
    const scrollPosToY = window.pageYOffset;
    console.log(scrollPosToY, "scroll-to-Y");
    if (scrollPosToY >= prevScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  const scrollToUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {visible ? (
        <div>
          <div className="click-scroll" onClick={() => scrollToUp()}>
            <span>
              <i class="bi bi-caret-up"></i>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ScrollButton;
