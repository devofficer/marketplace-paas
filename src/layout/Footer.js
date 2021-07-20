import LayersIcon from '@material-ui/icons/LayersOutlined';

const Footer = () => {
	return (
		<footer className="bg-gray-100">
			<div className="flex bg-white h-40 shadow">
				<div className="px-12 p-2">
					<div className="flex items-center py-4">
						<div className="bg-blue-400 rounded-full p-1">
							<LayersIcon fontSize="large" className="text-white" />
						</div>
						<span className="text-xl ml-2">MVP Marketplace</span>
					</div>
					<p className="text-gray-800 text-sm">MVP Marketplace template is modern marketplace<br /> to gather your clients together</p>
				</div>

				<div className="flex w-1/2 text-gray-800 ml-12">
					<div className="flex flex-col space-y-2 pt-4 w-1/3">
						<span>GENERAL</span>
						<a className="hover:underline" href="/">Home</a>
						<a className="hover:underline" href="/">About us</a>
						<a className="hover:underline" href="/">Terms of service</a>
					</div>

					<div className="flex flex-col space-y-2 pt-4 w-1/3">
						<span>JOIN</span>
						<a className="hover:underline" href="/">Sign up</a>
						<a className="hover:underline" href="/">Log in</a>
					</div>

					<div className="flex flex-col space-y-2 pt-4 w-1/3">
						<span>SUPPORT</span>
						<a className="hover:underline" href="/">Contact Us</a>
						<a className="hover:underline" href="/">FAQ</a>
					</div>
				</div>
			</div>

			<div className="flex px-12 p-6 text-gray-800 text-sm">
				<span>© 2020MVP Marketplace — Powered by platformOS</span>
			</div>
		</footer>
	);
};

export default Footer;