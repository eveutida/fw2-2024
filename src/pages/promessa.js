import { useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";

export default function Promessa() {
const [pao, setpao] = useState("")
    setTimeout(() => {
        document.title = "Promessa é dívida";
        setpao("é dívida");
    }, 4000);
    return <>
        <Menu />
        <Container>
            Promessa {pao==="" ? "<carregando>" : pao}
        </Container>
        <Footer />
    </>
}