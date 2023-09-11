import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';
import React, { SetStateAction, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const url = "http://localhost/faeventos/api/index.php?cpf=70269234470"


const Tables = () => {
    const cpf = '70269234470';

    const [resultados, setResultados] = useState([]);

    const getResults = async () => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setResultados(data);
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getResults();

    },[])

  return (
    
    <>
 

     
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
          <div>
              <h2>Resultados da Consulta</h2>

          </div>
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
