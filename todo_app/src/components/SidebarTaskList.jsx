import styles from "../styles/Sidebar.module.css";
import { AnimatePresence, motion } from "framer-motion";

const container = {

  show: {
    opacity: [0,1],
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItem = {
  hidden: { opacity: [1,0], y: [0,-30] },
  show: { opacity: [0,1], y: [-30,0] },
};

export default function SidebarTaskList({ tasks, handleSelectTask }) {
  return (
    <motion.ul
      // key={"sidebarTaskList" + tasks}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >

      {tasks.map((item) => (
        <motion.li
          layout
          key={item.id}
          variants={listItem}
          transition={{ type: "spring", bounce: 0.3, duration: 0.65 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles["sidebar-menu-subitem"]}
          onClick={() => handleSelectTask(item)}
        >
          {item.title}
        </motion.li>
      ))}
    </motion.ul>
  );
}
