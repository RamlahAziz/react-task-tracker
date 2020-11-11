import React, { useState } from "react";
import Form from "./Form";
import Task from "./Task";
import Header from "./Header";

export default function ToDo() {
    const [tasksList, setTasksList] = useState([
        {
            id: 0,
            text: "Sample task",
            color: "#db5461",
            completed: false,
        },
    ]);
    const [showPendingTasks, setShowPendingTasks] = useState(true);

    function addTask(text, color) {
        const id = Date.now();
        const task = {
            id,
            text,
            color,
            completed: false,
        };
        // console.log(task);
        setTasksList([...tasksList, task]);
        // console.log(tasksList);
    }

    function handleClick(e, id) {
        // make sure the user has clicked the tick or cross button
        if (!e.target.matches("button")) return;
        // find out which button and list element was clicked
        const action = e.target.classList.value;
        const index = tasksList.findIndex(task => task.id === id);
        let updatedArray = [...tasksList];

        // take action
        if (action === "completed") {
            updatedArray[index] = { ...updatedArray[index], completed: true };
            // console.log(updatedArray[index]);
            setTasksList(updatedArray);
        } else if (action === "remove") {
            updatedArray.splice(index, 1);
            setTasksList(updatedArray);
        }
    }

    return (
        <div className="wrapper">
            <Header
                showPendingTasks={showPendingTasks}
                setShowPendingTasks={setShowPendingTasks}
            />
            <Form addTask={addTask}></Form>
            <ul className="tasks">
                {tasksList
                    // if showPendingTasks = true return where tasks.completed = false
                    // if showPendingTasks = false return where tasks.completed = true
                    .filter(task => showPendingTasks === !task.completed)
                    .map(task => (
                        <li
                            key={task.id}
                            onClick={e => handleClick(e, task.id)}>
                            <Task
                                task={task}
                                showPendingTasks={showPendingTasks}></Task>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
