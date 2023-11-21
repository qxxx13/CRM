import './styles/index.css';

import React from 'react';
import { SideBar } from 'widgets/sidebar';

import { withProviders } from './providers';

const App = () => {
    return (
        <>
            <SideBar />
        </>
    );
};

export default withProviders(App);
