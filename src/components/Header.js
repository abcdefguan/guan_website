import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import React from 'react';

const HeaderBar = ({ location }) => {
	const tabs = [
		{id: 0, path: '/', text: 'Home',download: false},
		{id: 1, path: '/projects', text: 'Projects', download: false},
		{id: 2, path: '/hosted', text: 'Hosted Projects', download: false},
		{id: 3, path: '/resume.pdf', text: 'Resume', download: true},
		{id: 4, path: '/contact', text: 'Contact', download: false}
	]


	let links = tabs.map((tab) => {
		return (<NavItem key = {tab.id} tab = {tab} location = {location}
			download = { tab.download}/>)
	});

	return (<Navbar bg = "dark" variant = "dark" expand = "lg">
		<Navbar.Brand href = '/'>
			Guan.ninja
		</Navbar.Brand>
		<Navbar.Toggle aria-controls = 'navbar' />
		<Navbar.Collapse id = 'navbar'>
			<Nav className = 'mr-auto'as = 'ul'>
				{links}
			</Nav>
		</Navbar.Collapse>
	</Navbar>)

}

const NavItem = ({ tab, location, download }) => {
	if (download){
		return (<li className = "nav-item">
				<a className = 'nav-link' href = "/resume.pdf" download>
					{tab.text}
				</a>
			</li>)
	}
	else{
		return (<li className = {location.pathname === tab.path ? "nav-item active"
	 : "nav-item"}>
		 	<Link to = {tab.path} className = 'nav-link'>
				{tab.text}
			</Link>
		</li>);
	}
}

export const Header = withRouter(HeaderBar)