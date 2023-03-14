import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Icon(props) {
  const icon = props.checked ? (
    <FaMoon size={36} color="#F4FF8D" className="bg-slate-400 rounded-lg p-1" />
  ) : (
    <FaSun size={36} color="#fce303" className="bg-slate-400 rounded-lg p-1" />
  );

  return <>{icon}</>;
}

export default Icon;
