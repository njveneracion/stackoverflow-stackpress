import { action } from "stackpress/server";
import { ProfileAuth } from "stackpress";

export default action(async function Signup(req, res, ctx) {
    if (req.method === "POST") {
        const name = req.data.path("name", "");
        const username = req.data.path("username", "");
        const email = req.data.path("email", "");
        const password = req.data.path("password", "");

        const result = await ctx.resolve<ProfileAuth>('auth-signup', {
            name,
            type: "person",
            roles: ["USER"],
            email,
            username,
            secret: password
        });

        res.setResults(result);
        console.log("Signup result:", result);

        if (result.code === 200) {
            res.redirect('/auth/signin');
        }
    }
});