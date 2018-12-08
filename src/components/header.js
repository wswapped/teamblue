import React, {Component} from 'react'

export default class Header extends Component{
	render(){
		return (
				<header class="header">
					<a href="index.html" class="brand">Refugee Connect</a>
					<input class="menu-btn" type="checkbox" id="menu-btn" />
					<label class="menu-icon" for="menu-btn">
						<span class="navicon"></span>
					</label>
					<nav>
						<ul class="menu">
								<li>
									<a href="profile.html">Profile</a>
								</li>
							<li><a href="login.html">Login</a></li>
							<li><a href="signup.html">Sign Up</a></li>
						</ul>
					</nav>
			</header>
			)
	}	
}
