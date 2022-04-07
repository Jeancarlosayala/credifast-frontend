

function Payment() {
  return (
    <div className="mx-auto responsive">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header" style={{ background: '#fac95f' }}>
              <h6 style={{ color: '#fff' }}>Resumen de Pago</h6>
            </div>
            <div className="card-body table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MISCORE</td>
                    <td>Servicio Mi Score ®</td>
                    <td>$30</td>
                    <td>$30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr className="responsive" style={{ width: '70%', margin: 'auto', marginTop: '20px' }} />
      <div className="row justify-content-center">
        <div className="col-md-8 mt-2">
          <p>Los datos con asteriscos (*) son obligatorios</p>
        </div>

        
      </div>
    </div>
  );
}

export default Payment;