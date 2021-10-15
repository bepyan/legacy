import { useEffect, useState } from "react";

const HEADER_OFFSET_Y = 100;

const useTocScroll = () => {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState();

  const getUrl = (s) => {
    if (!s) return undefined;
    return "#" + s.split("#").pop();
  };

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl;
      const currentOffsetY = window.pageYOffset;
      const headerElements = document.querySelectorAll(".anchor-header");
      headerElements.forEach((elem, i) => {
        const { top } = elem.getBoundingClientRect();
        if (currentOffsetY < currentOffsetY + top - HEADER_OFFSET_Y) {
          setCurrentHeaderUrl(getUrl(aboveHeaderUrl));
          return;
        }

        const isLast = i === headerElements.length - 1;
        if (isLast) setCurrentHeaderUrl(getUrl(elem.href));
        else aboveHeaderUrl = elem.href;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { currentHeaderUrl };
};

export default useTocScroll;
