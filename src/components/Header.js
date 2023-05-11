import { Link } from "react-router-dom"

const Header=()=>{
    
    return(
        <>
            <div className="nav">
                <img src={require("../images/logo.png")} className="logo" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <div className="dropdown">
                        <button className="dropbtn" >About 
                            
                        </button>
                        <div className="dropdown-content">
                            <li>Our Impact</li>
                            <li ><Link to="/boardmembers">Board Members</Link></li>
                            <li>Press & Mentions</li>
                        </div>
                    </div> 
                    <li>Ways to Help</li>
                    <li>What We DO</li>
                    <Link to="/contactus"><li>Contact Us</li></Link>
                    <li>Blog</li>
                    <li>Donate</li>
                    <li>Shop</li>
                    <li>Cart</li>
                </ul>
            </div>



        </>
    )
}

export default Header