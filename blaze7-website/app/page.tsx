"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Box, Check, Lock, CircleHelp, Play } from "lucide-react";

// --- DATA ---
const SHORTS = [
  { id: "Uaz-o9MDDfo", title: "BLAZE7 Football Edit" },
  { id: "g6QOjkb0XyA", title: "BLAZE7 Football Edit" },
  { id: "Vbp69pRnDk8", title: "BLAZE7 Football Edit" },
  { id: "6qiUrpIY38o", title: "BLAZE7 Football Edit" },
  { id: "APXKnUo83ZM", title: "BLAZE7 Football Edit" },
  { id: "KqHOq3kI-gc", title: "BLAZE7 Football Edit" },
  { id: "HAp7jGWcvJM", title: "Klopp's brilliant comeback" },
  { id: "yJQKbMe5M3s", title: "I'm Quitting YouTube" },
]; // Exactly 8 videos as requested

const STEPS = [
  { num: "1", title: "Subscribe", desc: "Must be an active subscriber to @BLAZE7_2k." },
  { num: "2", title: "Drop a Comment", desc: "Comment on the 5K video drop to get notified." },
  { num: "3", title: "Download Pack", desc: "Access the direct Google Drive link posted on milestone day." },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function BlazeLandingPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-white font-sans overflow-x-hidden relative selection:bg-[#00f0ff] selection:text-black">

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
          className="absolute top-[-10%] left-[15%] w-75 md:w-125 h-75 md:h-125 bg-[#00f0ff] rounded-full blur-[120px] opacity-30"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const, delay: 2 }}
          className="absolute bottom-[-10%] right-[15%] w-100 md:w-150 h-100 md:h-150 bg-[#8b5cf6] rounded-full blur-[120px] opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* HEADER */}
        <header className="flex justify-between items-center py-5 sticky top-4 z-50 bg-[#05070e]/75 backdrop-blur-xl border border-white/10 rounded-2xl px-6 shadow-2xl mt-4">
          <div className="text-2xl md:text-3xl font-black tracking-widest bg-linear-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            BLAZE7
          </div>
          <a
            href="https://www.youtube.com/@BLAZE7_2k?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-linear-to-r from-[#00f0ff] to-[#8b5cf6] text-black font-extrabold px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300"
          >
            <Play size={20} />
            <span className="hidden sm:block">Subscribe</span>
          </a>
        </header>

        {/* HERO SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center pt-24 pb-16"
        >
          <motion.div variants={fadeUp} className="inline-block px-5 py-1.5 mb-8 bg-[#00f0ff]/10 border border-[#00f0ff]/40 rounded-full text-[#00f0ff] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            🔥 Exclusive Creator Asset Drop
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight uppercase tracking-wide">
            Football Edits & <br />
            <span className="bg-linear-to-r from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">AE Pack Giveaways</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto mb-16">
            High-energy edits, cinematic sound design, and free After Effects editing packs for the community.
          </motion.p>

          {/* PROGRESS BAR */}
          <motion.div variants={fadeUp} className="bg-[#0d111f]/65 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 max-w-3xl mx-auto hover:border-[#00f0ff]/30 hover:shadow-[0_20px_50px_rgba(0,240,255,0.1)] transition-all duration-500">
            <div className="flex justify-between items-end mb-4">
              <span className="flex items-center gap-2 font-bold text-lg md:text-xl">
                <Trophy className="text-[#00f0ff]" /> 5K Milestone
              </span>
              <span className="text-[#00f0ff] font-bold text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                2,410 <span className="text-sm text-white/50">/ 5,000 Subs</span>
              </span>
            </div>
            <div className="w-full h-5 bg-white/5 rounded-full p-1 border border-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "48%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                className="h-full bg-linear-to-r from-[#00f0ff] to-[#8b5cf6] rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              />
            </div>
            <div className="flex justify-between mt-4 text-[#94a3b8] text-xs md:text-sm font-medium">
              <span>Current Goal: 5K AE Pack</span>
              <span>Next Goal: 10K Secret Pack</span>
            </div>
          </motion.div>
        </motion.section>

        {/* GIVEAWAY TIERS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-3">Giveaway Tiers</h2>
            <p className="text-[#94a3b8]">Unlock community editing packs as the channel reaches milestones.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 5K Unlocked Card */}
            <motion.div variants={fadeUp} className="relative bg-[#0d111f]/65 backdrop-blur-md border border-[#00f0ff]/30 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,240,255,0.08)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,240,255,0.2)] transition-all duration-300">
              <div className="absolute top-6 right-6 bg-[#00f0ff] text-black text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                Unlocks at 5K
              </div>
              <Box size={40} className="text-[#00f0ff] mb-6" />
              <h3 className="text-2xl font-bold mb-2">5K BLAZE7 AE Pack</h3>
              <p className="text-[#94a3b8] text-sm mb-6">Designed specifically for football & sports editors looking to elevate their workflow.</p>
              <ul className="space-y-3 mb-8">
                {["Custom CC (Color Correction) Presets", "Shake & Flash Effect Presets", "High-Quality Text Animation Styles", "Signature Overlays & Sound FX"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white/90">
                    <Check size={18} className="text-[#00f0ff] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="https://www.youtube.com/@BLAZE7_2k?sub_confirmation=1" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 w-full bg-linear-to-r from-[#00f0ff] to-[#8b5cf6] text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform">
                Subscribe to Unlock
              </a>
            </motion.div>

            {/* 10K Locked Card */}
            <motion.div variants={fadeUp} className="relative bg-[#0d111f]/65 backdrop-blur-md border border-[#8b5cf6]/30 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(139,92,246,0.2)] transition-all duration-300">
              <div className="absolute top-6 right-6 bg-[#8b5cf6] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                Locked — 10K
              </div>
              <Lock size={40} className="text-[#8b5cf6] mb-6" />
              <h3 className="text-2xl font-bold mb-2">10K Ultimate Vault</h3>
              <p className="text-[#94a3b8] text-sm mb-6">The ultimate editing suite release once we reach the 10,000 subscriber milestone.</p>
              <ul className="space-y-3 mb-8">
                {["Secret Project File (.aep) Reveal", "Complete Sound Design Library", "Top-Tier Smooth Velocity Presets", "Exclusive 4K Football Clips Folder"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white/50">
                    <CircleHelp size={18} className="text-[#8b5cf6] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="w-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] font-bold text-sm text-center py-3 rounded-xl">
                🔒 Unlocks Automatically at 10,000 Subs
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FEATURED EDITS (Exactly 8 shorts in a perfectly responsive grid) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-3">Featured Edits</h2>
            <p className="text-[#94a3b8]">Check out some of our top viral football edits directly from YouTube.</p>
          </motion.div>

          {/* Grid rules: 1 col on mobile, 2 cols on tablet, 4 cols on desktop = ALWAYS equal rows for 8 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHORTS.map((short, index) => (
              <motion.a
                key={index}
                variants={fadeUp}
                href={`https://youtube.com/shorts/${short.id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-9/16 bg-[#0d111f] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00f0ff] transition-all duration-300 shadow-xl"
              >
                <img
                  src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                  alt={short.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#05070e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                  <Play size={48} className="text-red-500 fill-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]" />
                  <span className="font-bold tracking-widest uppercase text-sm">Watch Short</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* HOW TO CLAIM STEPS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24 bg-[#0d111f]/65 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-wide mb-3">How To Claim</h2>
            <p className="text-[#94a3b8]">Follow these simple steps to ensure you get the download link when we hit 5K.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STEPS.map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                <div className="w-14 h-14 mx-auto bg-linear-to-br from-[#00f0ff] to-[#8b5cf6] text-black font-black text-xl rounded-full flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center py-10 border-t border-white/10 text-[#94a3b8] text-sm">
          <p className="mb-2">© {new Date().getFullYear()} BLAZE7. Built for football editors worldwide.</p>
          <div className="space-x-3">
            <a href="https://www.youtube.com/@BLAZE7_2k" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">YouTube Channel</a>
            <span>•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#00f0ff] hover:underline hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
              Back to top
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}