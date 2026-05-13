"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaAngleRight, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import ReactDOMServer from "react-dom/server";

// ✅ Windsor, Ontario, Canada — إحداثيات صحيحة
const areasCoordinates = [
    { name: "Windsor, ON", lat: 42.3149, lng: -83.0364 },
    { name: "LaSalle, ON", lat: 42.2167, lng: -83.0667 },
    { name: "Tecumseh, ON", lat: 42.3167, lng: -82.9167 },
    { name: "Amherstburg, ON", lat: 42.1000, lng: -83.1167 },
    { name: "Kingsville, ON", lat: 42.0333, lng: -82.7333 },
    { name: "Leamington, ON", lat: 42.0500, lng: -82.5833 },
    { name: "Lakeshore, ON", lat: 42.2333, lng: -82.6500 },
    { name: "Essex, ON", lat: 42.1667, lng: -82.8333 },
    { name: "Harrow, ON", lat: 42.0333, lng: -82.9167 },
    { name: "Belle River, ON", lat: 42.2833, lng: -82.7000 },
    { name: "Cottam, ON", lat: 42.1000, lng: -82.7000 },
    { name: "Maidstone, ON", lat: 42.2833, lng: -82.9000 },
];

function MapFlyTo({
    selectedArea,
}: {
    selectedArea: { lat: number; lng: number };
}) {
    const map = useMap();

    useEffect(() => {
        if (!selectedArea) return;
        map.flyTo([selectedArea.lat, selectedArea.lng], 12, { duration: 1.2 });
    }, [selectedArea, map]);

    return null;
}

