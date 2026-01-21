import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './Footer';

it('Footer renders without crashing', () => {
	const div = document.createElement('div');
	const root = createRoot(div);
	root.render(<Footer />);
	root.unmount();
});
