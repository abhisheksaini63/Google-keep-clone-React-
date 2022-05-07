import React from 'react';

const Note = (props) => {

    return (
        <>
            <div className="createdNoteContainer">
                <div className="createdNoteData">
                    <h4>{props.title}</h4>
                    <p className = "data">{props.content}  </p>
                </div>
                <button className="delBtn" onClick = {()=>{
                    props.onselect(props.id);
                }} >❌</button>
            </div>
        </>
    );
}

export default Note;
