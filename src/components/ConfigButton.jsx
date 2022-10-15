import React from 'react';
import { Link } from "react-router-dom";

const ConfigButton = () => {
    const styles = {createButton:{
        color:'white',
        fontFamily: 'Anonymous Pro',
        fontSize:'20px',
        backgroundColor:'black',
        width:'140px',
        height:'20px',
        borderRadius:'15px',
        margin:'0 auto',
        textAlign:'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'25px',
        position:'relative',
        top:'90px'
    },deleteButton:{
        color:'white',
        fontFamily: 'Anonymous Pro',
        fontSize:'20px',
        backgroundColor:'black',
        width:'140px',
        height:'20px',
        borderRadius:'15px',
        margin:'0 auto',
        textAlign:'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'25px',
        position:'relative',
        top:'100px'
    }}
    return (
        <div>
            <Link to="create">
                <div style={styles.createButton}>Создать конфиг</div>
            </Link>
            <Link to="delete">
                <div style={styles.deleteButton}>Удалить конфиг</div>
            </Link>
        </div>
    );
}

export default ConfigButton;
