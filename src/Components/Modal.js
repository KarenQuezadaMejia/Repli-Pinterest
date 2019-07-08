import React from 'react';
import '../CSS/Modal.css';


function Modal (props){
return(
    <div className="fatherModal" onClick={(event)=>{
        if(event.target.getAttribute("class")==="fatherModal"){
            props.closeModal()
        }
    }}>
        <div className="childModal">
        <i class="fas fa-ellipsis-h" id="dotmodal"></i>
        <img  id="imgModal" src={props.seeImg} alt="imgApi"/>
       
        </div>
    </div>
)

}
export default Modal;