



import React from 'react';
import styles from './container.module.css';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>
        <div className={styles.site_wrap}>
        {children}
        </div>
        
        </div>;
};

export default Container;
