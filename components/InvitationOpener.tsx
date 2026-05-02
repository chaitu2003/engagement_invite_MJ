"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationOpener({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1450);
  };

  return (
    <AnimatePresence>
      <motion.main
        className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#171715] px-4 py-6 text-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5d5140_0%,transparent_34%),radial-gradient(circle_at_bottom,#2b241e_0%,transparent_38%)] opacity-80" />

        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: opening ? 0.96 : 1, y: opening ? -8 : 0, scale: opening ? 1.02 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto flex aspect-[4/5] w-full max-w-[23rem] items-center justify-center overflow-hidden rounded-[2rem] border border-[#d8c39b]/40 bg-[#252521] shadow-2xl sm:max-w-[28rem]"
        >
          {/* Gift-card inspired premium pattern, created with CSS only */}
          <div className="absolute inset-0 opacity-95 [background-image:radial-gradient(circle_at_20%_22%,rgba(236,214,170,.38)_0_2px,transparent_3px),radial-gradient(circle_at_70%_72%,rgba(236,214,170,.28)_0_2px,transparent_3px),linear-gradient(45deg,transparent_46%,rgba(236,214,170,.28)_47%_53%,transparent_54%),linear-gradient(-45deg,transparent_46%,rgba(236,214,170,.22)_47%_53%,transparent_54%)] [background-size:92px_92px,120px_120px,78px_78px,90px_90px]" />

          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(248,236,211,.18)_1px,transparent_1px),linear-gradient(0deg,rgba(248,236,211,.14)_1px,transparent_1px)] [background-size:72px_72px]" />

          {/* Invitation copy underneath the ribbon */}
          <motion.div
            initial={false}
            animate={{ opacity: opening ? 1 : 0.18, scale: opening ? 1 : 0.96 }}
            transition={{ duration: 0.8, delay: opening ? 0.55 : 0 }}
            className="relative z-10 rounded-[1.6rem] border border-[#ead8b5]/35 bg-[#fff7ea]/95 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-9 sm:py-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#81552f]">
              Engagement Invitation
            </p>

            <h1 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[#30231d] sm:text-5xl">
              Jagadeesh <span className="text-[#8b5a35]">&</span> Moukthika
            </h1>

            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#5d4639] sm:text-base">
              The <strong>ANNAM</strong> and <strong>CHEKKA</strong> families invite you to celebrate this beautiful beginning.
            </p>

            <p className="mt-6 font-playfair text-2xl text-[#8b5a35]">10th May 2026</p>
          </motion.div>

          {/* Ribbon pieces unwrap when clicked */}
          <motion.button
            type="button"
            onClick={handleOpen}
            aria-label="Tap the ribbon to reveal the invitation"
            className="absolute inset-0 z-30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#f0d7ab]/60"
            disabled={opening}
          >
            <motion.span
              className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 bg-gradient-to-r from-[#fff6df] via-[#f0d7ab] to-[#fff2d5] shadow-[0_0_28px_rgba(0,0,0,.25)] sm:w-24"
              animate={{ y: opening ? "-115%" : "0%", opacity: opening ? 0 : 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.span
              className="absolute left-0 top-1/2 h-20 w-1/2 -translate-y-1/2 bg-gradient-to-b from-[#fff6df] via-[#f0d7ab] to-[#fff2d5] shadow-[0_0_28px_rgba(0,0,0,.25)] sm:h-24"
              animate={{ x: opening ? "-115%" : "0%", rotate: opening ? -7 : 0, opacity: opening ? 0 : 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.span
              className="absolute right-0 top-1/2 h-20 w-1/2 -translate-y-1/2 bg-gradient-to-b from-[#fff6df] via-[#f0d7ab] to-[#fff2d5] shadow-[0_0_28px_rgba(0,0,0,.25)] sm:h-24"
              animate={{ x: opening ? "115%" : "0%", rotate: opening ? 7 : 0, opacity: opening ? 0 : 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Bow */}
            <motion.span
              className="absolute left-1/2 top-1/2 flex h-28 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-32 sm:w-48"
              animate={{ scale: opening ? 0.45 : 1, rotate: opening ? -18 : 0, opacity: opening ? 0 : 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="absolute left-2 h-20 w-24 rounded-[60%_35%_50%_40%] bg-gradient-to-br from-[#fff8e8] via-[#f0d7ab] to-[#d7ad78] shadow-lg" />
              <span className="absolute right-2 h-20 w-24 rounded-[35%_60%_40%_50%] bg-gradient-to-bl from-[#fff8e8] via-[#f0d7ab] to-[#d7ad78] shadow-lg" />
              <span className="absolute h-12 w-14 rounded-2xl bg-gradient-to-br from-[#fff8e8] via-[#e7c28d] to-[#b87d46] shadow-lg" />
            </motion.span>

            <motion.span
              className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#fff2d5] backdrop-blur-sm"
              animate={{ opacity: opening ? 0 : 1, y: opening ? 16 : 0 }}
              transition={{ duration: 0.35 }}
            >
              Tap Ribbon to Reveal
            </motion.span>
          </motion.button>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}
