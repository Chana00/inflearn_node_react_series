import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd';

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {
        Axios.get('/api/favorite/favoriteNumber', variables)
            .then(res => {

                if (res.data.success) {
                    console.log("숫자정보 가져오기 성공", res.data)
                    setFavoriteNumber(res.data.favoriteNumber)
                } else {
                    alert("숫자 정보를 가져오는데 실패했습니다")
                }
            })

        Axios.get('/api/favorite/favorited', variables)
            .then(res => {
                if (res.data.success) {
                    console.log("정보 가져오기 성공", res.data)
                    setFavorited(res.data.Favorited)
                } else {
                    alert("정보를 가져오는데 실패했습니다")
                }
            })


    }, [])

    const onClickFavorite = () => {
        //Favorite 리스트에 존재한다면 지우기
        if (Favorited) {
            Axios.delete('/api/favorite/removeFromFavorite', variables)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)

                    } else {
                        alert("Favorite 리스트에서 지우는 걸 실패했습니다")
                    }
                })
        } else {        // Favorite 리스트에 ADD
            Axios.post('/api/favorite/addToFavorite', variables)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)

                    } else {
                        alert("Favorite 리스트에 넣는 것을 실패했습니다")
                    }
                })
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

            <Button onClick={onClickFavorite}>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber} </Button>


        </div>
    )
}

export default Favorite