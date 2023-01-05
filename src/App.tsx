import { Route, Router } from 'preact-router';


// Code-splitting is automated for `routes` directory
import Home from './routes/home';

const App = () => (
	<div class="bg-red-500">
		<Router>
			<Route path="/" component={Home} />
		</Router>
	</div>
);

export default App;
