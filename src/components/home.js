import React from 'react'
import {Row, Col} from 'react-bootstrap'

export const Home = () => {
	const content = [
		{
			id: 0,
			title: "About Me",
			text: `Hi. I'm Wu Guanqun. Everyone calls me Guan. I'm currently
				studying Computer Science (CS) and Electrical and Computer Engineering (ECE)
				at Cornell University's College of Engineering (As of 2019).
				I intend to graduate in Dec 2020 and pursue an early admit
				MEng from Aug 2020 - May 2021.
				I'm from Singapore and yes, I have done my 2 years of compulsory
				military service. I was trained as a service medic and spent my
				time working at the SAF physiotherapy center. I'm currently
				interested in learning more about Machine Learning and
				Artificial Intelligence because the idea of having computers
				program themselves is really fascinating to me. (Also, AlphaStar
				is really cool and OP)`,
			img: "guan.png",
			alt: "Self Portrait"
		},
		{
			id: 1,
			title: "Stuff that I do",
			text: `I used to participate in competitive programming during high
			school (National Olympiad of Informatics Singapore), so I do still
			spend some time doing that through the Google competitions
			(Kickstart, Codejam, Hashcode). 2019 Hashcode qualifiers has been quite fun.
			I believe it presented a problem which looks NP hard where you have
			to come up with some heuristics to get a good answer to the problem.
			I like to participate in AI competitions where you code a bot
			to play in some kind of strategy game. I tend to go for
			heuristics rather than genetic algorithms or reinforcement learning.
			I used to do CodingGame, but not any more because it is rather time
			consuming. I also participated in MIT BattleCode for 2017-19. I was
			team E Doc Tablet in '17, Sudoers in '18 and Emoticons in '19 (Like 
			Emoticons with actually emoticons replacing some of the characters).
			In my free time, I play a lot of video games and watch anime. I especially enjoy
			visual novels (Danganronpa Series, Ace Attorney Series, Zero Escape Series
			though those games kind of mess with your mind and your sense of time),
			strategy games (Civ 5 and 6, Xcom and Xcom 2, Into the Breach, Fire
			Emblem Series) and some RPGs (Pillars of Eternity, Dragon Quest XI).
			I'm writing this after spending 50 hours completing
			Fire Emblem Three Houses (Church Route) XD`,
			img: "battlecode.jpg",
			alt: "MIT BattleCode Leaderboard"
		},
		{
			id: 2,
			title: "About Cornell",
			text: `Studying at Cornell has been a really interesting experience
			for me because it's so different from where I grew up. I grew up in a
			city (and have never seen farm animals) near the equator (which means
			it's summer all year round), while Cornell is really rural and it has
			brutally cold and long winters (I saw my first snowstorm in mid Nov!).
			I really enjoy the natural environment here. In summer, you can see
			squirrels, chipmunks and skunks running around and they are all so cute.
			The waterfalls and gorges are also really scenic. In fall, there is the
			apple festival organised by the town of Ithaca that is really cool. Also,
			the red leaves make the landscape really beautiful. It snows here from
			late Oct - late Mar so winter is most of the year. While it is really cold,
			the snowfall makes everything look really beautiful. The academics at
			Cornell is really rigorous. Most of the CS and ECE classes demand
			a lot of work. The quality of the education here is really good though.
			At the end of the day, you realise that you have learnt a ton of stuff
			just by spending a short amount of time here.`,
			img: "clara_dickson.jpg",
			alt: "Clara Dickson Hall in Winter"
		}
	];
	let imgs = content.map(({id, title, text, img, alt}, idx) => {
		return (<div key = {id}>
			<Row>
				<Col sm = {8} xs = {12}>
					<h2>{title}</h2>
					<p>{text}</p>
				</Col>
				<Col sm = {4} xs = {12}>
					<img src = {img}
					className = 'rounded-img'
					style = {{width: '200px', height: '200px'}}
					alt = {alt} />
				</Col>
			</Row>
			{idx !== content.length - 1 ? <hr/> : ""}
		</div>)
	})
	return imgs
}