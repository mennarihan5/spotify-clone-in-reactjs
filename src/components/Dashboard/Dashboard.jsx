import React from 'react';
import styles from './Dashboard.module.css';

function DashboardPage(props) {
    return(
        <div className={styles.container}>
            <section role='content'>
                <aside>aside</aside>
                <main>main</main>
            </section>
        <footer className={styles.footer}>footer</footer>
        </div>
    )    
}

export default DashboardPage;

