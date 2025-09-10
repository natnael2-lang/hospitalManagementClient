import profile from "./profile.avif";
import hospital from "../images/hospital-gif.gif"
import "./card.css";
function Card(props){
    return (
        <>
        <div className="content">
            <div className="message">
                <label htmlFor="title">{props.type}</label><br />
                <textarea name="title" placeholder="Title of Content"></textarea>
                
            </div>

            <div className="card">
                
                <img className="card-image" src={props.image} alt="profile picture"/>
                
                {props.isVisible ? (<div className="image-select"><input type="file"  /> </div>) : 
                (<div className="textcard"></div>) }
                
            </div>

            <div className="message">
                <label htmlFor="text_to_display"><h3>Text Area</h3></label><br />
                <textarea name="text_to_display" placeholder="Enter the message you want to display."></textarea>
            </div>

            <div className='button'>
                <button className='publish-button'>publish</button>
            </div>
        </div>
        </>
    );
}
export default Card