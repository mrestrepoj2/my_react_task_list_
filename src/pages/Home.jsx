import styles from "../pages/Home.module.css";
import home from "../assets/home.png";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
function Home() {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.icon}>
                <img src={home} alt="Home" width={160}/>
            </div>
            <h1 className={styles.title}>Lista de Tareas</h1>
            <p className={styles.message}><strong>Crea y completa tus tareas</strong></p>
            <Link to="/tasks">
            </Link>
            </div>
        </>
       
    );
  }
  
  export default Home;