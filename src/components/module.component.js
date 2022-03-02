import { useEffect, useState } from 'react';
import Pagination from './pagination.component';
import { Box, LinearProgress } from '@mui/material'

function Module({ add, handleChange, api }) {

  useEffect(() => {
  }, [])
  const resultApi = api.map(item => item);

  const [dataFromApi] = useState(resultApi)
  const [getResults, setGetResults] = useState([...resultApi].splice(0, 11));
  const [currentPage, setCurrentPage] = useState(0);

  const nextHandler = () => {
    const totalElements = dataFromApi.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * 11;

    if (firstIndex === totalElements) return;

    setGetResults([...dataFromApi].splice(firstIndex, 11));
    setCurrentPage(nextPage);
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const firstIndex = prevPage * 11

    setGetResults([...dataFromApi].splice(firstIndex, 11))
    setCurrentPage(prevPage)

  }

  return (
    <div>

      <Box sx={{ width: '80%', margin: 'auto', marginBottom: '20px' }}>
        <LinearProgress variant="buffer" value={currentPage * 33.33} valueBuffer={currentPage * 66.66} />
      </Box>

      <Pagination
        handleChange={handleChange}
        items={getResults}
      />

      {
        currentPage === 0 ? <div className='input-group justify-content-center' >
          <button className='btn btn-primary' onClick={nextHandler}> next</button>
        </div> : null
      }
      {
        currentPage === 1 ? <div className='' style={{ margin: 'auto' }}>
          <div className="input-group justify-content-center">
            <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito hipotecario?</h5>
            <div className='form-check'>
              <label className='form-check-label'>Si</label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </div>
            <div className='form-check' style={{ marginLeft: '20px' }}>
              <label className='form-check-label'>No</label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </div>
          </div>

          <div className="input-group justify-content-center">
          <h5 style={{ fontSize: '15px', marginRight: '10px', marginTop: '2px' }}>¿Cuenta con credito automotriz?</h5>
          <div className='form-check'>
            <label className='form-check-label'>Si</label>
            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
          </div>
          <div className='form-check' style={{ marginLeft: '20px' }}>
            <label className='form-check-label'>No</label>
            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
          </div>
        </div>

          <div className='input-group justify-content-center'>
            <button className='btn btn-success' id='buttonForm' onClick={add} type="submit">Enviar</button>
            <button onClick={prevHandler}>prev</button>
          </div>
        </div> : null
      }

    </div>
  );
}

export default Module;