import styles from "../styles/Gift.module.css"

export default function Gift(){
    return(
        <div className={ styles.gift }>
            <div className={ styles.cover }></div>
            <div className={ styles.bodyBox }></div>
            <div className={ styles.giftBow1 }></div>
            <div className={ styles.giftBow2 }></div>
        </div>
    )
}