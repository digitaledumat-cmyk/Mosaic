import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Channels from "@/components/Channels";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import SeoCities from "@/components/SeoCities";
import CTA from "@/components/CTA";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ReviewsJsonLd from "@/components/seo/ReviewsJsonLd";

const FAQ = dynamic(() => import("@/components/FAQ"));

export default async function HomePage() {
  setRequestLocale("fr");

  return (
    <>
      <FaqJsonLd />
      <ReviewsJsonLd />
      <Hero />
      <Channels />
      <Pricing />
      <HowItWorks />
      <Reviews />
      <WhyUs />
      <FAQ />
      <SeoCities />
      <CTA />
    </>
  );
}
