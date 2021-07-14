import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import fullData from '../../Api';
import './App.css';

const Single = () => {
    const {Id} = useParams();
    let parseId = parseInt(Id.replace(':', ''))
    const [singleData, setSingleData]= useState({})

    const getCurrentData = () => {
        fullData.map((e) =>{
            if (e.id === parseId){
                setSingleData(e);
            }
        })
    }
    useEffect(()=>{
        getCurrentData()
    },[])
    
    
    
    
    return (
        <div>
            <h1 className='id'>{singleData.title}</h1>
        </div>
    )
}

export default Single;
