"use client";

import { FaCar, FaTools, FaCogs, FaWrench } from "react-icons/fa";

export default function MobileMechanicalSection() {
  return (
    <section className="bg-white py-24 px-[6%]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#e8eef2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f4633]">
            Mobile Mechanical Services
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]">
            On-Site Mechanical Repair & Maintenance
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[#5f6f60]">
            Fast and reliable mobile mechanical services delivered directly to your location across Canada.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-[#e5e5e5] p-6 text-center hover:shadow-lg transition">
            <FaCar className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-lg font-semibold text-[#2f4633]">
              Vehicle Diagnostics
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              Quick on-site diagnosis for mechanical issues.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] p-6 text-center hover:shadow-lg transition">
            <FaTools className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-lg font-semibold text-[#2f4633]">
              Repair Services
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              General mechanical repairs at your location.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] p-6 text-center hover:shadow-lg transition">
            <FaCogs className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-lg font-semibold text-[#2f4633]">
              Engine Services
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              Engine tuning, maintenance, and performance checks.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] p-6 text-center hover:shadow-lg transition">
            <FaWrench className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-lg font-semibold text-[#2f4633]">
              Emergency Support
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              Fast response mobile mechanical assistance when you need it most.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}