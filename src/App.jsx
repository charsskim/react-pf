import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/main';
import Department from './components/sub/department';
import Gallery from './components/sub/gallery';
import Location from './components/sub/location';
import Youtube from './components/sub/youtube';

import { Route } from 'react-router-dom';
import './scss/style.scss';

export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Route exact path='/' component={Main} />
			<Route path='/Department' component={Department} />
			<Route path='/Gallery' component={Gallery} />
			<Route path='/Youtube' component={Youtube} />
			<Route path='/Location' component={Location} />
			<Footer />
		</div>
	);
}
