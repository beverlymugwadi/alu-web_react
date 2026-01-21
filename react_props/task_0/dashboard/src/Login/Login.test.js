import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login';

it('Login renders without crashing', () => {
	const div = document.createElement('div');
	const root = createRoot(div);
	root.render(<Login />);
	root.unmount();
});
