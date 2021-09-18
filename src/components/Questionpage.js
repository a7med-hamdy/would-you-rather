import React from 'react';
import QuestionInformation from '../views/QuestionInfo';
import { useParams } from 'react-router-dom';

const Questionpage = ({ props }) =>{
    let { id } = useParams();
    return(
        <div>
            <QuestionInformation id = {id} />
        </div>
    )
}

export default Questionpage;