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
  const [isLargeDesktop, setIsLargeDesktop] = useToggle(false);
  const [isTablet, setIsTablet] = useToggle(false);
  const [isSmallLaptop, setIsSmallLaptop] = useToggle(false);
  const [isWideScreen, setIsWideScreen] = useToggle(false);

  useEffect(() => {
    const isMobileDevice = _.includes(["mobile", "sm"], breakpoint);
    const isDesktopDevice = _.includes(["md", "lg", "xl", "2xl"], breakpoint);
    const isLargeDesktopDevice = _.includes(["xl", "2xl"], breakpoint);
    const isTabletDevice = _.includes(["md"], breakpoint);
    const isSmallLaptopDevice = _.includes(["lg"], breakpoint);
    const isWideScreenDevice = _.includes(["2xl"], breakpoint);

    setIsMobile(isMobileDevice);
    setIsDesktop(isDesktopDevice);
    setIsLargeDesktop(isLargeDesktopDevice);
    setIsTablet(isTabletDevice);
    setIsSmallLaptop(isSmallLaptopDevice);
    setIsWideScreen(isWideScreenDevice);
  }, [breakpoint, setIsMobile, setIsDesktop, setIsLargeDesktop]);

  return {
    breakpoint,
    isMobile,
    isTablet,
    isSmallLaptop,
    isDesktop,
    isLargeDesktop,
    isWideScreen,
  };
}
