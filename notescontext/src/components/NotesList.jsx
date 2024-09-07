import { useNoteContext } from "../context/context"


const NotesList = () => {
  const { notes, handleCheckBoxChange, handldeDeleteNotes, handleEditNote } = useNoteContext();

  return (
    
    <div className=" flex flex-row flex-wrap gap-4 mt-2 mx-3 gap-x-2.5 ">
      {
        notes && notes.length ? notes.map(note => {

          const { id, selected, content, description } = note;
          
          return <div key={id} className="flex flex-col min-h-48 w-80 border border-slate-400  border-solid   ">

            <input
              value={selected}
              checked={selected}
              onChange={() => handleCheckBoxChange(!selected, id)}
              className=" self-start ml-2  mt-2 "
              type="checkbox"
              name=""
              id="" />

            <h1 className=" italic text-white text-center text-2xl  ">{content}</h1>

            <p className="text-white text-center text-xl text italic">{description}</p>

            <button
              onClick={() => handleEditNote(id)}
              className=" w-20 m-auto bg-green-600 text-2xl rounded-lg ">
              Edit
            </button>

            <button
              onClick={() => handldeDeleteNotes(id)}
              className=" w-20 m-auto bg-red-600 text-2xl rounded-lg ">
              Delete
            </button>

          </div>
        }) :
        
          <h1 className=" text-white italic m-auto  text-3xl   ">No Notes Here</h1>
      }
    </div>
  )
}

export default NotesList
