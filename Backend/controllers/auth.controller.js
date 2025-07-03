import { users, sessions } from '@clerk/clerk-sdk-node';
import User from '../models/user.model.js';


export const getProfile = async (req, res, next) => {
    try {
        const userId = req.auth.userId;

        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const user = await users.getUser(userId);

        res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            data: {
                id: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: `${user.firstName} ${user.lastName}`.trim(),
                createdAt: user.createdAt,
            }
        });
    } catch (error) {
        console.error("Error fetching profile:", error);
        next(error);
    }
};

export const signIn = async (req, res) => {
    try {
        const clerkId = req.auth.userId;
        const clerkUser = await users.getUser(clerkId);

        // Upsert into local DB
        const user = await User.findOneAndUpdate(
            { clerkId },
            {
                name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                email: clerkUser.emailAddresses[0].emailAddress
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: {
                id: user._id,
                clerkId: user.clerkId,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        console.error("SignIn error:", error);
        res.status(500).json({ error: "Failed to sign in user." });
    }
};

export const signOut = async (req, res, next) => {
    try {
        const userId = req.auth.userId;

        await sessions.revokeSessionsForUser(userId);

        res.status(200).json({
            success: true,
            message: "User signed out and sessions revoked."
        });
    } catch (error) {
        console.error("Error signing out:", error);
        next(error);
    }
};
