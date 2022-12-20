import React from 'react';
import ReactDOM from 'react-dom/client'

function Image(){
    return(
        <img src={`./Images${props.img}`} alt ={"Missing"} className="img"/>
    )
}
export default Image;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Image/>)

