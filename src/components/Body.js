import { useState } from "react"

export default function Body(){
    const [subscribeData,setSubscribeData]=useState({firstname:"",lastname:"",email:""})

    function handleSubmit(e){
        e.preventDefault()
        for(let i=0;i<3;i++){
            let fieldName=e.target[i].name;
            let value=e.target[i].value;
            setSubscribeData((prevData)=>({
                ...prevData,
                [fieldName]:value
            }))
        }
    }
    console.log(subscribeData);
    return(
        <>
            <div className="imgdiv">
                <img className="img" src={require("../images/home.png")} alt="home" />
                <div className="txt">
                    <p className="headingtxt">
                        FORGING NEW LIVES FOR INDIA’S FORGOTTEN ANIMALS 
                    </p>
                    <p className="para">
                        SAFI is a 501(c)3 charitable organization founded by Ujwala Chintala in Florida, USA to fight for India’s animals.
                         We are shelter and foster focussed, working to build a strong, compassionate animal welfare network in Hyderabad, India, providing shelter infrastructure, vet care, supplies, guidance, resources, education, and manpower.
                    </p>
                </div>
            </div>
            <div className="subscribe">
                <p>Subscribe to SAFI for news updates!</p>
                <form className="form" onSubmit={handleSubmit}> 
                    <input type="text" name="email" placeholder="EMAIL" />
                    <input type="text" name="firstname" placeholder="FIRSTNAME"/>
                    <input type="text" name="lastname" placeholder="LASTNAME" />
                    <button className="subscribe-btn">Subscribe</button>
                </form>
            </div>
            <div className="footer">
                <img src={require('../images/fb.jpg')} alt="" />
                <img src={require('../images/linkedin.jpg')} alt="" />
                <img src={require('../images/insta.jpg')} alt="" />
                <img src={require('../images/twitter.jpg')} alt="" />
                <img src={require('../images/youtube.jpg')} alt="" />
            </div>
        </>
    )
}