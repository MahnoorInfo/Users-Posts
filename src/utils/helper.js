

export const getUserById = (userId, users) => users.find((user) => user.id === userId);

export const getCommentsForPost = (postId, comments) =>
    comments.filter((comment) => comment.postId === postId);