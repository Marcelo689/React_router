import styles from "./Banner.module.css"
import circuloColorido from "../../assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                
                </p>

            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antonio Evaldo"
                    aria-hidden={true}
                />

            </div>
        </div>

    );
}
