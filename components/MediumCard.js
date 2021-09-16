import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 
            transform transition delay-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill" />
      </div>
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

export default MediumCard;
