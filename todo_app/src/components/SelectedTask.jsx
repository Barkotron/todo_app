import styles from "../styles/SelectedTask.module.css";
export default function SelectedTask({ task }) {
  return (
    <div className={styles["selected-task-wrapper"]}>
      <div className={styles["selected-task"]}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.date}</p>
      </div>
    </div>
  );
}
