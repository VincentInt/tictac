import style from './Squers.module.scss'

const Squers = ({ win, base, queue, value, setBase}) => {
  const clickBtn = () => {
    if (base[value] === null && win === false) {
      setBase((prev) => {
        prev[value] = queue;
        return { ...prev };
      });
    }
  };
  return (
    <button onClick={clickBtn} className={style.cell}>
      {base[value]}
    </button>
  );
};

export default Squers;
