import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

it('Header renders without crashing', () => {
	const div = document.createElement('div');
	const root = createRoot(div);
	root.render(<Header />);
	root.unmount();
});
