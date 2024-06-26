import Header from "./Header";
import './Otziv.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../utils/api";
import bgimage from "../assets/image 1.jpeg";
import { Parallax } from "react-parallax";

export default function LK() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get(api + '/api/feedback')
            .then(response => {
                setReviews(response.data.feedbacks);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // Check for user authentication
        const user = localStorage.getItem('user');
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleCreateReview = () => {
        // Implement the logic to handle creating a review, such as opening a form
        console.log('Create review button clicked');
    };

    return (
        <Parallax bgImage={bgimage} strength={500} bgImageStyle={{ height: '100vh', maxWidth: '100vw' }}>
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
                                    <p>{review.username}</p>
                                    <p>{review.message}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No reviews available</div>
                    )}
                    {isAuthenticated && (
                        <button onClick={handleCreateReview} className="create-review-button">
                            Создать отзыв
                        </button>
                    )}
                </main>
            </div>
        </Parallax>
    );
}
