import React from 'react';
import { ThemeProvider } from 'providers/theme';

const Root = (): JSX.Element => {
	return (
		<ThemeProvider>
			<h1>Hello World!</h1>
		</ThemeProvider>
	);
};

export default Root;
