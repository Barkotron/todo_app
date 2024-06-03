import styles from "../styles/Sidebar.module.css";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

export default function SidebarTaskList({ tasks, handleSelectTask }) {
  return (
    <AnimatePresence>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {tasks.map((item) => (
          <AnimatePresence>
            <motion.li
              variants={listItem}
              transition={{ type: "spring", bounce: 0.3, duration: 0.65 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["sidebar-menu-subitem"]}
              key={item.title}
              onClick={() => handleSelectTask(item)}
            >
              {item.title}
            </motion.li>
          </AnimatePresence>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
