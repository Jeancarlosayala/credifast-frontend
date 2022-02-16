import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from '../styles/login.module.css'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("https://backend-credifast.herokuapp.com/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (

        <div>
            <div className={styles.contenedor}>
                <div className={styles.forms_container}>
                    <div className={styles.signin}>
                        <div className={styles.sign_in_form}>
                            <h2 className={styles.title}>Iniciar Sesion</h2>
                            <div className={styles.input_field}>
                                <i className="fa fa-user"></i>
                                <input type="text" name="name" value={user.name} placeholder="Nombre" onChange={handleChange}></input>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fa fa-envelope"></i>
                                <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fa fa-lock"></i>
                                <input type="password" name="password" value={user.password} placeholder="Contraseña" onChange={handleChange}></input>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fa fa-lock"></i>
                                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirmar contraseña" onChange={handleChange}></input>
                            </div>
                            <button className={styles.button} onClick={register}>Registrar</button>
                        </div>
                    </div>
                </div >
            </div >

            <div className={styles.panels_container}>
                <div className={styles.panel}>
                    <div className={styles.left_panel}>
                        <div className={styles.content}>
                            <h3>¿Eres Nuevo?</h3>
                            <p>Registrate para obtener todos los beneficios que te ofrecemos, con CrediFast podras obtener tus prestamos
                                necesarios</p>
                            <button className={styles.button} onClick={() => navigate('/login')} id="sign-up-button">Inicia Sesion</button>
                        </div>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/images-b907b.appspot.com/o/finance.svg?alt=media&token=e42ff8fc-7201-488a-815b-b858c308240f"
                            className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register