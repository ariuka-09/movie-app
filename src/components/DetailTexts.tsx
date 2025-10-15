import { axiosInstance } from "@/lib/utils";

export async function DetailTexts({ id }: { id: string }) {
  const getInfo = async () => {
    const info = await axiosInstance.get(`movie/${id}?language=en-US`);

      return info.data;
  };    
   const info = await getInfo();

  const getCreditInfo = async () => {
    const creditInfo = await axiosInstance.get(
                `/movie/${id}/credits?language=en-US`
    );
    return creditInfo.data;
  };
  const creditInfo = await getCreditInfo();

  const getDirectors = () => {
    const directors = creditInfo.crew.filter((member: { job: string }) => {
      if (member.job === "Director") {
        return true;
      }
    });
    console.log(creditInfo);
    return directors;
  };
  const directors = getDirectors();

  const getWriters = () => {
    const directors = creditInfo.crew.filter(
      (member: { department: string }) => {
        if (member.department === "Screenplay") {
          return true;
        }
      }
    );
    console.log("writers", directors);
    return directors;
  };
  const writers = await getWriters();

  return (
    <div className="flex flex-col gap-5 mt-8">
      <div className="flex gap-2">
        {info.genres.map((genre: { name: string }) => {
          return (
            <div key={Math.random()} className="border rounded-2xl px-2 text-[12px] ">
              {genre.name}
            </div>
          );
        })}
      </div>
      <div>
        <p>{info.overview} </p>
      </div>
      <div className="flex gap-3">
        <p>Director</p>
        {directors.map((director: { name: string }) => {
          return <div key={Math.random()} >{director.name}</div>;
        })}
      </div>
      <div className="flex gap-3">
        <p>Writers</p>
        {writers.map((writer: { name: string }) => {
          return <div key={Math.random()} >{writer.name} </div>;
        })}
      </div>
      <div className="flex gap-3">
        <p>Stars</p>
        {creditInfo.cast[0]? <p>{creditInfo.cast[0].name} </p>: null}
        {creditInfo.cast[1]? <p>{creditInfo.cast[1].name} </p>: null}
        {creditInfo.cast[2]? <p>{creditInfo.cast[2].name} </p>: null}
       
      
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
