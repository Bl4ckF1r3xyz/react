import Header from "./Header";
import './Otziv.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function LK() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get('https://226a64ab-15e7-4ad5-97b1-fde455fd41ec-00-2ee8zvawkqwj9.sisko.replit.dev/api/feedback',  )
            .then(response => {
                setReviews(response.data.feedbacks);
                setLoading(false);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <div className="LK">
            <Header />
            <main>
                <h1 className="centered">Отзывы о грузоперевозчиках</h1>
                {loading ? (
                    <div>Loading...</div>
                ) : reviews.length > 0 ? (
                    <div className="otziv-container">
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p >{review.user_id}</p>
                                <p>{review.message}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No reviews available</div>
                )}
            </main>
        </div>
    );
}
