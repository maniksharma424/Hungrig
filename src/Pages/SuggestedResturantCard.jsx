import "../CSS/SuggestedResturantCard.css"


const SuggestedResturantCard = ({foodItem})=>{
return(
    <>
    
        <div  className="Suggsted-Item">
            <div className="Suggested-Item-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${foodItem?.cloudinaryId})`,"height":"100px","width":"100px"}}>
            </div>
            <div className="Suggested-Item-Info">
                <p>{foodItem?.text}</p>
                <p>{foodItem?.type}</p>
            </div>
        </div>
    </>
)
}
export default SuggestedResturantCard