
function Notes({notes,deletenote,editnote}) {
  return (
    <>
      <div className="bg-success text-white-50 h-auto  ">
          <div className="d-flex flex-row flex-wrap">
              {notes.map((note)=>(
                <p key={note.id} className=" mx-2  my-2 text-black-50 fs-4 border-2 bg-light p-5">
              {note.text}
              <i onClick={()=>deletenote(note.id)} className="mx-4 text-dark fa-solid fa-delete-left"></i>
              <i onClick={()=>editnote(note.id)} className="mx-4 pointer-event  text-dark  fa-solid fa-pen"></i>
              </p>
              ))}
          </div>
      </div>
    </>
  )
}

export default Notes
