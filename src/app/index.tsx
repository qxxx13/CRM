import './styles/index.css';

import { AppRouting } from 'pages/index';
import React from 'react';

import { withProviders } from './providers';

const App = () => {
    return <AppRouting />;
};

export default withProviders(App);
