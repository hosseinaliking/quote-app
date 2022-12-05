import React, { useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

import fetchCommnet from "../../api/fetch-comments";

const Comments = ({ quoteId }) => {
  const [showComment, setShowComment] = useState(false);
  const commentRef = useRef();

  const { data, isLoading, isError } = useQuery(["comments", quoteId], () =>
    fetchCommnet(quoteId)
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCommnet) => {
      return axios.post("http://localhost:3001/comments", newCommnet);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", quoteId] });
    },
  });

  const showCommentHandler = () => {
    setShowComment((pre) => !pre);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();

    mutation.mutate({
      "quoteId": quoteId,
      "title": commentRef.current.value
    })

    commentRef.current.value = '';
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <p className="font-bold text-xl">Your comments</p>

      {showComment && (
        <form onSubmit={submitCommentHandler} className="w-[100%] h-24 flex flex-col items-center gap-3">
          <textarea
            className="w-[50%] h-full rounded-md p-3"
            type="text"
            placeholder="write comment here ..."
            ref={commentRef}
          />
          <button
            type="submite"
            className="border border-cyan-500 px-3 py-1 rounded-md"
          >
            Add Comment
          </button>
        </form>
      )}

      <div>
        {!showComment && (
          <button
            className="border px-3 py-1 rounded-md"
            onClick={showCommentHandler}
          >
            Show Comments
          </button>
        )}
      </div>

      <ul>
        {!isLoading &&
          data.map((comment, index) => {
            return <li key={index}>{comment.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Comments;
