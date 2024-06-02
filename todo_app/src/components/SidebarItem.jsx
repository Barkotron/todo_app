import styles from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";
export default function SidebarItem({ children, listLength, onClick }) {
  return (
    <button className={styles["sidebar-menu-item"]} onClick={onClick}>
      <motion.div className={styles["sidebar-menu-item-children"]}>
        {children}{" "}
        <motion.div
          key={listLength}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          ({listLength})
        </motion.div>
      </motion.div>
    </button>
  );
}
