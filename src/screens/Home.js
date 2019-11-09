import { render } from 'react-dom';
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/user';

class Home extends Component {
	constructor(props){
		super(props)
	}
	componentWillMount(){
	}
	
	render() {
		return (
			<div className="App">
				<div className="sub-title">
					<p>Hello world </p>
				</div>
			</div>
		);
	}
	componentDidMount(){
		this.props.getUser({"username": 'Example'})
	}
}


const mapStateToProps = (state) => ({
	user: state.user
});

const mapDispatchToProps = {
	getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
