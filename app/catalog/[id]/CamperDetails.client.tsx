"use client";

import { getSingleCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const CamperDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

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
  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <p>{camper.price}</p>
      <p>{camper.location}</p>
    </div>
  );
};

export default CamperDetailsClient;
