import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children, selector }: { children: ReactNode; selector: string }) {
	const [element, setElement] = useState<Element | null>(null);

	useEffect(() => {
		setElement(document.querySelector(selector));
	}, [selector]);

	if (!element) {
		return <>{children}</>;
	}

	return ReactDOM.createPortal(children, element);
}

export default Portal;
