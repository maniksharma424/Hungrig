


const SuggestedResturantCard = ({foodItem})=>{
return(
    <>
    
        <div  className="Suggsted-Item hover:cursor-pointer flex justify-start items-center px-5  my-[15px] ">
            <div className="Suggested-Item-Image ">
                <img className="w-[65px] h-[60px] rounded-md bg-contain bg-no-repeat bg-center" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${foodItem?.cloudinaryId}`} />
            </div>
            <div className="Suggested-Item-Info ml-5 ">
                <p className="text-[15px]">{foodItem?.text}</p>
                <p className="text-[10px] decoration-[#cacfe9]">{foodItem?.type.toLowerCase()}</p>
            </div>
        </div>
    </>
)
}
export default SuggestedResturantCard