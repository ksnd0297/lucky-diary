import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/Calendar.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RecoilRoot>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
					/>
				</Head>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}
