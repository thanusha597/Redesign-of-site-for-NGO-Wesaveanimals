const Contactus=()=>{
    return(
        <>
            <div className="contact">
                <div className="card-contact">
                    <img src={require('../images/contact/adoptionfff.png')} alt="" />
                    <button className="linkk"><a href="https://form.typeform.com/to/wZxfyDaw">Adoption Application</a></button>
                </div>

                <div className="card-contact">
                    <img src={require('../images/contact/seri.png')} alt="" />
                    <button className="linkk"><a href="https://form.typeform.com/to/mcNq0oDr">Request Sterilization</a></button>
                </div>

                <div className="card-contact">
                    <img src={require('../images/contact/cruff.png')} alt="" />
                    <button className="linkk"><a href="https://form.typeform.com/to/kAzdXy5Q">Report Animal Crime</a></button>
                </div>

                <div className="card-contact">
                    <img src={require('../images/contact/surenderffffff.png')} alt="" />
                    <button className="linkk"><a href="https://form.typeform.com/to/x8YsjQ54">Surrender Pet Form</a></button>
                </div>
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

export default Contactus;