export default function AreasClient() {
    const [selectedArea, setSelectedArea] = useState(areasCoordinates[0]);

    const markerIcon = useMemo(
        () =>
            new L.DivIcon({
                html: ReactDOMServer.renderToString(
                    <FaMapMarkerAlt size={30} color="#4f7c57" />
                ),
                className: "",
                iconSize: [30, 30],
                iconAnchor: [15, 30],
            }),
        []
    );

    const activeMarkerIcon = useMemo(
        () =>
            new L.DivIcon({
                html: ReactDOMServer.renderToString(
                    <FaMapMarkerAlt size={34} color="#6f8f4e" />
                ),
                className: "",
                iconSize: [34, 34],
                iconAnchor: [17, 34],
            }),
        []
    );

    return (
        <main className="min-h-screen bg-[#f7f5ef] pb-24">
            {/* HERO */}
            <div className="relative overflow-hidden min-h-[460px] lg:min-h-[560px]">
                <div className="absolute inset-0 z-0"

                    style={{
                        backgroundImage:
                            "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg?tr=f-auto,q-auto')",
                    }}>

                </div>

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#08110b]/70 via-[#0f1a12]/45 to-[#08110b]/75" />

                <div className="relative z-20 min-h-[460px] lg:min-h-[560px] px-[6%] pt-32 lg:pt-40 pb-16 flex items-center justify-center">
                    <div className="w-full max-w-5xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md"
                        >
                            Landscaping Service Areas — Windsor, Ontario
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.1 }}
                            className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center unbounded-font leading-tight"
                        >
                            Proudly Serving Windsor & Essex County Communities
                        </motion.h1>

                        <motion.ul
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-8 text-white flex items-center justify-center gap-8 section-list flex-wrap"
                        >
                            <li className="text-sm relative">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-sm relative">
                                <FaAngleRight className="absolute -left-6 top-0.5" />
                                <Link href="/areas-we-serve">Areas We Serve</Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <section className="relative px-[6%] pt-20">
                <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#88a97b]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center max-w-3xl mx-auto mb-14"
                    >
                        <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                            Coverage Map
                        </span>

                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
                            Landscaping Services Across Windsor & Essex County
                        </h2>

                        <p className="mt-4 text-base md:text-lg leading-relaxed text-[#5f6f60]">
                            Select a location to see where we work. We proudly provide
                            professional landscaping, lawn care, sod installation, interlocking,
                            and outdoor improvement services across Windsor, Ontario and all
                            surrounding Essex County communities.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-start">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="rounded-[30px] border border-[#dfe7d7] bg-white/70 p-6 md:p-8 shadow-[0_16px_40px_rgba(32,45,35,0.08)] backdrop-blur-sm">
                                <div className="mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#2f4633]">
                                        Serving Windsor, Ontario & Essex County
                                    </h3>

                                    <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
                                        We proudly offer professional landscaping, lawn care, sod,
                                        interlocking, grading, and drainage services throughout
                                        Windsor and all surrounding Essex County communities. If your
                                        area is not listed, contact us — we may still be able to help.
                                    </p>
                                </div>

                                {/* selected area highlight */}
                                <div className="mb-6 rounded-2xl border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                                        Selected Area
                                    </p>
                                    <h4 className="mt-2 text-xl font-bold text-[#2f4633]">
                                        {selectedArea.name}
                                    </h4>
                                    <p className="mt-1 text-sm text-[#5f6f60]">
                                        Click another location to update the map.
                                    </p>
                                </div>

                                {/* area list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {areasCoordinates.map((area, idx) => {
                                        const isActive = selectedArea.name === area.name;

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedArea(area)}
                                                className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition duration-300 ${isActive
                                                    ? "border-[#88a97b] bg-[#edf3e7] shadow-[0_10px_25px_rgba(34,60,40,0.08)]"
                                                    : "border-[#e7ece1] bg-[#fbfaf7] hover:border-[#cfdcc5] hover:bg-white"
                                                    }`}
                                            >
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isActive
                                                        ? "bg-[#4f7c57] text-white"
                                                        : "bg-[#e8efe2] text-[#4f7c57]"
                                                        }`}
                                                >
                                                    <FaMapMarkerAlt size={14} />
                                                </span>

                                                <div>
                                                    <p
                                                        className={`text-sm font-semibold transition ${isActive ? "text-[#2f4633]" : "text-[#425244]"
                                                            }`}
                                                    >
                                                        {area.name}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-[#728173]">
                                                        Landscaping services available
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT MAP */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="overflow-hidden rounded-[30px] border border-[#dfe7d7] bg-white shadow-[0_16px_40px_rgba(32,45,35,0.08)]">
                                <div className="border-b border-[#edf1e8] px-6 py-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                                        Interactive Map — Windsor, Ontario
                                    </p>
                                    <h3 className="mt-2 text-2xl font-bold text-[#2f4633]">
                                        {selectedArea.name}
                                    </h3>
                                </div>

                                <div className="h-[560px] w-full">
                                    <MapContainer
                                        center={[selectedArea.lat, selectedArea.lng]}
                                        zoom={11}
                                        scrollWheelZoom={false}
                                        className="h-full w-full"
                                    >
                                        <MapFlyTo selectedArea={selectedArea} />

                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                                        {areasCoordinates.map((area, idx) => {
                                            const isActive = selectedArea.name === area.name;

                                            return (
                                                <Marker
                                                    key={idx}
                                                    position={[area.lat, area.lng]}
                                                    icon={isActive ? activeMarkerIcon : markerIcon}
                                                >
                                                    <Popup>
                                                        <strong>{area.name}</strong>
                                                        <br />
                                                        Landscaping services available
                                                    </Popup>
                                                </Marker>
                                            );
                                        })}
                                    </MapContainer>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-[6%] pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto rounded-[32px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 md:p-10 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
                >
                    <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                        <div>
                            <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                                Let&apos;s Talk
                            </span>



                            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#2f4633]">
                                Not sure if we service your area in Essex County?
                            </h3>

                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5f6f60]">
                                Reach out and we&apos;ll confirm landscaping availability for your
                                Windsor or Essex County location and project needs.
                            </p>
                        </div>

                        <div>
                            <Link
                                href="/Contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}