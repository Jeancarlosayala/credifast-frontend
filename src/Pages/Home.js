import styles from '../styles/home.module.css'

function Home() {
  return (
    <div>
      <div className="mx-auto">
        <section className={styles.section}>
          <div className={styles.text_container}>
            <p>Obten el credito que buscas</p>
            <p>Credito seguro y con planes que se adaptan a tus necesidades</p>
            <a href='/form'><button className={styles.hire_btn}>Obten tu credito</button></a>
          </div>

          <img
            alt='prestamo'
            src='https://firebasestorage.googleapis.com/v0/b/images-b907b.appspot.com/o/prestamo.png?alt=media&token=052113ef-19d0-43f2-b882-aded351f9d7a'
            className={styles.model} />
        </section>
      </div>

      <section style={{ height: '200px' }}>
        <div>
          <img
            className="img-fluid"
            src="https://firebasestorage.googleapis.com/v0/b/images-b907b.appspot.com/o/Captura.PNG?alt=media&token=194752c5-df4a-4a4b-b84f-3ec60f1be8f3"
            alt="cap" />
        </div>
      </section>
      <section className={styles.footer}>
        <h5 style={{ marginLeft: '10px', padding: '6px' }}>CrediFast</h5>

        <hr />

        <div className="">
          <p>
            CrediFast, Sociedad Anónima Promotora de Inversión de Capital Variable, Sociedad Financiera de Objeto
            Múltiple, para su constitución y operación con tal carácter, no requiere de
            autorización de la Secretaría de Hacienda y Crédito Público, no obstante, se encuentra sujeta a la supervisión
            de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el artículo 56 de
            la
            Ley General de Organizaciones y Actividades Auxiliares del Crédito. Todos los derechos reservados.
            Prohibida la reproducción total o parcial del contenido de este sitio.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;