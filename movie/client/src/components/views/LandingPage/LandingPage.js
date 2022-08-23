import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Section/MainImage';

function LandingPage() {
    const [Moives, setMoives] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        const endponit = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endponit)
            .then(res => res.json())
            .then(res => {
                setMoives([res.results])
                setMainMovieImage(res.results[0])
            })


    }, [])


    return (
        <div style={{ width: '100%', margin: '0' }}>

            {/* Main Image */}
            {/* MainMoiveImage가 렌더링되어서 존재하면 그 이후에 MainImage를 처리해라 */}
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />}



            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies by latest</h2>
                <hr />
            </div>

            {/* Movie Grid Cards */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>Load More</button>
            </div>

        </div>
    )
}

export default LandingPage
