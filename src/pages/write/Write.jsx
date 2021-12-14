import React from 'react'
import './write.css'
const Write = () => {
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://lvgames.net/wallpaper/Star_Guardian_Jinx_Wallpaper_LOL_1920x1080.jpg"
				alt=""
			/>
			<div className="writeFrom">
				<div className="writeFromGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{display: 'none'}}/>
					<input type="text" placeholder="Title..." className="fileInput" autoFocus={true}/>
				</div>
				<div className="writeFromGroup">
					<textarea placeholder="Tell your story..." className="writeInput" type="text"></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</div>
		</div>
	)
}

export default Write
