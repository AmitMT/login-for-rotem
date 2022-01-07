import React, { useState } from 'react';

import { UserIcon, LockClosedIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { NextPage } from 'next';

import CustomHeader from '../components/CustomHeader';
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

			<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-teal-500 to-fuchsia-600">
				<form
					className="flex flex-col items-center w-full max-w-md bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg border-2 border-white"
					onSubmit={(e) => {
						e.preventDefault();

						// 🚀
					}}
				>
					<h1 className="font-bold text-4xl">Register</h1>
					<div className="group w-full bg-white p-4 rounded-lg shadow-lg mt-8">
						<label htmlFor="username">
							<div className="text-sm mb-1 font-medium text-gray-500 transition-colors group-focus-within:text-gray-900">
								Username
							</div>
							<div className="flex justify-center items-center border-b-2 transition-colors border-b-gray-200 group-focus-within:border-b-gray-400 rounded-b-sm cursor-text">
								<UserIcon className="h-4 transition-colors text-gray-400 group-focus-within:text-gray-500" />
								<input
									className="flex-1 bg-transparent outline-none p-2 rounded-md"
									type="text"
									id="username"
									placeholder="Type your username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
						</label>
					</div>
					<div className="group w-full  bg-white p-4 rounded-lg shadow-lg mt-2">
						<label htmlFor="password">
							<div className="text-sm mb-1 font-medium text-gray-500 transition-colors group-focus-within:text-gray-900">
								Password
							</div>
							<div className="flex justify-center items-center border-b-2 transition-colors border-b-gray-200 group-focus-within:border-b-gray-400 rounded-b-sm cursor-text">
								<LockClosedIcon className="h-4 transition-colors text-gray-400 group-focus-within:text-gray-500" />
								<input
									className="flex-1 bg-transparent outline-none p-2 rounded-md"
									type="password"
									id="password"
									placeholder="Type your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</label>
					</div>
					<div className="mt-2 w-full">
						<RadioChoose
							chooseList={genders}
							// orientation={Orientation.VERTICAL}
							selected={selectedGender}
							setSelected={setSelectedGender}
						/>
					</div>
					<div
						className={`group w-full overflow-hidden bg-white p-4 rounded-lg shadow-lg mt-2 ease-out transition-all duration-700 ${
							openNickname ? 'h-[98px]' : 'h-0 p-0'
						}`}
					>
						<label htmlFor="nickname">
							<div className="flex text-sm mb-1 font-medium text-gray-500 transition-colors group-focus-within:text-gray-900">
								<div className="flex-1">Nickname</div>
								<div className="text-sky-900 font-normal opacity-50">Optional</div>
							</div>
							<div className="flex justify-center items-center border-b-2 transition-colors border-b-gray-200 group-focus-within:border-b-gray-400 rounded-b-smcursor-text">
								<EmojiHappyIcon className="h-4 transition-colors text-gray-400 group-focus-within:text-gray-500" />
								<input
									className="flex-1 bg-transparent outline-none p-2 rounded-md"
									type="text"
									id="nickname"
									placeholder="Type your nickname"
									value={nickname}
									onChange={(e) => setNickname(e.target.value)}
								/>
							</div>
						</label>
					</div>
					<button
						type="submit"
						className={`space-x-2 w-full mt-8 p-4 bg-sky-900 shadow-lg shadow-sky-900/30 rounded-lg font-bold uppercase transition-all ease-out active:bg-sky-800 text-gray-300 ring-0 focus:ring-4 ring-sky-500 ring-opacity-30 ${
							openNickname ? 'mt-8 hover:text-white' : 'mt-6'
						}`}
					>
						<div className="">Register</div>
					</button>
				</form>
			</main>
		</>
	);
};

export default Index;
