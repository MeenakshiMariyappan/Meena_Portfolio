import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="w-full max-xs:h-52 h-80"
      />

      <div className="relative p-4 h-full">
        <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
        <p className="mt-2 text-gray-300 text-center">{description}</p>
      </div>
    </Link>
  );
};
