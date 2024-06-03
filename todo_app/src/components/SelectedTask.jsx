import styles from "../styles/SelectedTask.module.css";
import { motion } from "framer-motion";
export default function SelectedTask({ task }) {
  return (
    <div className={styles["selected-task-wrapper"]}>
      <motion.div
        key={"selectedTask" + task.title}
        animate={{ opacity: [0, 1], filter: "blur(0px)", y: 0 }}
        initial={{ opacity: [1, 0], filter: "blur(5px)", y: -30 }}
        //exit={{ opacity: [1, 0], x: [0, -100] }}
        transition={{ duration: 0.25 }}
      >
        <div className={styles["selected-task"]}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.date}</p>
        </div>

        <div className={styles["selected-task"]}>
          {task.completed ? (
            <button>Set Active</button>
          ) : (
            <button>Mark as Completed</button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
