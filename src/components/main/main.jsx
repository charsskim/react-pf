import Banner from './banner';
import Infor from './infor';
import Visual from './visual';

export default function Main() {
	return (
		<div className='main'>
			<Visual />
			<Banner />
			<Infor />
		</div>
	);
}
