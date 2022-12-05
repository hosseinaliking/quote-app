import React from "react";

import { useQuery } from "react-query";
import fetchAllQuotes from "../../api/fetch-all-quotes";

import Container from "../layout/Container";
import QuotesList from "../components/QuotesList";

//* Images *//
import loadingGif from "../assets/loading.gif";

const AllQuotes = () => {
  const { data, isLoading, isError } = useQuery(["allQuotes"], fetchAllQuotes);

  return (
    <Container>
      {isLoading ? (
        <div className="flex justify-center">
          <img src={loadingGif} alt="loading gif" className="w-24 h-24" />
        </div>
      ) : (
        <QuotesList data={data} />
      )}
    </Container>
  );
};

export default AllQuotes;
