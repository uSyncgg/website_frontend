import styles from './Home.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="/reportproblem" className={styles.reportProblem}>Report a problem</a>
            <div className={styles.footerImages}>
                <a href='https://www.linkedin.com/company/usync-llc/' target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/Bx4MX1t.png" alt="LinkedIn" /></a>

                <a href='https://www.instagram.com/usyncgg/?next=%2F'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/YOav7r1.png" alt="Instagram"/></a>

                <a href='https://twitter.com/uSyncGG'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/p0wIHEq.png" alt="Twitter or X"/></a>

                <a href='mailto:contact@usync.gg'>
                    <img src="https://i.imgur.com/mUzX7o1.png" alt="Gmail"/></a>

            </div>

            <p className={styles.footer}>
                contact@usync.gg ©2022 by uSync LLC. <a href="/more/contactus" className={styles.contactus}>Contact Us</a> <br />
                All content, game titles, trade names and/or trade dress, trademarks, artworks and associated imagery are <br />
                trademarks and/or copyright material of their respective owners. <br />Version: BETA <br/>
            </p>
        </footer>
    );
}

export default Footer;