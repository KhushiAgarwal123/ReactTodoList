import React, { useState } from 'react';

export const AddTodo = (props) => { // use props instead of destructuring directly
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
   
    //submit button task
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be Blank ");
        }
        else{
            props.addTodo(title, desc); // Call addTodo using props
            //for removing  text from textbox
             setTitle("");
             setDesc("") 
     
        }
       
    }

    return (
        <div className='container'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Decscription</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
