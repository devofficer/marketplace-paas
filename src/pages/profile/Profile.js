import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatIcon from '@material-ui/icons/TextsmsOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import GroupIcon from '@material-ui/icons/GroupOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

const Profile = () => {
	const { register, handleSubmit, setValue } = useForm();
	const id = 11;

	const onSubmit = async (data) => {
		axios.post('/api/profiles', {
			id,
			...data,
			foods: data.foods.join(',')
		});
	};

	const fetchProfile = useCallback(async () => {
		const res = await axios.get('/api/profiles', {
			params: {
				id
			}
		});

		const data = res.data.profile.results[0].properties;

		Object.keys(data).map(key => setValue(key, data[key]));
	}, [setValue]);

	useEffect(() => {
		fetchProfile();
	}, [fetchProfile]);

	return (
		<div className="flex p-12 bg-gray-100 space-x-10">
			<nav className="flex flex-col space-y-6 w-1/5 shadow bg-white p-4">
				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<AccountIcon />
						<span className="ml-4 text-gray-800">Profile</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Public Profile</a>
					<a className="ml-10 text-blue-600" href="/">Edit Profile</a>
				</div>

				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<ChatIcon />
						<span className="ml-4 text-gray-800">Chat</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Inbox</a>
				</div>

				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<CardGiftcardIcon />
						<span className="ml-4 text-gray-800">Selling</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Sold</a>
					<a className="ml-10 text-blue-600" href="/">Items for Sell</a>
					<a className="ml-10 text-blue-600" href="/">List an Item</a>
					<a className="ml-10 text-blue-600" href="/">Returns</a>
					<a className="ml-10 text-blue-600" href="/">Sales Report</a>
					<a className="ml-10 text-blue-600" href="/">Settings</a>
				</div>

				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<ShoppingCartIcon />
						<span className="ml-4 text-gray-800">Buying</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Purchases</a>
					<a className="ml-10 text-blue-600" href="/">Items to Buy</a>
				</div>

				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<PaymentIcon />
						<span className="ml-4 text-gray-800">Payments</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Bank Account</a>
				</div>

				<div className="flex flex-col space-y-2 ml-2">
					<span className="flex items-center">
						<GroupIcon />
						<span className="ml-4 text-gray-800">Community</span>
					</span>
					<a className="ml-10 text-blue-600" href="/">Activity Feed</a>
					<a className="ml-10 text-blue-600" href="/">My Groups</a>
					<a className="ml-10 text-blue-600" href="/">Questions</a>
				</div>
			</nav>

			<div className="flex flex-1 flex-col">
				<h2 className="text-3xl font-bold text-gray-800 p-2">
					Profile Edit
				</h2>

				<div className="flex flex-1">
					<div className="flex flex-col items-center p-8 border-r-2">
						<img className="object-cover rounded-full w-48 h-48 mx-auto text-4xl" src="https://uploads.staging.oregon.platform-os.com/instances/4334/property_uploads/photo/photo/18b5badd-966c-48f9-a992-a97b7ac3fed6/small_Eldar Butuhanov.jpg" width="200" height="200" alt="avatar" data-avatar="" />
					</div>

					<div className="p-8 flex-1">
						<form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">Username:</label>
								<input type="text" {...register("name")} />
							</div>

							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">First Name:</label>
								<input type="text" {...register("first_name")} />
							</div>

							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">Last Name:</label>
								<input type="text" {...register("last_name")} />
							</div>

							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">Date of Birth:</label>
								<input type="date" {...register("birth")} />
							</div>

							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">Favorite Foods:</label>
								<select name="foods" multiple {...register("foods")}>
									<option value="bread">Bread</option>
									<option value="soup">Soup</option>
									<option value="pizza">Pizza</option>
									<option value="sundae">Sundae</option>
								</select>
							</div>

							<div className="flex flex-col space-y-2">
								<label className="text-gray-600">Short Bio:</label>
								<textarea {...register("bio")} />
							</div>

							<div className="flex flex-col space-y-2 text-blue-600">
								<span className="text-gray-600">Enable additional login security:</span>
								<button className="outline border-2 p-2 rounded-md flex items-center w-1/2 bg-white hover:bg-blue-100 border-blue-600">
									<div className="m-auto">
										<VpnKeyIcon />
										<span className="ml-2">Setup two-factor authentication</span>
									</div>
								</button>
							</div>

							<div className="flex">
								<input type="submit" className="ml-auto bg-blue-600 text-white p-2 text-md rounded-sm px-6 hover:bg-blue-500" value="Save" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;