
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { NoteContextProvider } from './context/context';
import Button from './components/Button';
import NotesList from './components/NotesList';



function App() {

  const [notes, setNotes] = useState([])
  const [edit, setEdit] = useState(false)
  const [NoteIndex, setNoteIndex] = useState(0)
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNotes = (note) => {
    setNotes(prev => [...prev, { ...note,id:Math.round(Math.random() * 10000000 + 1), selected: false }])
  }


  const handleClearNotes = () => {
    setNotes([])
  }

  const handldeDeleteNotes = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  const handleSelectedDeletedNotes = () => {
    setNotes(prev => prev.filter(note => !note.selected))
  }

  const handleCheckBoxChange = (value, id) => {
    setNotes(prev => prev.map(note => note.id === id ? { ...note, selected: value } : note))
  }

  const handleEditNote = (id) => {
    let index = notes.findIndex(note => note.id === id)
    if (index !== -1) {
      setEdit(true)
      setNoteIndex(index)
      setContent(notes[NoteIndex]["content"])
      setDescription(notes[NoteIndex]["description"])
    }

  }

  const handleContent = (value) => {
    setContent(value)
  }

  const handleDescription = (value) => {
    setDescription(value)
  }

  const updateNote = (index) => {
    setEdit(false)
    setNotes(prev => prev.map((note, i) => i === index ? { ...note, content: content, description: description } : note))
  }

  const addNotes = () => {
    if (edit) {
      updateNote(NoteIndex)
    }
    else {
      handleAddNotes({ content: content, description: description })
    }
    handleContent("")
    handleDescription("")
  }


  return (
    <NoteContextProvider value={
      {
        notes,
        handldeDeleteNotes,
        handleAddNotes,
        handleClearNotes,
        handleSelectedDeletedNotes,
        handleCheckBoxChange,
        handleEditNote,
        edit,
        NoteIndex,
        content,
        description,
        handleDescription,
        handleContent,
        updateNote,
      }
    }>
      <div className=' bg-black flex flex-col w- screen h-screen  '>
        <div className=' mt-2 ml-2  min-h-32   flex flex-col w-80 items-center justify-center  '>
          <Input change={handleContent} value={content} placeholder={"Enter your content"} />
          <Input change={handleDescription} value={description} height={"h-40"} placeholder={"Enter your Notes here"} />
        </div>

        <Button onhandleNotes={addNotes}>{edit ? "Edit Note" : "Add Note"}</Button>
        <NotesList />
        {notes.length && <Button onhandleNotes={handleSelectedDeletedNotes}>Delete Selected Notes</Button>}
        {notes.length && <Button onhandleNotes={handleClearNotes}>Clear Notes</Button>}
      </div>
    </NoteContextProvider>
  )
}

export default App
