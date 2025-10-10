import { Movie } from "@/components/MovieCard";
import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";

export default async function genrePageDynamic ({params}: {params:Promise<{id:string}>}){
const {id} = await params;
let page = 1;
const getMoviesByGenre = async () => {
    const moviesByGenre = await axiosInstance.get(`/discover/movie?language=en&with_genres=${id}&page=${page}`)
    return moviesByGenre.data.results;
}
const moviesByGenre = await getMoviesByGenre()
console.log(moviesByGenre)
return(
    <div className="flex flex-wrap gap-8">
        {moviesByGenre.map((movieByGenre:MovieType )=>{
            return(
                <Movie movie={movieByGenre} key={Math.random()} />

            )
     
        })}
    </div>  
)
} 