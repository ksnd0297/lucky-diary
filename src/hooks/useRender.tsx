import { useState } from 'react';

const useRerender = () => {
	const [_, setTick] = useState(0);

	const rerender = () => {
		setTick(_ + 1);
	};

	return rerender;
};

export default useRerender;
