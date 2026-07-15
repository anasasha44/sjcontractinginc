"use client";

import { FaTools, FaHardHat, FaBuilding } from "react-icons/fa";

export default function ContractingSection() {
  return (
    <section className="bg-white py-24 px-[6%]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#e8eef2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f4633]">
            Contracting Services
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]">
            Reliable Construction & Contracting Solutions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[#5f6f60]">
            We deliver high-quality contracting services for residential and commercial projects across Canada.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-[#e5e5e5] p-8 text-center hover:shadow-lg transition">
            <FaHardHat className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-xl font-semibold text-[#2f4633]">
              Site Preparation
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              Professional groundwork and site setup for all construction projects.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] p-8 text-center hover:shadow-lg transition">
            <FaTools className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-xl font-semibold text-[#2f4633]">
              General Contracting
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              Full-service contracting for residential and commercial builds.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] p-8 text-center hover:shadow-lg transition">
            <FaBuilding className="mx-auto text-4xl text-[#3f6b4b]" />
            <h3 className="mt-4 text-xl font-semibold text-[#2f4633]">
              Project Management
            </h3>
            <p className="mt-2 text-sm text-[#5f6f60]">
              From planning to execution, we manage your project end-to-end.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}