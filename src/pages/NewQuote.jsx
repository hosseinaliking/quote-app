import React, { useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useHistory, Prompt } from "react-router-dom";
import Container from "../layout/Container";

const NewQuote = () => {
  const [enteredForm, setEnteredForm] = useState(false);

  const authorRef = useRef();
  const textRef = useRef();

  const history = useHistory();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newQuote) => {
      return axios.post("http://localhost:3001/quotes", newQuote);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["allQuotes"]);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    mutation.mutate({
      author: authorRef.current.value,
      quote: textRef.current.value,
    });

    history.push("/");
  };

  const focusHandler = () => {
    setEnteredForm(true);
  };

  const clickHandlerForFocus = () => {
    if (textRef.current.value !== "" && authorRef.current.value !== "") {
      setEnteredForm(false);
    }
  };

  return (
    <>
      <Prompt
        when={enteredForm}
        message={(location) => "Are you sure want to leave page?"}
      />
      <Container>
        <form
          onSubmit={submitHandler}
          onFocus={focusHandler}
          className="w-[50%] mx-auto p-3 shadow-md rounded-md"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Author</label>
              <input
                className="p-1 pl-2"
                type="text"
                ref={authorRef}
                placeholder="Author name ..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="text">Text</label>
              <textarea
                className="p-1 pl-2 h-24"
                type="text"
                ref={textRef}
                placeholder="write quote here ..."
              ></textarea>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="bg-emerald-400 py-1 px-5 rounded-md shadow-md hover:shadow-lg transition-shadow "
                onClick={clickHandlerForFocus}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default NewQuote;
