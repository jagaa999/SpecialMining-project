"use client";

import Image from "next/image";
import Header from "../layout/Header";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PageHome() {
  const videoUrls = [
    "https://res.cloudinary.com/dg2qmka48/video/upload/v1753670156/autozar6/mainimages/2025/rox/roxVideo02_uk8jum.mp4",
    "https://res.cloudinary.com/dg2qmka48/video/upload/v1753670153/autozar6/mainimages/2025/rox/roxVideo05_muygi5.mp4",
    "https://res.cloudinary.com/dg2qmka48/video/upload/v1753670153/autozar6/mainimages/2025/rox/roxVideo03_wb1drh.mp4",
    "https://res.cloudinary.com/dg2qmka48/video/upload/v1753675376/autozar6/mainimages/2025/rox/roxVideo04_qbczqb.mp4",
    "https://res.cloudinary.com/dg2qmka48/video/upload/v1753670150/autozar6/mainimages/2025/rox/roxVideo01_c7ve9o.mp4",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const controlsHero = useAnimation();
  const controlsVideo = useAnimation();
  const controls360 = useAnimation();
  const controlsThird = useAnimation();

  const [heroRef, inViewHero] = useInView({ triggerOnce: false });
  const [videoRef, inViewVideo] = useInView({ triggerOnce: false });
  const [section360Ref, inView360] = useInView({ triggerOnce: false });
  const [, inViewThird] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewHero) controlsHero.start({ opacity: 1, y: 0 });
    else controlsHero.start({ opacity: 0, y: 40 });
  }, [controlsHero, inViewHero]);

  useEffect(() => {
    if (inViewVideo) controlsVideo.start({ opacity: 1, y: 0 });
    else controlsVideo.start({ opacity: 0, y: 40 });
  }, [controlsVideo, inViewVideo]);

  useEffect(() => {
    if (inView360) controls360.start({ opacity: 1, y: 0 });
    else controls360.start({ opacity: 0, y: 40 });
  }, [controls360, inView360]);

  useEffect(() => {
    if (inViewThird) controlsThird.start({ opacity: 1, y: 0 });
    else controlsThird.start({ opacity: 0, y: 40 });
  }, [controlsThird, inViewThird]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container && container.children.length > 0) {
      const centerIndex = Math.floor(container.children.length / 2);
      const centerVideo = container.children[centerIndex] as HTMLElement;
      container.scrollTo({
        left:
          centerVideo.offsetLeft -
          container.offsetWidth / 2 +
          centerVideo.offsetWidth / 2,
        behavior: "auto",
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMoveDoc = (e: MouseEvent) => {
      if (!isDragging) return;
      const container = scrollRef.current;
      if (!container) return;
      const x = e.pageX;
      const walk = (x - startX.current) * 2.2;
      container.scrollLeft = scrollLeft.current - walk;

      lastX.current = x;
      lastTime.current = Date.now();
    };

    const handleMouseUpDoc = () => {
      if (!isDragging) return;
      setIsDragging(false);

      const deltaX = lastX.current - startX.current;
      const duration = Date.now() - lastTime.current;
      const speed = Math.abs(deltaX / duration);

      const container = scrollRef.current;
      if (!container) return;

      if (speed > 0.5) {
        const direction = deltaX < 0 ? 1 : -1;
        const videoWidth = 980 + 40;
        container.scrollTo({
          left: scrollLeft.current + direction * videoWidth,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMoveDoc);
    document.addEventListener("mouseup", handleMouseUpDoc);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveDoc);
      document.removeEventListener("mouseup", handleMouseUpDoc);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsDragging(true);
    startX.current = e.pageX;
    scrollLeft.current = container.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative w-full h-screen overflow-hidden">
        <Header />
        <Image
          src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753688367/autozar6/mainimages/2025/rox/roxCar23_dma6zs.webp"
          alt="ROX 01 SUV"
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          animate={controlsHero}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-20 left-20 z-20 text-white font-light">
          <h1 className="text-[64px] leading-[1.1] tracking-[0.2em] font-bold text-white drop-shadow-lg">
            ROX 01
          </h1>
          <p className="text-[18px] tracking-[0.3em] mt-1 drop-shadow text-white">
            Luxury All-Terrain SUV
          </p>
        </motion.div>
      </main>

      {/* Video Gallery Section */}
      <motion.section
        ref={videoRef}
        initial={{ opacity: 0, y: 40 }}
        animate={controlsVideo}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full py-16 overflow-hidden bg-white">
        <motion.div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className="flex gap-10 px-6 md:px-24 cursor-grab active:cursor-grabbing select-none scroll-smooth"
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}>
          {videoUrls.map((url, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[980px] h-[540px] transition-transform duration-500 ease-out hover:scale-105">
              <video
                src={url}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* 360° View Section */}
      <motion.section
        ref={section360Ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls360}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full h-screen bg-[#F8F8F8] flex flex-col items-center justify-center px-6 mt-24">
        <h2 className="text-3xl font-bold tracking-widest text-gray-900 mb-2 uppercase">
          360° Exterior View
        </h2>
        <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest">
          Discover the design from every angle
        </p>
        <div className="w-full max-w-6xl h-[400px] aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xl border border-dashed border-gray-400">
          ЗУРАГ НЬ ОДООХОНДОО БАЙХГҮЙ БАЙНА
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-screen h-screen relative overflow-hidden">
        {/* Fullscreen Video */}
        <video
          src="https://res.cloudinary.com/dg2qmka48/video/upload/v1753770970/autozar6/mainimages/2025/rox/Trimmer_video_geitzq.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Bottom-left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-12 left-12 z-20 text-white max-w-3xl">
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-2 drop-shadow-lg">
            Box-shaped design
          </h2>
          <p className="text-white text-base md:text-lg leading-snug drop-shadow-lg">
            The vehicle features sharp body lines and a straight roof, creating
            a bold and classic silhouette that delivers a strong, powerful
            presence.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}
