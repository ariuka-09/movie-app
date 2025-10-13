import { Movie } from "@/components/MovieCard";
import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
import { Divide } from "lucide-react";

type searchPageProps ={
    searchParams : Promise<{value:string; page:number} >
}

export default async function Home ({searchParams}:searchPageProps){
    const params = await searchParams
    const value = params.value
    const page = params.page
    const getMoviesBySearch = async () =>{
        const moviesBySearch = await axiosInstance.get(`/search/movie?query=${value}&language=en-US&page=${page}`)
    return moviesBySearch.data.results;
    }
const moviesBySearch = await getMoviesBySearch();
console.log(moviesBySearch)
    return(
        <div className="flex flex-wrap gap-10">
            {
               moviesBySearch.map((movieBySearch: MovieType)=>{
                return(
                    <div>
                        <Movie movie={movieBySearch}></Movie>
                    </div>
                )
               })
                
            }
           
        </div>
    )
}