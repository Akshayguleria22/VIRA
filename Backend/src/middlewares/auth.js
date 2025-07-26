import { users } from '@clerk/clerk-sdk-node';
import User from '../../../models/user.model.js';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export const authorize = ClerkExpressRequireAuth();

export const attachUser = async (req, res, next) => {
    try {
        const clerkId = req.auth.userId;

        // Fetch from Clerk
        const clerkUser = await users.getUser(clerkId);

        // Upsert into your DB
        const user = await User.findOneAndUpdate(
            { clerkId },
            {
                name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                email: clerkUser.emailAddresses[0].emailAddress
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        req.user = user;
        next();
    } catch (err) {
        console.error("Auth middleware error:", err);
        return res.status(500).json({ error: "Failed to authenticate user." });
    }
};
