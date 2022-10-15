import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const styles = {
        h1:{
            fontFamily:'Syncopate',
            color:'white',
            fontSize:'25px',
            backgroundColor:'#000',
        },
        h2:{
            display:'flex',
            fontFamily:'Syncopate',
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
            <Link to="/">
                <header style={styles.container}>
                    <h1 style={styles.h1}>nconfig</h1>
                </header>
            </Link>
        </div>
    );
}

export default Header;
