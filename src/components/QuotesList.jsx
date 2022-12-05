import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import QuoteItems from "./QuoteItems";

const sortingQuotes = (quotes, sortPara) => {
  return quotes.sort((a, b) => {
    if (sortPara === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });
};

const QuotesList = ({ data }) => {
  const match = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  const quoteParams = new URLSearchParams(location.search);
  const isAscdingSort = quoteParams.get("sort") === "asc";
  const paramForUrl = isAscdingSort ? "des" : "asc";
  const sortingQuotesData = sortingQuotes(data, paramForUrl);

  const clickSortHandler = () => {
    history.push(`${match.path}?sort=${paramForUrl}`);
  };

  return (
    <>
      <button
        onClick={clickSortHandler}
        className="border rounded-md px-5 py-2 mb-5 shadow-sm"
      >
        Sort Acs
      </button>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {sortingQuotesData.map((item, index) => {
          return <QuoteItems data={item} key={index} />;
        })}
      </ul>
    </>
  );
};

export default QuotesList;
