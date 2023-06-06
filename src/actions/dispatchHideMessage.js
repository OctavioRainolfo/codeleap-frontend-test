import React from 'react'
import { hideMessage } from '../redux/slice'

function DispatchHideMessage(dispatch) {
  dispatch(hideMessage());
}

export default DispatchHideMessage