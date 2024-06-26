import { Metadata } from "next";
import { BlockPrivacy } from "@/components/StaticBlocks/BlockPrivacy";

export const metadata: Metadata = {
  title: "Privacy Policy | SportSpace",
  description: "Privacy Policy",
};

export default function Privacy() {
  return <BlockPrivacy />;
}
