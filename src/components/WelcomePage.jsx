import React from 'react';
import ConfigButton from "./ConfigButton";

const WelcomePage = () => {
    const styles = {textTitle:{
        fontFamily:'Fairwall Sans',
        position:'relative',
        top:'70px',
        fontSize:'30px',
        textAlign:'center'
    
    }}
    return (
        <div>
            <p style={styles.textTitle}>Сайт для сохранения ваших nginx конфигов</p>
            <ConfigButton/>
        </div>
    );
}

export default WelcomePage;
