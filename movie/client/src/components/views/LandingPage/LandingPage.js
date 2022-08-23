import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Section/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {
    const [Moives, setMoives] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)


    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                setMoives([...Moives, ...res.results])
                setMainMovieImage(res.results[0])
                setCurrentPage(res.page)
            })
    }

    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;

        fetchMovies(endpoint)

    }


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
                {/* Movie Grid Cards */}

                <Row gutter={[16, 16]}>
                    {Moives && Moives.map((movie, index) => (
                        <React.Fragment kewy={index}>
                            <GridCards
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />

                        </React.Fragment>
                    ))}

                </Row>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreItems}> Load More </button>
            </div>

        </div>
    )
}

export default LandingPage
