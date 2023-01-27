import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import "./App.css"


export default function App() { 

  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])


  const [pageTitle, setPageTitle] = React.useState(
    () => JSON.parse(localStorage.getItem("pageTitle") || 'Notes & Thoughts')
  )

  const [currentNoteId, setCurrentNoteId] = React.useState( notes[0] && notes[0].id || '')

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])


    
function createNewNote() {
 const newNote = {
  id : nanoid(),
  body : "type your thoughts here"
 }
 setNotes(prevNotes => [newNote, ...prevNotes])
 setCurrentNoteId(newNote.id)

}

function updateNote(text) {
  setNotes(oldNotes => {
    const newArry = [] 
    oldNotes.map( note => {
      return (
        note.id === currentNoteId ?
        newArry.unshift({...note, body:text}) :
        newArry.push(note)
    )}
    )
    return newArry
  })
  
  // setNotes (oldNotes => {
  //   const newArry = []
  //   for(var i = 0 ; i < oldNotes.length ; i++) {
  //     const oldNote = oldNotes[i]; 
  //     if (oldNote.id === currentNoteId) {
  //       newArry.unshift({...oldNote, body:text})
  //     } else {
  //       newArry.push(oldNote)
  //     }
  //   }return newArry
  // }
  // )
  
}

function deleteNote(event, noteId) {
  event.stopPropagation()
  setNotes(prevNotes =>  prevNotes.filter( note => note.id !== noteId ))

}

    function findCurrentNote() {
      return notes.find( note => {
        return note.id === currentNoteId 
      }) || notes[0]
    }

    

    

  const current = new Date()
  const date = `${current.getMonth()+1} / ${current.getDate()} / ${current.getFullYear()}`

  function renameTitle(event) {
    setPageTitle(prevTitle => prevTitle = event.target.value)
  }

  React.useEffect(()=> {
    localStorage.setItem("pageTitle", JSON.stringify(pageTitle))
  }, [pageTitle])


    
    return (
        <main>
        <div className="page-title-container">
        <h1 className="page-title">📓 <input className="page-title--input" placeholder='Notes & Thoughts' onChange={renameTitle} value={pageTitle}/></h1>
         <h4 className="page-date">{date}</h4>
        </div>
         
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
       notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}

