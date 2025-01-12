const express = require("express")
const router = express.Router();
const { randomBytes } = require("crypto")
const axios = require('axios')

const commentsByPostId = {}

router.get("/posts/comments", (req, res) => {
    return res.status(200).send(commentsByPostId[req.query.id]);
});

router.post("/posts/comments", async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content, id } = req.body;

    const comments = commentsByPostId[id];
    if (comments) {
        comments.push({ commentId, content, status: "pending" });
        commentsByPostId[id] = comments;
    }
    else {
        commentsByPostId[id] = [{ commentId, content, status: "pending" }];
    }
    await axios.post("http://localhost:4005/event", {
        event: "commentCreated", data: {
            postId: id, commentData: {
                commentId: commentId, content: content, status: "pending"
            }
        }
    })
    return res.status(200).send(commentsByPostId[id]);
});
router.post("/event", (req, res) => {
   
    res.send({ status: 'ok' });
})

module.exports = router;