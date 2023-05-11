import { BoardData } from "./BoardData"
import BoardMemberCard from "./BoardMemberCard"

const Board=()=>{
    const imgg="../images/board/"
    return(
        <>
            <div className="cards">
                {BoardData.map((data)=>(<BoardMemberCard data={data} /> ))} 
            </div>          
        </>
    )
}

export default Board