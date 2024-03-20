//designing common button design for all the button and then importing the button

import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "" /*className can be passed eg className={`px-4 py-2 runded ${variablename ie className}`} */,
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props} /*...props are remaining properties */
    >
      {children}
    </button>
  );
}
