import React from "react";
import { useQuery } from "react-query";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import fetchQuote from "../../api/fetch-quote";

//* Components *//
import Comments from "../components/Comments";
import Container from "../layout/Container";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { data, isLoading } = useQuery(["quote", params.quoteId], () =>
    fetchQuote(params.quoteId)
  );

  return (
    <>
      <Container>
        <p> {!isLoading && data.quote} </p>

        <Route path={`${match.url}`} exact>
          <Link to={`${match.url}/comments`}>
            {/* We use react router feature to show comment section instead of location path and use state */}
            Show comment
          </Link>
        </Route>

        <Route path={`${match.url}/comments`}>
          <Comments quoteId={params.quoteId} />
        </Route>
      </Container>
    </>
  );
};

export default QuoteDetail;
