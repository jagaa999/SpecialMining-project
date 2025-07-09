"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextBody from "atomv2/components/Text/TextBody";

export default function DefaultHomePage() {
  return (
    <>
      <BlockDiv className="bg-white h-screen w-screen flex items-center justify-center text-gray-800">
        <BlockDiv className="text-center px-4 max-w-xl">
          <BlockDiv className="mb-5 animate-fade-in">
            <img
              src="https://cdn.moto.mn/moto/landing/13_zenart/9fe1219c-4f15-45a8-84f5-6ebfd92f71ed.jpg"
              alt="Zen Art Logo"
              className="mx-auto h-52 w-auto"
            />
          </BlockDiv>
          <TextBody
            className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-4 uppercase text-gray-700"
            as="h1">
            Coming Soon
          </TextBody>
          <TextBody className="text-base md:text-lg text-gray-500 tracking-wide">
            A new artistic experience is on the horizon.
            <br />
            Please stay connected.
          </TextBody>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
