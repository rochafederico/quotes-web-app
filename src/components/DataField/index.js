import React from "react";
import formatDate from "../../utils/formatDate";

export default React.forwardRef((props, ref) => {
  const nowDate = formatDate(new Date());
  return <input type="date" ref={ref} max={nowDate} {...props} />;
});
