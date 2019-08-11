import React from 'react';
import { Modal, Carousel, Row, Col } from 'react-bootstrap';
import { changeModal } from './../redux/actions';
import { connect } from 'react-redux';

let data = [
	{
		id: 0,
		title: "Receiptastic",
		short_desc: `An online ordering and accounting system that comes
		with companion iOS and Android applications that allow clients
		to order by themselves. The system will notify clients of any
		order changes via email. It also automatically generates Excel
		spreadsheets containing a summary of daily/monthly/quarterly orders`,
		desc: `I made this online ordering system by myself under my company
		Receiptastic Pte Ltd. It is a customised webpage that allows a manufacturing
		company to easily find, edit and delete their orders. It also allows clients
		to order via iOS and Android applications. The webpage has sections for
		delivery drivers, who receive a list of their daily orders and can update
		the status of these orders once they are done delivering. The system is also
		tied to an email system, which automatically updates customers of new
		orders or of order changes. The website includes an accounting section which
		generates spreadsheets detailing the daily/monthly/quarterly orders, making
		accounting really easy. A copy of this system is currently deployed and has
		significantly improved the productivity of the company using it. I've also
		localised the applications to both English and Chinese. The web application was
		built with React and Phoenix (Elixir backend).`,
		imgs: [
			{
				title: "Main Webpage",
				subtitle: "A dashboard that summarizes all the orders",
				src: "receiptastic/main.png"
			},
			{
				title: "Orders Page",
				subtitle: "Allows users to add, edit and delete orders",
				src: "receiptastic/orders.png"
			},
			{
				title: "Add Order Panel",
				subtitle: "Helps users to efficiently generate orders",
				src: "receiptastic/add_order.png"
			},
			{
				title: "Drivers Page",
				subtitle: "Displays a summary of the current delivery status",
				src: "receiptastic/drivers.png"
			},
			{
				title: "Android Order Page",
				subtitle: "Allows clients to generate orders (Edited for aspect ratio)",
				src: "receiptastic/android_order.png"
			},
			{
				title: "Android Order Summary",
				subtitle: "Allows clients to view and edit orders (Edited for aspect ratio)",
				src: "receiptastic/order_summary.png"
			},
			{
				title: "iOS Order Page",
				subtitle: "Allows clients to generate orders (Edited for aspect ratio)",
				src: "receiptastic/ios_screenshot_order.png"
			},
			{
				title: "iOS Order Summary",
				subtitle: "Allows clients to view and edit orders (Edited for aspect ratio)",
				src: "receiptastic/ios_screenshot_info.png"
			}
		]
	},
	{
		id: 1,
		title: "Critter World",
		short_desc: `A project I made for CS 2112 in Cornell as part of a team
		with Magnus LaDue.
		The project aims to simulate artificial life and specifies a Critter.
		A Critter can run its own code and interact with its environment.
		In this project, we wrote a parser and interpreter to run Critters.
		We then created a GUI to display the world and a server-client to allow
		us to visit other peoples' Critter worlds.`,
		desc: `A project I made for CS 2112 in Cornell as part of a team
		with Magnus LaDue. It aims to simulate artificial life in the form of a
		Critter. Critters can interact with the environment by sensing it, eating
		food, photosynthesising, budding and attacking / breeding with other
		critters. Critters are specified by their size, attack, defence and energy
		which they gain by eating food. When critters run out of energy, they die
		and leave behind food which other critters can eat. Critters run on their
		own critter language, which is a mini programming language. They have a bunch
		of registers which they can use to store their state. The first part of this
		project was to create a parser and interpreter for the critter and a world class
		to keep track of the state of all the critters. The next part is to create a
		GUI to display the world and the state of all the critters in it. The final
		part is to create a client/server interface so that we can visit other peoples'
		critter worlds. Our GUI is optimised such that it only renders the tiles
		that you can see, hence it can be used to render large 10,000 by 10,000 worlds
		without lagging.`,
		imgs: [
			{
				title: "Critter World",
				subtitle: "An example simulation",
				src: "critters/world.png"
			},
			{
				title: "Critter Information",
				subtitle: "An example critter's information",
				src: "critters/critter.png"
			},
			{
				title: "Zoom",
				subtitle: `A zoomed in version of this world. Our simulation
				supports iOS zoom gestures with the touchpad`,
				src: "critters/zoom.png"
			},
			{
				title: "Add Critter",
				subtitle: "The interface used to add a critter",
				src: "critters/add_critter.png"
			},
			{
				title: "Food",
				subtitle: "The drumstick represents some food that critters can eat",
				src: "critters/food.png"
			},
			{
				title: "Errors",
				subtitle: "Error handling for our critter world",
				src: "critters/errors.png"
			}
		]
	},
	{
		id: 2,
		title: "Pong Game",
		short_desc: `A project I made for ECE 3140 in Cornell as part of a team
		with Chloe Wu.
		We were tasked with making a project using the FRDM K64F Board.
		We made an embedded Pong Game that takes input from joysticks and
		sends the state of the game via USB to a computer`,
		desc: `A project I made for ECE 3140 in Cornell as part of a team
		with Chloe Wu.
		We were tasked with making a project using the FRDM K64F Board
		and to make use of hardware concepts that were not taught in class.
		We decided to make an embedded Pong game.
		The Game consists of 2 parts, the hardware setup and the software
		used to display the game on the computer screen.
		For the hardware, we use ADC (Analog to Digital Conversion) to get
		the voltage on the outputs of the joysticks. When connected to a 3.3V
		power supply, the joysticks output 1.6V
		when they are in their resting state, and 0 - 3.3V otherwise depending
		on where the joysticks are positioned. These are 2-axis joysticks, but
		we only make use of a single axis. We use a timer interrupt on the
		board to make the game run at 60fps. We implement the game state
		and game logic using C++ code on the board.
		For the software, we make use of JavaFX to create a UI to display the
		Pong game. We then send the important aspects of the game state
		(position of paddles, score, position of ball) through the USB via 
		UART. We roll our own algorithm to read the game state off of the USB
		data channel because it is a stream and we don't know when the stream
		starts.
		We originally wanted to use an LED display to display the game state,
		but we likely ran into some timing issues and couldn't get hold of
		an oscilloscope, so we decided to use the computer to display the game
		instead.
		`,
		imgs: [
			{
				title: "Hardware Setup",
				subtitle: "The setup of our hardware",
				src: "pong/device.png"
			},
			{
				title: "Game",
				subtitle: "The entire game with the board displayed on a PC",
				src: "pong/game.png"
			}
		]
	}
]

