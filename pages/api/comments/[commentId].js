import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id === +commentId);

    res.status(200).json(comment);
  }

  if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === +commentId
    );
    const commentIndex = comments.findIndex(
      (comment) => comment.id === +commentId
    );

    comments.splice(commentIndex, 1);
    res.status(200).json(deletedComment);
  }
}
