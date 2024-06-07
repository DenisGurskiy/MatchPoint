import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export const NewCardBlock: React.FC<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="md:col-span-4 sm:col-span-1 col-span-full text-gray100Primary flex flex-col gap-y-[8px]">
      <div className="w-full h-[220px] relative rounded-[24px] overflow-hidden col-span-full">
        <Image
          className="hover:scale-[1.1] transition duration-300 ease-in-out"
          src={`/photos/${image}`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="font-semibold col-span-full">{title}</h3>
      <p className="text-gray50 text-[14px] font-normal col-span-full">
        {description}
      </p>
    </div>
  );
};
