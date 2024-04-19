import ReactLogo from '../assets/react.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<img className='navbar-logo-image' src={ReactLogo} alt='React logo' />
				<h2 className='navbar-logo-text'>ReactFacts</h2>
			</div>
			<h3 className='navbar-title'>React Course - Project 1</h3>
		</nav>
	);
};

export default Navbar;
