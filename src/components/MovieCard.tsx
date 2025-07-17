interface MovieCardTpe  {
    title : string
    year : string 
    imageId : string
}
const MovieCard = ({title, year , imageId }:MovieCardTpe) => {
  return (
    <div>
        <div className="border border-blue-950 ">
            <div className="sm:h-90 w-full overflow-hidden"><img className=" h-full w-full object-contain" src={imageId} alt="image of movie" /></div>
            <h1>{title} </h1>
            <h3>{year}</h3>
        </div>
    </div>
  )
}

export default MovieCard