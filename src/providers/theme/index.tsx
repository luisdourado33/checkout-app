import React from 'react';

import type { DefaultTheme } from 'styled-components';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

export const ThemeProvider: React.FC<any> = ({ children }) => {
	const theme: DefaultTheme = {};

	return (
		<StyledComponentsThemeProvider theme={theme}>
			{children}
		</StyledComponentsThemeProvider>
	);
};
