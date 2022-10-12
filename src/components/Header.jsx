import React from 'react';

const Header = () => {
    const styles = {
        h1:{
            fontFamily:'NIKEA',
            color:'white',
            fontSize:'25px',
            backgroundColor:'#000',
        },
        h2:{
            display:'flex',
            fontFamily:'NIKEA',
            fontSize:'25px',
            color:'white',
            backgroundColor:'#000',
            position: 'relative',
            left:'20px'

        },
        container:{
            backgroundColor:'#000',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center'
        },
        link:{
            all:'unset'
        }
    };
    return (
        <div>
            <a style={styles.link} href="./">
                <header style={styles.container}>
                    <h1 style={styles.h1}>nconfig</h1>
                </header>
            </a>
        </div>
    );
}

export default Header;
