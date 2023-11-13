import { useMemo, useState } from 'react';
import style from './TicTac.module.scss'
import Squers from '../Squers/Squers.jsx';

function TicTac() {
  const finale = [
    [1, 5, 9],
    [1, 2, 3],
    [1, 4, 7],
    [4, 5, 6],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [7, 8, 9],
  ]
  const [queue, setQueue] = useState('X');
  const [win, setWin] = useState(false);
  const [state, setState] = useState(0);
  const [reset, setReset] = useState(false);
  const [base, setBase] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  });
  const cheackWin = () => {
    finale.map((item) => {
      if (base[item[0]] != null && base[item[1]] != null && base[item[2]] != null) {
        base[item[0]] === base[item[1]] && base[item[1]] === base[item[2]]
          ? setWin((prev) => !prev)
          : null;
      }
    });
  };
  useMemo(() => {
    if (reset !== true) {
      setQueue((prev) => {
        if (prev === 'X') return 'O';
        return 'X';
      });
      setState((prev) => prev + 1);
      cheackWin();
    }
    if (reset === true) {
      setBase((prev) => {
        for (let index = 0; index <= 9; index++) {
          prev[index] = null;
        }
        return { ...prev };
      });
      setState(0);
      setQueue('X');
      setWin(false);
      setReset(false);
    }
  }, [base, reset]);

  return (
    <>
      <div>
        <h3>All moves: {state}</h3>
        {!win ? <h3>The move does: {queue}</h3> : null}
        {win ? <h3>Winner {queue === 'X' ? 'O' : 'X'}</h3> : null}
      </div>
      <div>
        <div className={style.containerCell}>
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={1}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={2}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={3}
          />
        </div>
        <div className={style.containerCell}>
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={4}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={5}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={6}
          />
        </div>
        <div className={style.containerCell}>
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={7}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={8}
          />
          <Squers
            setState={setState}
            win={win}
            base={base}
            queue={queue}
            setBase={setBase}
            value={9}
          />
        </div>
        {win || state == 10 ? <button className={style.restartBtn} onClick={() => setReset(true)}>Restart</button> : null}
      </div>
    </>
  );
}

export default TicTac;