const ProjectCarousel = ({ imgs }) => {
	let slides = imgs.map( ({title, subtitle, src, font_color}) => {
		return (
			<Carousel.Item key = {title}>
				<img
					src = {src}
					alt = {title}
					style = {{width: "100%", height: "400px"}}
				/>
				<Carousel.Caption>
					<h3
					>{title}</h3>
					<p
					>{subtitle}</p>
				</Carousel.Caption>
			</Carousel.Item>)
	})
	return (
		<Carousel>
			{slides}
		</Carousel>)
}

const ProjectModal = ({title, imgs, desc, show, change_modal}) => {
	let onClose = () => change_modal(-1)

	return (
		<Modal show = {show} onHide = { onClose } size = "lg">
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ProjectCarousel
					imgs = {imgs}
				/>
				<hr/>
				<p>{desc}</p>
			</Modal.Body>
		</Modal>)
}

let ProjectDisp = ({title, short_desc, imgs, desc, show, change_modal, id, disp_hr}) => {
	return (<div>
			<Row>
				<Col sm = {8} xs = {12}>
					<h2>{title}</h2>
					<p>{short_desc}</p>
					<button className = "btn btn-primary"
						onClick = {() => {change_modal(id)}}
					>
						More Details
					</button>
				</Col>
				<Col sm = {4} xs = {12}>
					<img
						src = {imgs[0].src}
						alt = {imgs[0].title}
						style = {{width: "200px", height: "200px"}}
						className = "rounded-img"
					/>
				</Col>
			</Row>
			<ProjectModal
				title = {title}
				imgs = {imgs}
				desc = {desc}
				show = {show}
				change_modal = {change_modal}
			/>
			{disp_hr ? <hr/> : ""}
		</div>)
}

const UnconnectedProjects = ({active_modal, change_modal}) => {
	let disp = data.map((entry, idx) => {
		return (<ProjectDisp
			key = {entry.id}
			title = {entry.title}
			short_desc = {entry.short_desc}
			imgs = {entry.imgs}
			desc = {entry.desc}
			show = {entry.id === active_modal}
			change_modal = {change_modal}
			id = {entry.id}
			disp_hr = {idx == data.length - 1 ? false : true}
		/>)
	})
	return disp
}

export const Projects = connect( (state) => {return {active_modal: state.modal}},
	(dispatch) => {
		return {change_modal: (id) => dispatch(changeModal(id))}
	})(UnconnectedProjects)