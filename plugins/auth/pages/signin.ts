import { action } from "stackpress/server";

export default action.props(async function signin({ req, res, ctx }) {
    if (req.method === "POST") {
        const username = req.data.path("username", "");
        const password = req.data.path("password", "");
        console.log("Username:", username);
        console.log("Password:", password);
    }
})