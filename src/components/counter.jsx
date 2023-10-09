import { connect } from "react-redux";
import { actions } from "../actions";

import "./counter.css";

function mapStateToProps(state) {
  return {
    counter: state.value,
  };
}

const Counter = connect(
  mapStateToProps,
  actions
)(({ counter, inc, dec, res, rnd }) => {
  return (
    <>
      <div className="counter">
        <div className="counter__counter">{counter}</div>
        <div className="counter__buttons">
          <button className="counter__button" onClick={inc}>
            INC
          </button>
          <button className="counter__button" onClick={dec}>
            DEC
          </button>
          <button className="counter__button" onClick={rnd}>
            RND
          </button>
          <button className="counter__button" onClick={res}>
            RES
          </button>
        </div>
      </div>
    </>
  );
});

export { Counter };
