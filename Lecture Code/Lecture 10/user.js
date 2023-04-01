express = require('express');
const router = express.Router();

const userDB = [];

// Anytime get a GET request at http://localhost:8000/api/users/
// will call the callback function
router.get("/", function(request, response) {
    response.send(response.send(userDB));
})

// Body only available with post requests
router.post('/', function(request, response) {
    const { body } = request;
    userDB.push(body);

    if (!body.username) {
        response.status(401).send("Missing username");
    }
    response.send(`Created new user ${JSON.stringify(body)}`);
})


module.exports = router;