import React from 'react';
import '../CSS/Images.css';

function Images(props) {

    return (
        <div id="imgCard"><img onClick={() => props.doClick(props.url)} id="borderImg" src={props.url} alt="imgApi">
        </img>
        <i class="fas fa-ellipsis-h" id="dotImg"></i>
        </div>
        
    )


}

export default Images;

