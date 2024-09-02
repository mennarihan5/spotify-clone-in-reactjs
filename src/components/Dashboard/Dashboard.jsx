import React from 'react';
import styles from './Dashboard.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardPage(props) {
    return(
        <div className={styles.container}>
            <section className={styles.content} role='content'>
                <Sidebar />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </section>
        <footer className={styles.footer}>footer</footer>
        </div>
    )    
}

export default DashboardPage;

