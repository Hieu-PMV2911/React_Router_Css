import React from 'react'
import './post.css'
const Post = () => {
	return (
		<div className="post">
			<img className="postImg" src="https://i.pinimg.com/564x/fc/3f/da/fc3fda4ad013d07678466e448762e2f6.jpg" alt="" />
			<div className="postInfo">
				<div className="postCarts">
					<span className="postCart">Music</span>
					<span className="postCart">Life</span>
				</div>
				<span className="postTitle">
					REBEL CANNON
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Jinx, the moody criminal from Zaun,
				lives to wreak havoc without minding the consequences. 
				Carrying an array of deadly weapons, she unleashed the most dazzling explosions, 
				leaving a long chain of chaos behind. Jinx detests boredom, 
				and enjoys bringing her signature ruin to every place she goes.
			</p>

		</div>
	)
}

export default Post
