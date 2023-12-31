import Image from "next/image";
import { CardsProps } from "../../interfaces/interfaces";

export const Cards = ({
  cloud,
  image,
  title,
  description,
  Bgcolor,
  color,
}: CardsProps) => {
  console.log(color.substring(0, 4));
  return (
    <div className="w-[266px] h-[768px] rounded-[13px] flex relative backdrop-brightness-125">
      <Image
        width={100}
        height={100}
        src={cloud}
        className="absolute w-[185px] h-[67px] rotate-180"
        alt=""
      />
      <div className=" mt-32 w-full flex flex-col items-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
          <Image width={100} height={100} src={image} alt="" />
        </div>
        <div className="pt-[30px] text-center text-white px-[36px] flex flex-col gap-8">
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
      <Image
        width={185}
        height={185}
        src={cloud}
        className="absolute w-[185px] h-[67px] bottom-[0px] right-[0px]"
        alt=""
      />
      <button
        style={{ color: color, backgroundColor: Bgcolor }}
        className={`absolute bottom-[-25px] transition-colors hover:brightness-105 py-3 font-bold px-4 rounded-full left-[12%]`}
      >
        Solicitar um Orçamento
      </button>
    </div>
  );
};
