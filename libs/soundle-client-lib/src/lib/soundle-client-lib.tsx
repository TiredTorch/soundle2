import styles from './soundle-client-lib.module.css';

/* eslint-disable-next-line */
export interface SoundleClientLibProps {}

export function SoundleClientLib(props: SoundleClientLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SoundleClientLib!</h1>
    </div>
  );
}

export default SoundleClientLib;
