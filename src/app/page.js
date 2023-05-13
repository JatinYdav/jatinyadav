import Image from "next/image";
import styles from "./page.module.css";
import InfoBox from "./components/InfoBox";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <InfoBox />
      <MainContent />
    </main>
  );
}
