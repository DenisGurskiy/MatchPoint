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
    <div className="col-span-4 text-gray100Primary flex flex-col gap-y-[8px]">
      <div className="w-full h-[220px] relative rounded-[24px] overflow-hidden col-span-full">
        <Image
          src={`/photos/${image}`}
          alt="Main picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="font-semibold col-span-full">{title}</h3>
      <p className="text-gray50 text-[14px] font-normal col-span-full">
        {description}
      </p>
    </div>
  );
};
