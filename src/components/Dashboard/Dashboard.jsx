import React from 'react';
import styles from './Dashboard.module.css';
import { Sidebar } from '../Sidebar/Sidebar';

function DashboardPage(props) {
    return(
        <div className={styles.container}>
            <section className={styles.content} role='content'>
                <Sidebar />
                <main className={styles.main}>main</main>
            </section>
        <footer className={styles.footer}>footer</footer>
        </div>
    )    
}

export default DashboardPage;

