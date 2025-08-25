import { SessionPlugin, ProfileAuth } from "stackpress";
import { action } from "stackpress/server";

export default action(async function Signin(req, res, ctx) {

    if (req.method === "POST") {
        const username = req.data.path("username", "");
        const password = req.data.path("password", "");

        try {
            // Use auth-signin event for authentication
            const authResult = await ctx.resolve('auth-signin', {
                type: 'username',
                token: username,
                secret: password
            });

            // Check if authentication was successful
            if (authResult.error) {
                console.log("Authentication failed:", authResult.error);
                res.setStatus(401).setJSON({
                    error: "Invalid credentials"
                });
                return;
            }

            console.log("User authenticated successfully:", authResult.results);
            // Create a session for the authenticated user
            res.redirect('/')


        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    }
})