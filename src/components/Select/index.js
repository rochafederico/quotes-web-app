import React from "react";
import arrowIcon from "../../assets/arrow.png";

export default React.forwardRef(({ items, submitted, ...otherProps }, ref) => {
  return (
    <select
      className={submitted ? "submitted" : ""}
      ref={ref}
      {...otherProps}
    >
      <option />
      {items.map((item, i) =>
        <option key={i} value={item.id}>
          {item.label}
        </option>
      )}
    </select>
  );
});
