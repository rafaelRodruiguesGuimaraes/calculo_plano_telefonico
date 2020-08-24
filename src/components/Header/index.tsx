import React from 'react';

import './styles.css';

interface headerProps {
    headerTitle: string;
}

const Header: React.FC<headerProps> = ({headerTitle }) => {
    return  (
        <h1>{headerTitle}</h1>
    )
}

export default Header;