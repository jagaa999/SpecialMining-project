import React from "react";

export default function Overview() {
    return (
        <section className="bg-[#f5f6f8] py-20 px-6">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-[#c8102e] text-2xl md:text-3xl font-bold uppercase mb-6">
                    Overview
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-12 max-w-4xl mx-auto">
                    Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized
                    in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our
                    clients’ interest.
                </p>
                <div className="flex justify-center">
                    <video
                        controls
                        className="w-full max-w-6xl rounded-lg shadow-xl"
                        poster="https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg"
                    >
                        <source src="https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
