import React from 'react'
import {Link} from 'react-router-dom'
import './topbar.css'
const TopBar = () => {
	const user = true;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to='/' className="link">Home</Link>
					</li>
					<li className="topListItem">
						<Link to='/sidebar ' className="link">About</Link>
					</li>
					<li className="topListItem">
						<Link to='/post/postId' className="link">Contact</Link>
					</li>
					<li className="topListItem">
						<Link to='/write' className="link">Write</Link>
					</li>
					<li className="topListItem">
						{user && <Link to='/settings' className="link">LOGOUT</Link>}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img className='topImage' src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-2.jpg" alt="" />
				):(
					<>
						<Link to='/login' className="link" style={{marginRight:'15px'}}>LOGIN</Link>
						<Link to='/register' className="link">REGISTER</Link>
					</>
				)
			}
				<i className="topIconSearch fas fa-search"></i>
			</div>
		</div>
	)
}

export default TopBar
