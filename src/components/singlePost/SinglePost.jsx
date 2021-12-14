import React from 'react'
import './singlePost.css'
const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img 
					src="https://lvgames.net/wallpaper/Star_Guardian_Jinx_Wallpaper_LOL_1920x1080.jpg" alt="" 
					className="singlePostImg" 
				/>
				<h1 className="singlePostTitle">
					REBEL CANNON
					<div className="singlePostEdit">
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className='singlePostName'>Name: <b>JINX</b> </span>
					<span className='singlePostDate'> 1 house ago </span>
				</div>
				<p className="singlePostDesc">
					Jinx, the moody criminal from Zaun,
					lives to wreak havoc without minding the consequences. 
					Carrying an array of deadly weapons, she unleashed the most dazzling explosions, 
					leaving a long chain of chaos behind. Jinx detests boredom, 
					and enjoys bringing her signature ruin to every place she goes.
				</p>

			</div>
		</div>
	)
}

export default SinglePost
