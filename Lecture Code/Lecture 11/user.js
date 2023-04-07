express = require('express');
const userDB = require("./user.model");
const router = express.Router();

// const userDB = [];

// Anytime get a GET request at http://localhost:8000/api/users/
// will call the callback function
router.get("/", async function(request, response) {
    response.send(await userDB.returnAllUsers());
})

// Body only available with post requests
router.post('/', async function(request, response) {
    const { body } = request;

    // if (!body.username) {
    //     response.status(401).send("Missing username");
    // }

    const newUserResponse = await userDB.createUser(body);
    response.send(`Created new user ${JSON.stringify(body)}`);
})

router.get("/:username", async (req, res) => {
    const { username } = req.params;

    const userData = await UserModel.findUserByUsername(username);
    
    return res.send(userData);
})

module.exports = router;