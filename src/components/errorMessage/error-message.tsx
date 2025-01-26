import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element{
  return (
    <div className={styles.error}>
      There was an error while loading data, please try again
    </div>
  );
}
export default ErrorMessage;
