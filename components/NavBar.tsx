import styles from "../styles/components/NavBar.module.scss";
export default function NavBar() {
  const item = ["home", "about"];
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar}>
        {item.map(function (item) {
          return <li className={styles.item}>{item}</li>;
        })}
      </ul>
    </nav>
  );
}
