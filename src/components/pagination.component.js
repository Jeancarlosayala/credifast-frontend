import styles from '../styles/form.module.css'

function Pagination({ items, handleChange }) {
  return (
    <form className={styles.form}>
      <div className={styles.buro_form}>
        {
          items.map(data => {
            return (
              <div className={styles.input_box}>
                <span className={styles.details}> {data.name} </span>
                <input key={data.id} required onChange={handleChange}
                  type={data.type}
                  placeholder={data.placeholder}
                  name={data.name}
                  maxLength={data.length} />
              </div>
            )
          })
        }
        
      </div>
    </form>
  );
}

export default Pagination;