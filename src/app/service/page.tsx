// ServicesClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTools,
  FaLeaf,
  FaTruckMonster,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Contracting",
    icon: <FaTools />,
    image: "https://ik.imagekit.io/gmjmoldeh/sj/craftsman-at-work-with-tools-on-a-construction-site-in-bright-daylight-photo.jpg?updatedAt=1784022280887?q=80&w=1600&auto=format&fit=crop",
    description:
      "Professional residential and commercial contracting services delivered with quality craftsmanship and attention to detail.",
    items: [
      "General Contracting",
      "Renovations",
      "Framing",
      "Drywall",
      "Painting",
      "Flooring",
      "Finishing",
      "Demolition",
    ],
  },
  {
    id: 2,
    title: "Landscaping",
    icon: <FaLeaf />,
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg?updatedAt=1784022280887?q=80&w=1600&auto=format&fit=crop",
    description:
      "Beautiful outdoor spaces built to increase curb appeal and property value.",
    items: [
      "Sod Installation",
      "Artificial Turf",
      "Interlocking",
      "Retaining Walls",
      "Grading",
      "Drainage",
      "Lawn Care",
      "Seasonal Cleanup",
    ],
  },
  {
    id: 3,
    title: "Mobile Mechanical",
    icon: <FaTruckMonster />,
    image: "https://ik.imagekit.io/gmjmoldeh/sj/IMG_4469.PNG?updatedAt=1784022280887?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reliable on-site repairs and maintenance that keep your equipment running.",
    items: [
      "Equipment Repair",
      "Hydraulic Repair",
      "Diagnostics",
      "Fleet Maintenance",
      "Emergency Service",
      "Preventive Maintenance",
      "Welding",
      "Mobile Repairs",
    ],
  },
];

export default function ServicesClient() {
  const [active, setActive] = useState(services[0]);

  return (
    <main className="bg-[#f7f5ef]">
      <section className="relative h-[65vh] min-h-[800px] overflow-hidden">
        <Image src={active.image} alt={active.title} fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-black/55"/>
        <div className="relative z-10 flex h-full items-center justify-center px-[6%] text-center">
          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
              Our Professional Services
            </span>

            <h1 className="unbounded-font mt-6 text-4xl font-bold text-white md:text-6xl">
              Contracting, Landscaping &
              <span className="block text-[#d7b16d]">Mobile Mechanical</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/85">
              One trusted company for construction, outdoor improvements,
              and mobile mechanical services across Canada.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[6%] py-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#58704e]">
            OUR SERVICES
          </span>
          <h2 className="mt-4 text-5xl font-bold text-[#2f4633]">
            Everything You Need
          </h2>
          <p className="mt-5 text-[#5f6f60]">
            Select one of our core services to explore what we offer.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">
          <div className="space-y-5">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className={`w-full rounded-3xl border p-6 text-left transition ${
                  active.id === service.id
                    ? "border-[#6f8f4e] bg-[#edf3e7]"
                    : "border-[#e6e6e6] bg-white hover:bg-[#fafaf8]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#4f7c57] p-4 text-white text-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2f4633]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[#5f6f60]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <motion.div
            key={active.id}
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="overflow-hidden rounded-[30px] border bg-white shadow-xl"
          >
            <div className="relative h-[340px]">
              <Image src={active.image} alt={active.title} fill className="object-cover"/>
            </div>

            <div className="p-8">
              <h3 className="text-4xl font-bold text-[#2f4633]">{active.title}</h3>

              <p className="mt-5 text-lg text-[#5f6f60]">
                {active.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {active.items.map((item)=>(
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#4f7c57]"/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4f7c57] px-7 py-3 font-semibold text-white"
              >
                Request a Free Quote
                <FaArrowRight/>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-[6%] pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            "Licensed & Insured",
            "Experienced Team",
            "Residential & Commercial",
            "Quality Guaranteed",
          ].map((item)=>(
            <div key={item} className="rounded-3xl bg-white p-8 text-center shadow">
              <FaCheckCircle className="mx-auto mb-4 text-3xl text-[#4f7c57]"/>
              <h4 className="font-bold text-[#2f4633]">{item}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
