import React from 'react'
import "../Components/huskie.css"
import husk from "./Images/huskie_6.jfif"


function Huskie(props){
    return(
    <div className="huskie_container">
        <div className = "huskie_content">
            <span className="span">
                <div className= "image">
                     <img src={husk} alt ={"Missing"} className="img"/>
                    </div>
                <div className='cont'>
                   <p>{`Name: ` + props.owner}</p>
                   <p> {`Contact:` + props.contact}</p>
                   <p>{`Email:`+ props.email}</p>
                </div>
            </span>
        </div>
    </div>
    )
}

export default Huskie;