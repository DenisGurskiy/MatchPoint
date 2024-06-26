import { Metadata } from "next";
import { BlockTerms } from "@/components/StaticBlocks/BlockTerms";

export const metadata: Metadata = {
  title: "Terms | SportSpace",
  description: "Terms of Use",
};

export default function Terms() {
  return <BlockTerms />;
}
