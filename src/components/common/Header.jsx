import { MdMenuBook } from 'react-icons/md';
export default function Header() {
	return (
		<div className='Header'>
			<h1>DCODELAB</h1>
			<ul>
				<li>Department</li>
				<li>Youtube</li>
				<li>Gallery</li>
				<li>Location</li>
				<li>
					<MdMenuBook />
				</li>
			</ul>
		</div>
	);
}
