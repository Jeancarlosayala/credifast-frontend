import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from '../styles/login.module.css'
import finance from '../img/finance.svg'
import Swal from 'sweetalert2'

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
                    Swal.fire(
                        res.data.message,
                        res.data.info,
                        res.data.icon)
                    navigate("/login")
                })
        } if (name === "" || email === "" || password === "" || reEnterPassword ==="") {
            Swal.fire(
                'Campos vacios',
                'Por favor completa todos los campos solicitados',
                'error')
        } else {
            Swal.fire(
                'Las contraseñas no coinciden',
                'Por favor verifica que las contraseñas sean iguales',
                'error')
        }

    }

    return (

        <div>
            <div className={styles.contenedor}>
                <div className={styles.forms_container}>
                    <div className={styles.signin}>
                        <div className={styles.sign_in_form}>
                            <h2 className={styles.title}>Registrate</h2>
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
                            <h3>¿Ya tienes una cuenta?</h3>
                            <p>Incia sesion y revisa tu buro las veces que quieras y cuando quieras!</p>
                            <button className={styles.button} onClick={() => navigate('/login')} id="sign-up-button">Inicia Sesion</button>
                        </div>
                        <img
                            src={finance}
                            alt="finance"
                            className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register