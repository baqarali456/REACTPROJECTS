import { useTodoContext } from "../context/todolistContext"


const Button = ({changeEdit}) => {
   const {
      handleAddTodos,
      input,
      handleinput,
      edit,
      updateTodo
   } = useTodoContext()

   const addTodos = () => {

      if(edit){
         changeEdit(false)
         updateTodo()
         handleinput('')
      }
      else{
         if (input) {
            handleAddTodos(input);
            handleinput("");
   
         }
      }
     
     
   }

   return (
      <button
         onClick={addTodos}
         className=" mx-2 text-2xl text-center bg-red-500 text-white w-16 h-8 font-light rounded-md ">
         {edit?"Edit":"Add"}
         </button>
   )
}

export default Button
