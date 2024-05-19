import Header from "./Header";
import './Otziv.css'
import { useEffect, useState } from "react";
import axios from "axios";
import {api} from "../utils/api"
import bgimage from "../assets/image 1.png";
import {Parallax} from "react-parallax";
export default function LK() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get(api+'/api/feedback',  )
            .then(response => {
                setReviews(response.data.feedbacks);
                setLoading(false);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (<Parallax bgImage={bgimage} strength={500}  bgImageStyle={{ height: '100vh', maxWidth: '100vw' }} >
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
                                <p >{review.username}</p>
                                <p>{review.message}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No reviews available</div>
                )}
            </main>

        </div> </Parallax>
    );
}
