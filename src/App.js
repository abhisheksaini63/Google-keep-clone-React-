import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footter';
import Note from './Note';
import CreateNote from './CreateNote';

function App() {

  const [addItem, setAddItem] = useState([]);

  const addEvent = (note) => {
    if (note.title == '' || note.data == '') {
      alert("Please insert Data ");
    }
    else {
      setAddItem((oldarr) => {
        return [...oldarr, note];
      });
    }

    // console.log(note);

  };

  const deleteNote = (id) => {
    setAddItem((oldarr) => {
      return oldarr.filter((val, index) => {
        return id !== index;
      });
    });

  };

  return (
    <>
      <Header />
      <CreateNote passNote={addEvent} />
      <div className="allNtes">

        {addItem.map((val, index) => {
          return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.data}
            onselect={deleteNote}
          />
        })
        }
      </div>
      <Footer />

    </>
  );
}

export default App;
