import Header from './components/common/Header';
import Main from './components/main/main';
import './scss/style.scss';

export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Main />
		</div>
	);
}
