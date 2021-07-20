import LayersIcon from '@material-ui/icons/LayersOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNoneOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
	return (
		<header className="flex bg-white h-20 shadow sticky top-0 px-12">
			<div className="flex items-center py-4">
				<div className="bg-blue-400 rounded-full p-1">
					<LayersIcon fontSize="large" className="text-white" />
				</div>
				<span className="text-xl ml-2">MVP Marketplace</span>
				<HomeIcon fontSize="large" className="text-gray-600 ml-2" />
			</div>

			<div className="flex items-center space-x-4 mx-auto">
				<input type="text" className="rounded-sm" placeholder="Search in everything" />
				<button className="rounded-sm border-blue-600 text-blue-600 border-2 p-2 bg-white hover:bg-blue-100">Search</button>
			</div>

			<div className="flex items-center space-x-6 text-gray-600 flex ml-auto">
				<div className="flex items-center space-x-4">
					<a href="/"><NotificationsNoneIcon fontSize="large" /></a>
					<a href="/"><FavoriteBorderIcon fontSize="large" /></a>
					<a href="/"><AddCircleOutlineIcon fontSize="large" /></a>
					<a href="/"><ChatIcon fontSize="large" /></a>
					<a href="/"><ShoppingCartIcon fontSize="large" /></a>
				</div>
				<a href="/" className="rounded-sm bg-gray-100 p-1 px-4 flex items-center">
					admin
					<img className="object-cover rounded-full ml-2" src="https://uploads.staging.oregon.platform-os.com/instances/4334/property_uploads/photo/photo/18b5badd-966c-48f9-a992-a97b7ac3fed6/small_Eldar Butuhanov.jpg" width="20" height="20" alt="avatar" data-avatar="" />
				</a>
				<a href="/">DE</a>
			</div>
		</header>
	);
};

export default Header;