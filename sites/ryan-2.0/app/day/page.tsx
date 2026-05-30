import type { Metadata } from "next";
import DaySite from "@/components/ryan/DaySite";

export const metadata: Metadata = {
  title: "Ryan J. — Day Experience",
  description: "Daylight executive chauffeur experience with Ryan J.",
};

export default function DayPage() {
  return <DaySite />;
}
