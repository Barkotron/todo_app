import styles from "../styles/Sidebar.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarTaskList({ tasks, handleSelectTask }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
      >
        <motion.ul>
          {tasks.map((item) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["sidebar-menu-subitem"]}
              key={item.title}
              onClick={() => handleSelectTask(item)}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
}
