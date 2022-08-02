import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        header: {
            text: {
                type: String,
            },
            strong: {
                type: String,
            },
            auto: [
                {
                    type: String,
                },
            ],
        },
        about: {
            image: {
                type: String,
            },
            forMe: {
                type: String,
                default: "Về chúng tôi",
            },
            strong1: {
                type: String,
            },
            strong2: {
                type: String,
            },
            description: {
                type: String,
            },
        },
        services: [
            {
                image: {
                    type: String,
                },
                title: {
                    type: String,
                },
                content: {
                    type: String,
                },
            },
        ],
        feedbacks: [
            {
                image: {
                    type: String,
                },
                content: {
                    type: String,
                },
                owner: {
                    type: String,
                },
                description: {
                    type: String,
                },
            },
        ],
        package: [
            {
                image: {
                    type: String,
                },
                title: {
                    type: String,
                },
                description: {
                    type: String,
                },
            },
        ],
        specialEvent: {
            title: {
                type: String,
            },
            text1: {
                type: String,
            },
            text2: {
                type: String,
            },
        },
        pay: [
            {
                image: {
                    type: String,
                },
                title: {
                    type: String,
                },
                content: {
                    type: String,
                },
            },
        ],
        post: [
            {
                link: {
                    type: String,
                },
                title: {
                    type: String,
                },
            },
        ],
    },
    {timestamps: true}
);

export default mongoose.model("Post", postSchema);
