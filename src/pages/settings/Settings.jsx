import React from 'react'
import './settings.css'
import SideBar from'../../components/sidebar/SideBar'
const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className='settingsFrom'>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img className='settingsImg' src="https://lvgames.net/wallpaper/Star_Guardian_Jinx_Wallpaper_LOL_1920x1080.jpg" alt="" />
						<label htmlFor="fileInput">
							<i className="settingsIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{display: 'none'}}/>
					</div>
					<label>User Name</label>
					<input type="text" placeholder="Pmv"/>
					<label>Email</label>
					<input type="email" placeholder="Pmv@gmail.com"/>
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<SideBar />
		</div>
	)
}

export default Settings
