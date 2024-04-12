import React,{useState} from "react";

function Todolist(){
    const[tasks,setTakes]= useState([]); // to store task in arrays

    const[newTask,setNewtasks]= useState(""); // add new task in array

    function handleInputChange(event){ // taking value from input 
        setNewtasks( event.target.value)


        

    }

    function addTask(){  // to addtask in list when user click the button
        if(newTask.trim() !== ""){
            setTakes(t=> [...t,newTask])
            setNewtasks("");
        }


    }

    function deleteTask(index){ // to delete task from array
        const updateTask = tasks.filter((_,i)=> i !== index);
        setTakes(updateTask)


    }

    function moveTaskUp(index){ // use tp move task up
        if(index>0){
            const updateTask =[...tasks];
            [updateTask[index],updateTask[index-1]]= [updateTask[index-1],[updateTask[index]]];
            setTakes(updateTask);
        }

         
    }

    function moveTaskDown(index){ // use tp move task down
        if(index < tasks.length-1){
            const updateTask =[...tasks];
            [updateTask[index],updateTask[index+1]]= [updateTask[index+1],[updateTask[index]]];
            setTakes(updateTask);
        }
         
    }


    return(
        <>
        <div className="to-do-list">
            <h1> To-Do-List</h1>
            <div>
                <input type ="text"  
                placeholder="Enter the task.........."
                value={newTask}
                 onChange={handleInputChange}></input>
                <button  className="add-button" onClick={addTask}> Add Me </button>
            </div>
            <ol>
                {tasks.map((item,index)=>
                (<li key={index}>
                    <span className="text"> {item}</span>

                    <button className="delete" onClick={()=>deleteTask(index)}> Delete me</button>

                    <button className="moveup" onClick={()=>moveTaskUp(index)}> ☝️</button>

                    <button className="movedown" onClick={()=>moveTaskDown(index)}>👇</button>




                    </li>))}
            </ol>
            
        </div>

        
        </>
    )

}


export default Todolist;