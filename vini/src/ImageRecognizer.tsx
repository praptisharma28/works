import { FunctionComponent } from "react";
import styles from "./ImageRecognizer.module.css";

const ImageRecognizer: FunctionComponent = () => {
  return (
    <div className={styles.imageRecognizer}>
      <div className={styles.calculator} />
      <img
        className={styles.orangeLogo1}
        loading="lazy"
        alt=""
        src="/main.png"
      />
      <div className={styles.inputHandler}>
        <div className={styles.inputHandlerChild} />
        <img
          className={styles.inputHandlerItem}
          loading="lazy"
          alt=""
          src="/group-92.png"
        />
      </div>
      <img
        className={styles.imageRecognizerChild}
        loading="lazy"
        alt=""
        src="/group-88.png"
      />
      <img
        className={styles.imageRecognizerItem}
        loading="lazy"
        alt=""
        src="/group-91.png"
      />
      <img
        className={styles.imageRecognizerInner}
        loading="lazy"
        alt=""
        src="/group-93.png"
      />
      <img
        className={styles.techSupportIcon}
        loading="lazy"
        alt=""
        src="/tech-support-icon.png"
      />
      <img
        className={styles.document1SvgrepocomIcon}
        loading="lazy"
        alt=""
        src="/document1-svgrepocom.png"
      />
    </div>
  
)}

export default ImageRecognizer;