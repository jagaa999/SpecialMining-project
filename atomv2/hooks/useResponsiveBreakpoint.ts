import { useEffect } from "react";
import { createBreakpoint, useToggle } from "react-use";
import _ from "lodash";

const useBreakpoint = createBreakpoint({
  mobile: 480, // Mobile phones
  sm: 640, // Large phones
  md: 768, // Tablets
  lg: 1024, // Small laptops
  xl: 1280, // Laptops
  "2xl": 1536, // Large screens
});

export default function useResponsiveBreakpoint() {
  const breakpoint = useBreakpoint();

  const [isMobile, setIsMobile] = useToggle(false);
  const [isDesktop, setIsDesktop] = useToggle(false);

  useEffect(() => {
    const isMobileDevice = _.includes(["mobile", "sm"], breakpoint);
    setIsMobile(isMobileDevice);
    setIsDesktop(!isMobileDevice);
  }, [breakpoint, setIsMobile, setIsDesktop]);

  return { breakpoint, isMobile, isDesktop };
}
