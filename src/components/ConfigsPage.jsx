import React from 'react';

const ConfigsPage = () => {
    const styles = {
        title: {
            textAlign: 'center',
            fontFamily:'Anonymous Pro',
            position:'relative',
            top:'195px',
            fontSize:'30px'
        },
        card: {
            backgroundColor: 'black',
            color:'#fff',
            flex: '0 1 calc(30% - 10em)',
            margin:'30px',
            borderRadius:'10px',
        },h2: {
            textAlign: 'center',
            fontFamily:'Anonymous Pro',
            position:'relative',
            top:'80px',
            fontSize:'30px'

        },container:{
            position:'relative',
            top:'120px',
            display:'flex',
            justifyContent: 'center',
            flexWrap:'wrap',
            
        },
        p: {
            fontFamily:'Anonymous Pro',
            textAlign: 'center',
            whiteSpace:'pre-line',
            padding:'10px'
        }
    }
    const configsData = JSON.parse(localStorage.getItem('configs'));
    return (
        <div style={styles.container}>
            {Object.keys(configsData).length > 0 ? Object.keys(configsData).map(function(data, index) {
                return <div key={index} style={styles.card}>
                    <p style={styles.p}>{Object.keys(configsData)[index]}</p>
                    <p style={styles.p}>{configsData[data]}</p>
                </div>
            }):<h2 style={styles.h2}>Конфигов нет!</h2>}
        </div>
    );
}

export default ConfigsPage;
