import { useEffect, useState } from "react";

export default function useScrollTop(threshold: number = 150) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < threshold);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { isTop, goToTop };
}
