"use client";

export default function DefaultHomePage() {
  return (
    <>
      <div className="bg-white h-screen w-screen flex items-center justify-center text-gray-800">
        <div className="text-center px-4 max-w-xl">
          <div className="mb-5 animate-fade-in">
            <img
              src="https://cdn.moto.mn/moto/landing/13_zenart/9fe1219c-4f15-45a8-84f5-6ebfd92f71ed.jpg"
              alt="Zen Art Logo"
              className="mx-auto h-52 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-4 uppercase text-gray-700">
            Coming Soon
          </h1>
          <p className="text-base md:text-lg text-gray-500 tracking-wide">
            A new artistic experience is on the horizon.
            <br />
            Please stay connected.
          </p>
        </div>
      </div>
    </>
  );
}
