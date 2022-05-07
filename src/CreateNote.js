import React, { useState } from 'react';


const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    data: "",
  });



  const titleEvent = (elm) => {
    const {name, value} = elm.target;

    setNote((oldData)=>{
      return {
        ...oldData,
        [name] : value,
      }
    });
    // console.log(note.title + " " + note.data);
  };


  const createEvent = () => {
    props.passNote(note);
    setNote({
      title : "",
    data : "",
    }); 
  }
  return (
    <>
      <div className="createContainer">
        <div className="createNote">
          <form>
            <input type="text"
              name="title"
              placeholder="Tittle"
              value={note.title}
              onChange={titleEvent} />
            <textarea
              name="data"
              placeholder="Write a note"
              row=""
              column=""
              value={note.data}
              onChange={titleEvent}
            />
          </form>

        </div>
        <button className="addBtn" onClick={createEvent} >➕</button>
      </div>
    </>
  );
}

export default CreateNote;
