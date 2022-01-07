import React, { FC } from 'react';

import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';

export enum Orientation {
	VERTICAL,
	HORISONTAL,
}

type RadioChooseProps = {
	chooseList: string[];
	selected: string | null;
	setSelected: React.Dispatch<React.SetStateAction<string | null>>;
	orientation?: Orientation;
	showV?: boolean;
};

const RadioChoose: FC<RadioChooseProps> = ({
	chooseList,
	selected,
	setSelected,
	orientation = Orientation.HORISONTAL,
	showV = true,
	...props
}) => {
	return (
		<RadioGroup value={selected} onChange={setSelected} {...props}>
			<div
				className={`flex flex-wrap gap-2 ${
					orientation === Orientation.VERTICAL && 'flex-col '
				}justify-center`}
			>
				{chooseList.map((option) => (
					<RadioGroup.Option
						key={option}
						value={option}
						className={({ active, checked }) =>
							`flex-1 flex items-center justify-between select-none transition-all outline-none cursor-pointer px-3 py-2 rounded-lg shadow-lg ${
								active ? 'ring-4 ring-sky-500 ring-opacity-30' : 'ring-0'
							} ${
								checked
									? 'bg-sky-900 active:bg-sky-800 text-white shadow-sky-900/30'
									: 'bg-white text-gray-900 hover:bg-gray-100'
							}`
						}
					>
						{({ checked }) => (
							<>
								<RadioGroup.Label
									as="p"
									className={`flex-1 m-2 transition-all ${checked ? 'font-bold' : 'font-medium'}`}
								>
									{option}
								</RadioGroup.Label>

								{showV && (
									<div
										className={`flex justify-center items-center transition-all duration-500 text-white bg-white rounded-full ml-2 ${
											checked ? 'w-6 h-6 bg-opacity-20' : 'w-0 h-0 bg-opacity-0'
										}`}
									>
										<CheckIcon className="w-4 h-4 m-1" />
									</div>
								)}
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
};

export default RadioChoose;
