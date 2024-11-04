import { getUserById } from "../utils/helper";

function user({userId, users}) {
  return (
    <div>
      <small>By: {getUserById(userId, users)?.name}</small>
      <div style={{ fontSize: "0.9em", color: "gray" }}>
        <p>Email: {getUserById(userId, users)?.email}</p>
      </div>
    </div>
  );
}

export default user;
