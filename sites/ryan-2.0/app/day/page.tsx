import type { Metadata } from "next";
import DaySite from "@/components/ryan/DaySite";

export const metadata: Metadata = {
  title: "Ryan Motivates — Day Experience",
  description: "Daylight executive chauffeur experience.",
};

export default function DayPage() {
  return <DaySite />;
}
