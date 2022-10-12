import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import ConfigButton from "./components/ConfigButton";

function App() {
  const styles = {textTitle:{
    fontFamily:'Fairwall Sans',
    position:'relative',
    top:'70px',
    fontSize:'30px',
    textAlign:'center'

  }}
  return (
    <div>
      <Header/>
      <p style={styles.textTitle}>Сайт для сохранения ваших nginx конфигов</p>
      <ConfigButton/>
    </div>
  );
}

export default App;
