import React from 'react';
import { useForm } from "react-hook-form";

const DeleteConfigPage = () => {
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        const configs = localStorage.getItem('configs');
        const nameConfigDelete = data.nameConfig;
        let updatedConfigs = JSON.parse(configs);
        delete updatedConfigs[nameConfigDelete]
        localStorage.setItem('configs', JSON.stringify(updatedConfigs));
    };
    const styles = {
        title: {
            textAlign: 'center',
            fontFamily:'Anonymous Pro',
            position:'relative',
            top:'220px',
            fontSize:'30px'
        }
    }
    return (
        <div>
            <p style={styles.title} className="titleDeleteConfig">Удалить конфиг</p>
            <div className="center_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="Название конфига" className="configName" {...register("nameConfig")}/>
                    <input type="submit" value="Потвердить" className="buttonDelete"/>
                </form>
            </div>
        </div>
    );
}

export default DeleteConfigPage;
