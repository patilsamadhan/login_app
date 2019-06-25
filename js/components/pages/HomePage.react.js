/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.react';
import { connect } from 'react-redux';

class HomePage extends Component {
	render() {
    const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (
			<article>
				<div>
					<section className="text-section">
						{/* Change the copy based on the authentication status */}
						{loggedIn ? (
							<h1>Welcome to Login App, you are logged in!</h1>
						) : (
							<h1>Welcome to Login App!</h1>
						)}
						<p>This application demonstrates what a React.js based register/login workflow might look like on the Frontend. The app thus uses Redux, PostCSS, react-router, ServiceWorker, AppCache, bcrypt and lots more. </p>
						<p>The default username is <code>hruday@gmail.com</code> and the default password is <code>hruday123</code></p>
						{loggedIn ? (
							<Link to="/dashboard" className="btn btn--dash">Dashboard</Link>
						) : (
							<div>
								<Link to="/login" className="btn btn--login">Login</Link>
				
							</div>
						)}
					</section>			
					
				</div>
			</article>
		);
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
