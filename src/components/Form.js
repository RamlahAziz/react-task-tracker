import React, { useState } from "react";

export default function Form({ addTask }) {
    const [text, setText] = useState("");
    const [colour, setColour] = useState("#f58f29");

    const handleTextChange = e => setText(e.target.value);

    const handleColourChange = e => setColour(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        addTask(text, colour);
        e.target.reset();
    };
    // console.log(addTask);
    //
    return (
        <form className="add-tasks" onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                placeholder="Enter Task"
                // value={text}
                onChange={handleTextChange}
                required
            />
            <div className="colourdiv" style={{ background: colour }}>
                <input
                    type="color"
                    name="colour"
                    defaultValue={colour}
                    onChange={handleColourChange}
                    required
                />
            </div>

            <input type="submit" value="+ Add Task" />
        </form>
    );
}
