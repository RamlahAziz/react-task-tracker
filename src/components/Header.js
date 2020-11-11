import React from "react";

export default function Header({ showPendingTasks, setShowPendingTasks }) {
    let activeButton = {
        background: "rgba(80, 3, 99, 0.6)",
        // fontWeight: "bold",
        color: "white",
    };
    let notActiveButton = {
        background: "rgba(80, 3, 99, 0.1)",
    };

    return (
        <div className="tab">
            <h2 className="title">
                {showPendingTasks ? "Pending Tasks" : "Completed Tasks"}
            </h2>
            <button
                className="showPending"
                style={showPendingTasks ? activeButton : notActiveButton}
                onClick={() => setShowPendingTasks(true)}>
                Pending
            </button>
            <button
                className="showCompleted"
                style={showPendingTasks ? notActiveButton : activeButton}
                onClick={() => setShowPendingTasks(false)}>
                Completed
            </button>
        </div>
    );
}
