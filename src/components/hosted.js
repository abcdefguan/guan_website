import React from 'react'
import {Row, Col} from 'react-bootstrap'

export const Hosted = () => {
	const content = [
		{
			id: 0,
			title: "Nothing Hosted Here",
			text: `I'm not currently hosting any projects on this webpage.
				I'll host some projects when I've made them.`,
			link: "#"
		}
	];
	let imgs = content.map(({id, title, text, link}, idx) => {
		return (<div key = {id}>
			<Row>
				<Col xs = {12}>
					<h2>{title}</h2>
					<p>{text}</p>
					<button
						className = "btn btn-primary"
						onClick = {() => 
						{window.open(link, '_blank');}}>
						Go there
					</button>
				</Col>
			</Row>
			{idx !== content.length - 1 ? <hr/> : ""}
		</div>)
	})
	return imgs
}