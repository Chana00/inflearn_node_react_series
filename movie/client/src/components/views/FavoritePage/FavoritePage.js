import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './favorite.css'
import { Popover } from 'antd'
import { IMAGE_BASE_URL } from '../../Config'

function FavoritePage() {
    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        fetchFavoredMovie();
    }, [])

    const fetchFavoredMovie = () => {
        Axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })
            .then(res => {
                if (res.data.success) {
                    setFavorites(res.data.favorites)
                } else {
                    alert('영화 정보를 가져올 수 없습니다.');
                }
            })

    }

    const onClickDelete = (movieId, userFrom) => {
        const variables = {
            movieId,
            userFrom
        }

        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(res => {
                if (res.data.success) {
                    fetchFavoredMovie();
                } else {
                    alert("리스트에서 지우는데 실패했습니다.")
                }
            })
    }

    const renderCards = Favorites.map((favorites, index) => {
        const content = (
            <div>
                {favorites.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorites.moviePost}`}></img> : "no image"
                }
            </div >
        )

        return <tr key={index}>
            <Popover content={content} title={`${favorites.movieTitle}`}>
                <td>{favorites.movieTitle}</td>
            </Popover>
            <td>{favorites.movieRunTime} mins</td>
            <td><button onClick={() => { onClickDelete(favorites.movieId, favorites.userFrom) }}>Remove</button></td>
        </tr>
    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> Favorite Movies By Me</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>

            </table>

        </div>
    )
}

export default FavoritePage