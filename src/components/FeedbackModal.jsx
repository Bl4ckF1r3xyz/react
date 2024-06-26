import React, { useState } from "react";
import "./Regist.css";

export default function FeedbackModal({ active, setActive }) {
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("user.id");
        if (!userId) {
            alert("User ID not found in localStorage");
            return;
        }

        const dataToSend = {
            userId,
            message,
        };

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                alert("Feedback submitted successfully!");
                setActive(false);
            } else {
                alert("Failed to submit feedback. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <div className="modal__content">
                    <h2>Feedback Form</h2>
                    <form onSubmit={handleSubmit}>
            <textarea
                className="one"
                name="message"
                placeholder="Enter your feedback"
                value={message}
                onChange={handleChange}
            />
                        <br />
                        <button className="Auto" type="submit">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
