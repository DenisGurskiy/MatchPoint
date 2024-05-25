import { SearchForm } from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-[74px] w-full h-[600px] relative flex justify-center">
        <Image
          src="/images/home_bg.jpg"
          alt="Main picture"
          layout="fill"
          objectFit="cover"
        />
        <SearchForm />
      </div>

      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
    </>
  );
}
