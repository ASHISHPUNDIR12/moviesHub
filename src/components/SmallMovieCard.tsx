interface SmallMoviesCardInterface {
  title: string;
  year: string;
  imageId: string;
  imbId?: string;
  onCardClick :(id :string)=> void 
}
const SmallMovieCard = ({ title, year, imageId,imbId ,onCardClick }: SmallMoviesCardInterface) => {

  const smallTitle = title.split(" ")[0];
  const alternateImage =
    "https://plus.unsplash.com/premium_photo-1670210080045-a2e0da63dd99?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <div onClick={()=>{
       if(imbId){
        onCardClick(imbId)
       }
      }} className="flex border-b  border-blue-950 p-2 gap-10 m-1 scroll-m-0 hover:bg-indigo-300/20 rounded ">
        <div className="w-16">
          <img
            src={imageId === "N/A" ? alternateImage : imageId}
            alt={smallTitle}
            className="w-16 h-20 object-cover rounded"
          />
        </div>
        <div className="text-center">
          <h1 className="font-semibold ">{title}</h1>
          <h2>{year}</h2>
        </div>
      </div>
    </div>
  );
};

export default SmallMovieCard;
  