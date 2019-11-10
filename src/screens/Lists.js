import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getGoogleSheet } from '../redux/actions/googleSheet';
import { goToHome } from '../redux/actions/navigation';
import Gradient from '../images/Gradient.png';
import Logo from '../images/logo.png';
import Clock from '../images/Emojis/18.png';

const delivery = [
	{
		title: 'first title ',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];
const cooking = [
	{
		title: 'first title ',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];
const donation = [
	{
		title: 'first title ',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula non sem iaculis pretium egestas sed nunc. In vitae nisi sollicitudin magna porttitor ultrices. Integer diam dui, pulvinar ut interdum in, porttitor ut erat. Integer imperdiet suscipit mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi quis nibh pharetra fringilla. Suspendisse efficitur eu enim vel porta. Nulla facilisi. Quisque et efficitur leo. Nam vehicula efficitur suscipit.'
	}
];

class Lists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDeliveryIndex: '',
			selectCookingTask: '',
			selectDonation: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {}

	handleChange(value, name) {
		this.setState({ [name]: value.target.value });
	}

	handleSubmit(event) {
		let err = false;
		if (!this.state.email || !this.state.name || !this.state.phone) err = true;
		if (!err) {
			alert('A name was submitted: ');
		} else {
			alert('Something missing');
		}
		event.preventDefault();
	}

	goToHome = () => this.props.goToHome(this.props);

	render() {
		const { firstSelectedItem, secondSelectedItem } = this.props.state.state || {};
		return (
			<div className="App">
				<header
					classname="Header"
					style={{
						height: '45%',
						paddingTop: 40,
						width: '100%',
						justifyContent: 'center',
						aligItems: 'center',
						backgroundImage: `url(${Gradient})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
					<img src={Logo} style={{ width: '40%' }} />
				</header>
				<p
					className="header-title"
					style={{
						color: '#F5A146',
						size: 40,
						fontWeight: 'bold',
						paddingTop: 20,
						paddingBottom: 20,
						width: '80%',
						margin: 'auto'
					}}>
					Select one or multiple tasks you can help us with
				</p>

				<div className="sub-title">
					<p
						className="header-title"
						style={{
							color: '#51D2C8',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Delivery task
					</p>

					{delivery.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedDeliveryIndex: this.state.selectedDeliveryIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedDeliveryIndex === i ? '#2E7771' : '#51D2C8',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<img src={Clock} style={{ height: 60 }} />
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedDeliveryIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}

					<p
						className="header-title"
						style={{
							color: '#F59A42',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Cooking task
					</p>

					{cooking.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedCookingIndex: this.state.selectedCookingIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedCookingIndex === i ? '#FC5C20' : '#F59A42',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<img src={Clock} style={{ height: 60 }} />
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedCookingIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}
					<p
						className="header-title"
						style={{
							color: '#BE46E7',
							size: 40,
							display: 'flex',
							alignItems: 'flex-start',
							width: '90%',
							margin: 'auto',
							fontWeight: 'bold',
							paddingTop: 20
						}}>
						Donation
					</p>

					{donation.map((e, i) => (
						<button
							onClick={() => {
								this.setState({
									selectedDonationIndex: this.state.selectedDonationIndex === i ? null : i,
									selectDate: e
								});
							}}
							style={{
								backgroundColor: this.state.selectedDonationIndex === i ? '#683470' : '#BE46E7',
								width: '90%',
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								margin: 'auto',
								flexDirection: 'column'
							}}>
							<div>
								<img src={Clock} style={{ height: 60 }} />
								<text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.title}</text>
								{this.state.selectedDonationIndex === i && (
									<div
										style={{
											position: 'relative',
											justifyContent: 'flex-start',
											backgroundColor: 'white',
											borderRadius: 10,
											textAlign: 'justify',
											padding: 10,
											width: '100%',
											height: '100%'
										}}>
										<p>{e.description} </p>
									</div>
								)}
							</div>
						</button>
					))}

					<button onClick={this.goToHome}>
						<text> GO BACK</text>
					</button>
					{firstSelectedItem && (
						<div>
							<text>
								{firstSelectedItem.email}
								{firstSelectedItem.phone}
								{firstSelectedItem.bi}
							</text>
						</div>
					)}
					{secondSelectedItem && (
						<div>
							<text>
								{secondSelectedItem.email}
								{secondSelectedItem.phone}
								{secondSelectedItem.bi}
							</text>
						</div>
					)}
				</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.name}
							onChange={(value) => this.handleChange(value, 'name')}
						/>
					</label>
					<label>
						E-mail:
						<input
							type="text"
							value={this.state.email}
							onChange={(value) => this.handleChange(value, 'email')}
						/>
					</label>
					<label>
						Phone:
						<input
							type="text"
							value={this.state.phone}
							onChange={(value) => this.handleChange(value, 'phone')}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				<button
					onClick={this.goToLists}
					style={{
						borderRadius: 4,
						display: 'flex',
						width: '50%',
						margin: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundImage: `url(${Gradient})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
					<text className="header-title-date" style={{ color: 'white', fontWeight: 'bold' }}>
						Next
					</text>
				</button>
				{this.state.err && (
					<text
						className="header-title"
						style={{ color: 'red', marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>
						{this.state.err}
					</text>
				)}
				<div style={{ height: 50 }} />
			</div>
		);
	}
	componentDidMount() {
		this.props.getGoogleSheet();
	}
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = {
	getGoogleSheet,
	goToHome
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
