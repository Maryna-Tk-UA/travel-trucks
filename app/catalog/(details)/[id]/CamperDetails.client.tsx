"use client";

import { getSingleCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import css from "./Camper.module.css";

type CamperDetailsClientProps = {
  id: string;
};

const CamperDetailsClient = ({ id }: CamperDetailsClientProps) => {
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getSingleCamper(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error...</p>;

  const cover = camper.gallery?.[0]?.original || camper.gallery?.[0]?.thumb;
  return (
    <div className={css.card}>
      <div className={css.cover}>
        <Image
          src={cover}
          alt={camper.name}
          className={css.img}
          width={292}
          height={312}
        />
      </div>
      <div className={css.cardContent}>
        <h2>{camper.name}</h2>
        <p>{camper.description}</p>
        <p>{camper.price}</p>
        <p>{camper.location}</p>
      </div>
    </div>
  );
};

export default CamperDetailsClient;
