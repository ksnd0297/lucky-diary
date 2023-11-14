import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="kr">
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id="modal" />
				<div id="popup" />
				<div id="toast" />
			</body>
		</Html>
	);
}
