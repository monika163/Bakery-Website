import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "green",
				textAlign: "center",
				marginTop: "-50px"
			}}>

			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>Quick Link</Heading>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
					</Column>
					<Column>
						<Heading>Get in Touch </Heading>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
					</Column>
					<Column>
						<Heading>Costomer Service</Heading>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
						<FooterLink href="#">Dummy</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fa fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-youtube">
								<span style={{ marginLeft: "10px" }}>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
