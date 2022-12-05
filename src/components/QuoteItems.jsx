import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


const QuoteItems = ({ data }) => {
  const match = useRouteMatch();

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ");
  };


  return (
    <Link
      to={`${match.path}/${data.id}`}
      className={`flex flex-col justify-between h-24 border shadow-md rounded-md p-2`}
    >
      <p className="font-medium">{data.quote}</p>
      <i className="text-right">{capitalize(data.author)}</i>
    </Link>
  );
};

export default QuoteItems;
