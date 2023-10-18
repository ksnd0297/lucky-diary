import React, { ReactElement } from 'react';
import Header from '@/components/layout/Header';
import Footer from './Footer';
import Layout from './Layout';

type layoutConfigType = {
	header?: boolean;
	footer?: boolean;
};

export const withLayout = (layoutConfig?: layoutConfigType) => (WrapperComponent: () => ReactElement) =>
	function withLayoutComponent() {
		const { header, footer } = layoutConfig || {};

		return (
			<Layout>
				{header && <Header />}
				<WrapperComponent />
				{footer && <Footer />}
			</Layout>
		);
	};
