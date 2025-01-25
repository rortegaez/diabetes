import { useRef } from 'react';

export function useRatio(){
	const myRatio = useRef(0.5);

	const updateRatio = (ratio) => {
		myRatio.current = ratio;
	}
	return ({updateRatio, myRatio})
}