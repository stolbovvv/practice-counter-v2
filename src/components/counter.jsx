import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions';

import './counter.css';

const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter">
        <div className="counter__counter">{counter}</div>
        <div className="counter__buttons">
          <button className="counter__button" onClick={() => dispatch(actions.inc())}>
            INC
          </button>
          <button className="counter__button" onClick={() => dispatch(actions.dec())}>
            DEC
          </button>
          <button className="counter__button" onClick={() => dispatch(actions.rnd())}>
            RND
          </button>
          <button className="counter__button" onClick={() => dispatch(actions.res())}>
            RES
          </button>
        </div>
      </div>
    </>
  );
};

export { Counter };
