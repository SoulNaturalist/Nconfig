import React from 'react';

const ConfigButton = () => {
    const styles = {createButton:{
        color:'white',
        fontFamily: 'KIA',
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
        fontFamily: 'KIA',
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
            <div style={styles.createButton}>Создать конфиг</div>
            <div style={styles.deleteButton}>Удалить конфиг</div>
        </div>
    );
}

export default ConfigButton;
