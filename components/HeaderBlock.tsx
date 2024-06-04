import Image from "next/image";

type Props = {
  image: string;
  children: React.ReactNode;
}

export const HeaderBlock: React.FC<Props> = ({ image, children }) => {
  return (
    <div className="w-full full_height relative flex justify-center">
      <Image
        src={`/photos/${image}.jpg`}
        alt="Main picture"
        fill
        style={{ objectFit: "cover" }}
      />
      {children}      
    </div>
  );
};
