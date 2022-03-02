import styles from '../styles/home.module.css'
import modelo from '../img/model.PNG'
import pig from '../img/piggy-bank.png'
import tel from '../img/tel.PNG'
import opinion from '../img/opiniones.PNG'

function Home() {
  return (
    <div>
      <div className="mx-auto">
        <section className={styles.section}>
          <div className={styles.text_container}>
            <p>Consulta tu buro de credito</p>
            <p>Convertimos tu consulta de buro en asesoria personalizada para conocer a quien y cuanto debes</p>
            <a href='/register'><button className={styles.hire_btn}>Comienza ahora, es gratis</button></a>
          </div>

          <img
            alt='prestamo'
            src={modelo}
            className={styles.model} />
        </section>
      </div>

      <section className={styles.benefits}>
        <img
          src={pig}
          alt="benefits"
        />

        <img
          src={tel}
          alt="benefits"
        />
      </section>

      <section className={styles.opinion}>
        <img
          src={opinion}
          alt="opiniones"
        />
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