import {useForm} from 'react-hook-form'

function TaskFormPage() {

  const {register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data) =>{
    console.log(data)
  })

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Titulo Tarea:</label>
        <input type="text" placeholder="title" {...register('title')} autoFocus/>
        <br />
        <label htmlFor="">Descripción:</label>
        <textarea rows="3" placeholder="Description" {...register('description')}></textarea>
        <br />
        <button>
          Save
        </button>
      </form>
    </div>
  )
}

export default TaskFormPage