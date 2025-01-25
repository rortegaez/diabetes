import { createContext, useContext, useState } from 'react';

const RatioContext = createContext()

export function RatioProvider({children}){
	const [inputValue, setInputValue] = useState('');
	const [ratio, setRatio] = useState(0.5)

	const handleInputChange = (event) => {
		console.log('handle Change')
		setInputValue(event.target.value);
	};

	const updateRatio = () => {
		console.log('updateRatio')
		const newRatio = parseFloat(inputValue);
		if (!isNaN(newRatio)) {
			setRatio(newRatio);
			console.log(`Update ratio to: ${newRatio}`)
		}
	}

	return (
		<RatioContext.Provider value={{ ratio, handleInputChange, inputValue, updateRatio}}>
			{children}
		</RatioContext.Provider>
	)
}

export const useRatio = () => {
	return useContext(RatioContext)
}