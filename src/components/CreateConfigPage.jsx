import React from 'react';
import { useForm } from "react-hook-form";

const CreateConfigPage = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        if (localStorage.getItem('configs') === null && data.nameConfig && data.config) {
            const configName = data.nameConfig;
            const configData = data.config;
            const configsData = {[configName]:configData};
            localStorage.setItem('configs',JSON.stringify(configsData));
        } else if (localStorage.getItem('configs') !== null && data.nameConfig && data.config) {
            const configs = localStorage.getItem('configs');
            const configName = data.nameConfig;
            const configData = data.config;
            const updatedConfigs = {...JSON.parse(configs), [configName]:configData};
            localStorage.setItem('configs',JSON.stringify(updatedConfigs));
        }
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
            <p style={styles.title} className="createConfigTitle">Добавить конфиг</p>
            <div className="center_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="Название конфига" className="configName" {...register("nameConfig")}/>
                    <input defaultValue="Конфиг" className="configValue" {...register("config")}/>
                    <input type="submit" value="Потвердить" className="buttonDelete"/>
                </form>
            </div>
        </div>
    );
}

export default CreateConfigPage;
