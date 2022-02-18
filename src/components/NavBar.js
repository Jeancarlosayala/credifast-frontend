import styles from '../styles/login.module.css'

function NavBar() {
  return (
    <div className="mx-auto">
      <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{ zIndex: '6' }}>
        <div class="container-fluid">
          <div className={styles.logo_nav}>
            <a class="navbar-brand" href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/images-b907b.appspot.com/o/logo.png?alt=media&token=feb7a391-af33-40e5-8313-b4efaae7da0a"
                alt="logo"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;