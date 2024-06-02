import { HeaderBlock } from "@/components/HeaderBlock";
import { BlockAbout } from "@/components/BlockAbout";
import { BlockFAQs } from "@/components/BlockFAQs";
import { BlockGetInTouch } from "@/components/BlockGetInTouch";

export default function About() {
  return (
    <>
      <HeaderBlock image="block_about">
        <div className="absolute h-full flex items-center">
          <h1 className="text-[40px] font-semibold text-white leading-[48px]">
            About our sports ground booking platform
          </h1>
        </div>
      </HeaderBlock>
      <BlockAbout />
      <BlockFAQs />
      <BlockGetInTouch />
    </>
  );
}
