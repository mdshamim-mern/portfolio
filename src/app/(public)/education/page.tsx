import type { Metadata } from "next";
import EducationSection from "@/components/sections/EducationSection";

export const metadata: Metadata = {
  title: "Education | Md Shamim",
  description: "Md Shamim's education: BSc in Computer Science and Engineering at Daffodil International University and earlier academic qualifications.",
};

export default function EducationPage() {
  return <EducationSection standalone />;
}
