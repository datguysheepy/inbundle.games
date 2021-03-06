import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Home from './Home';
import About from './About';
import Search from './Search';
import Game from './Game';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { hsvToRgb } from './Utils';


const IndexWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		background-color: #111;
		color: var(--main-color);
		font-family: 'Spartan', sans-serif;
	}

	:root {
		--main-color: rgb(${hsvToRgb(0, 0.7, 0.95)});
	}
`


const routing = (
	<Router>
		<GlobalStyle />
		
		<IndexWrapper>
			<Nav />

			<Route exact path="/" component={Home} />
			<Route path='/about' component={About} />
			<Route path='/search' component={Search} />
			<Route path='/game' component={Game} />

			<Footer />
		</IndexWrapper>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();