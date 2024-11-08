import styles from "./header.module.css"


const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <button className={styles.headerBtn}>로그인</button>
            <button className={styles.headerBtn}>회원가입</button>
        </header>
    );
};

export default Header;