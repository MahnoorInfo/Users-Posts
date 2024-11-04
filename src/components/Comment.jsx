import { getCommentsForPost } from "../utils/helper";

function comment({ id, comments }) {
  return (
    <div className="mt-2 pt-3 border-t border-gray-200 pl-4">
      <h4 className="text-red-300">Comments</h4>

      {getCommentsForPost(id, comments)?.map((comment) => (
        <p key={comment.id} style={{ marginBottom: "5px" }}>
          <strong>{comment.name}:</strong> {comment.body}
        </p>
      ))}
    </div>
  );
}

export default comment;
