import React, { useState } from 'react';

import { UserIcon, LockClosedIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { NextPage } from 'next';

import CustomHeader from '../components/CustomHeader';
import InputLabel from '../components/InputLabel';
import RadioChoose from '../components/RadioChoose';

const genders = ['Male', 'Female'];

const Index: NextPage = () => {
	const [selectedGender, setSelectedGender] = useState<string | null>(null);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const openNickname = username && password && selectedGender;

	return (
		<>
			<CustomHeader />

			<main className="min-h-screen flex items-center justify-center bg-indigo-300">
				<form
					className="flex flex-col items-center m-4 w-full sm:flex-none sm:w-full sm:max-w-md min-w-max bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg py-8 px-4 sm:px-8 rounded-lg shadow-lg border-2 border-white overflow-auto"
					onSubmit={(e) => {
						e.preventDefault();

						// 🚀
					}}
				>
					<h1 className="font-bold text-4xl">Register</h1>
					<InputLabel
						text="Username"
						placeholder="Type your username"
						icon={UserIcon}
						value={username}
						setValue={setUsername}
						className="w-full mt-8"
					/>
					<InputLabel
						text="Password"
						placeholder="Type your password"
						icon={LockClosedIcon}
						value={password}
						setValue={setPassword}
						className="w-full mt-2"
					/>
					<RadioChoose
						chooseList={genders}
						// orientation={Orientation.VERTICAL}
						selected={selectedGender}
						setSelected={setSelectedGender}
						className="mt-2 w-full"
					/>
					<InputLabel
						text="Nickname"
						placeholder="Type your username"
						icon={EmojiHappyIcon}
						value={nickname}
						setValue={setNickname}
						className={`w-full mt-2 rounded-lg overflow-hidden transition-all ease-out duration-700 ${
							openNickname ? 'h-[98px]' : 'h-0 p-0'
						}`}
						rounded={false}
						optional
					/>

					<button
						type="submit"
						className={`space-x-2 w-full mt-8 p-4 bg-sky-900 shadow-lg shadow-sky-900/30 rounded-lg font-bold uppercase transition-all ease-out active:bg-sky-800 text-gray-300 ring-0 focus:ring-4 ring-sky-500 ring-opacity-30 ${
							openNickname ? 'mt-8 hover:text-white' : 'mt-6'
						}`}
					>
						Register
					</button>
				</form>
			</main>
		</>
	);
};

export default Index;
