express = require('express');
const userDB = require("./user.model");
const router = express.Router();

// const userDB = [];

// Anytime get a GET request at http://localhost:8000/api/users/
// will call the callback function
router.get("/", async function(request, response) {
    response.send(await userDB.returnAllUsers());
})

router.get("/isLoggedIn", async function(req, res) {
    const username = req.cookies.username;
    return res.send({ username });
})

router.post("/logOut", async function(req, res) {
    // maxAge determines the length of time by which cookie exists
    res.cookie("username", "", {
        maxAge: 0,
    })
    res.send("User logged out successfully");
})

router.post("/login", async function(req, res) {
    const user = req.body;
    console.log("Logging in", user);

    try {
        const createUserResponse = await userDB.createUser(user);
        res.send(`Logged in ${user}`);
    } catch(e) {
        res.status(401).send(e);
    }

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

router.post("/create", async function(req, res) {
    const { username, password } = req.body;
    const { login } = req.params;
    const createUserResponse = await userDB.createUser({ username, password: Number(password) });

    res.cookie("username", username);
    return res.send("User created successfully");
})

router.get("/:username", async (req, res) => {
    const { username } = req.params;

    const userData = await UserModel.findUserByUsername(username);
    
    return res.send(userData);
})

module.exports = router;