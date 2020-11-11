import React from "react";

export default function Task({ task, showPendingTasks }) {
    return (
        <div className="task" style={{ background: task.color }}>
            <p>{task.text}</p>
            {showPendingTasks && <button className="completed">✔</button>}
            <button className="remove">✖</button>
        </div>
    );
}
