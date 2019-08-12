import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

export const Contact = () => {
	return (
	<Row>
		<Col xs = {12}>
			<h2>Contact Information</h2>
			<p>You can find my contact information in the table below</p>
			<Table bordered hover>
				<tbody>
					<tr>
						<td>Email</td>
						<td>
							<a href = "mailto:gw284@cornell.edu">
								gw284@cornell.edu
							</a>
						</td>
					</tr>
					<tr>
						<td>Phone Number</td>
						<td>+1 (607)-229-3697</td>
					</tr>
					<tr>
						<td>Bitbucket</td>
						<td>
							<a href = "https://bitbucket.org/abcdefguan/"
								target = "_blank"
								rel = "noopener noreferrer">
								Abcdefguan
							</a>
						</td>
					</tr>
					<tr>
						<td>Devpost</td>
						<td>
							<a href = "https://devpost.com/wuguanqun"
								target = "_blank"
								rel = "noopener noreferrer">
								https://devpost.com/wuguanqun
							</a>
						</td>
					</tr>
					<tr>
						<td>LinkedIn</td>
						<td>
							<a href = "https://www.linkedin.com/in/wu-g-351b3983/"
								target = "_blank"
								rel = "noopener noreferrer">
								https://www.linkedin.com/in/wu-g-351b3983/
							</a>
						</td>
					</tr>
				</tbody>
			</Table>
		</Col>
	</Row>)
}