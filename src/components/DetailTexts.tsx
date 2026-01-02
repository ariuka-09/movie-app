"use client";

import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DetailTexts({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        // Fetch both Info and Credits simultaneously for better performance
        const [infoRes, creditRes] = await Promise.all([
          axiosInstance.get(`movie/${id}?language=en-US`),
          axiosInstance.get(`/movie/${id}/credits?language=en-US`),
        ]);

        // Process the data once here instead of using separate states/effects
        const crew = creditRes.data.crew || [];
        const directors = crew.filter((m: any) => m.job === "Director");
        const writers = crew.filter(
          (m: any) =>
            m.department === "Writing" || m.department === "Screenplay"
        );

        setData({
          info: infoRes.data,
          credits: creditRes.data,
          directors,
          writers,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAllData();
  }, [id]); // Only loops if ID changes (which is what we want)

  if (loading || !data) return <p>Loading...</p>;

  const { info, credits, directors, writers } = data;

  return (
    <div className="flex flex-col gap-5 mt-8">
      {/* Genres */}
      <div className="flex gap-2">
        {info.genres.map((genre: any) => (
          <div key={genre.id} className="border rounded-2xl px-2 text-[12px]">
            {genre.name}
          </div>
        ))}
      </div>

      {/* Overview */}
      <p>{info.overview}</p>

      {/* Directors */}
      <div className="flex gap-3">
        <p className="font-bold">Director</p>
        {directors.map((d: any) => (
          <div key={d.id}>{d.name}</div>
        ))}
      </div>

      {/* Writers */}
      <div className="flex gap-3">
        <p className="font-bold">Writers</p>
        {writers.map((w: any, i: number) => (
          <div key={i}>{w.name}</div>
        ))}
      </div>

      {/* Stars */}
      <div className="flex gap-3">
        <p className="font-bold">Stars</p>
        {credits.cast.slice(0, 3).map((actor: any) => (
          <p key={actor.id}>{actor.name}</p>
        ))}
      </div>
    </div>
  );
}
