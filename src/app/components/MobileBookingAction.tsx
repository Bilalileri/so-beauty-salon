"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

type MobileBookingActionProps = {
  whatsappUrl: string;
};

export function MobileBookingAction({ whatsappUrl }: MobileBookingActionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-booking-hero]");
    const footer = document.querySelector("[data-booking-footer]");
    const suppressZones = [...document.querySelectorAll("[data-booking-suppress]")];

    if (!hero || !footer) return;

    let heroVisible = true;
    let footerVisible = false;
    const visibleSuppressZones = new Set<Element>();

    const update = () => setVisible(!heroVisible && !footerVisible && visibleSuppressZones.size === 0);
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    }, { threshold: 0.08 });
    const footerObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    }, { threshold: 0.02 });
    const suppressObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSuppressZones.add(entry.target);
        else visibleSuppressZones.delete(entry.target);
      });
      update();
    }, { threshold: 0.08 });

    heroObserver.observe(hero);
    footerObserver.observe(footer);
    suppressZones.forEach((zone) => suppressObserver.observe(zone));

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
      suppressObserver.disconnect();
    };
  }, []);

  return (
    <a
      className="rose-mobile-booking"
      data-mobile-booking
      data-visible={visible ? "true" : "false"}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>Termin über WhatsApp</span>
      <ArrowUpRight />
    </a>
  );
}
