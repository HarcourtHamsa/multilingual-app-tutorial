import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import fr from "../public/locales/fr/common.json";
import en from "../public/locales/en/common.json";
import de from "../public/locales/de/common.json";

import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "fr" ? fr : de;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation_bar}>
        <p>ContentLab</p>

        <div className="links">
          <Link href="/">{t.navigation.home}</Link>
          <Link href="/">{t.navigation.services}</Link>

          <select onChange={changeLanguage}>
            <option value={"en"}>En</option>
            <option value={"fr"}>Fr</option>
            <option value={"de"}>De</option>
          </select>
        </div>
      </div>

      <main className={styles.main}>
        <h1>{t.heading}</h1>

        <p>{t.paragraph}</p>
      </main>
    </div>
  );
}
