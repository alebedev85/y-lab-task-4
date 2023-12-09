import {memo} from "react";
import PropTypes from "prop-types";
import Language from "../language";
import './style.css';

function Head({title}) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      <Language />
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
};

export default memo(Head);
