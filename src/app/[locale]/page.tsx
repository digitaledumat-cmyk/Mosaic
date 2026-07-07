import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Channels from "@/components/Channels";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import WheelOfFortune from "@/components/wheel/WheelOfFortune";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import SeoCities from "@/components/SeoCities";
import CTA from "@/components/CTA";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import ReviewsJsonLd from "@/components/seo/ReviewsJsonLd";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
      <WheelOfFortune />
    </>
  );
}
