import Insurance from "../models/insurance.js";
import cloudinary from "cloudinary";

// config cloud for upload img
cloudinary.v2.config({
    cloud_name: "dintrkdbn",
    api_key: "965658888781182",
    api_secret: "uB6tmYLS2C8PMonN_-8KGTYi9Q0",
});

const uploadImage = async (req, res) => {
    try {
        const path = req.files.image.path;
        const result = await cloudinary.v2.uploader.upload(path);
        return res.status(200).json({
            url: result.url,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: error});
    }
};

const createModel = async (req, res) => {
    const {text, strong, auto} = req.body;
    try {
        const insurance = await Insurance.create({
            header: {
                text,
                strong,
                auto,
            },
        });

        return res.status(200).json({insurance});
    } catch (err) {
        console.log(err);
        return res.status(400).json({msg: err});
    }
};

const updateHeader = async (req, res) => {
    try {
        const {id, text, strong, auto} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(id, {
            header: {
                text,
                strong,
                auto,
            },
        });
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const updateAbout = async (req, res) => {
    try {
        const {id, image, forMe, strong1, strong2, description} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(id, {
            about: {
                image,
                forMe,
                strong1,
                strong2,
                description,
            },
        });
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const getData = async (req, res) => {
    try {
        const {id} = req.body;
        const insurance = await Insurance.findById(id);
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: error});
    }
};

// SERVICE

const addService = async (req, res) => {
    try {
        const {id, image, title, content} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $push: {
                    services: {
                        image,
                        title,
                        content,
                    },
                },
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const deleteService = async (req, res) => {
    try {
        const {id, idService} = req.body;

        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $pull: {services: {_id: idService}},
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

// PACKAGE
const addPackage = async (req, res) => {
    try {
        const {id, image, title, description} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $push: {
                    package: {
                        image,
                        title,
                        description,
                    },
                },
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const deletePackage = async (req, res) => {
    try {
        const {id, idPackage} = req.body;

        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $pull: {package: {_id: idPackage}},
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};
// FEEDBACK
const addFeedback = async (req, res) => {
    try {
        const {id, image, owner, description, content} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $push: {
                    feedbacks: {
                        image,
                        owner,
                        content,
                        description,
                    },
                },
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const deleteFeedback = async (req, res) => {
    try {
        const {id, idFeedback} = req.body;

        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $pull: {feedbacks: {_id: idFeedback}},
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const updateSpecialEvent = async (req, res) => {
    try {
        const {id, title, text1, text2} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(id, {
            specialEvent: {
                title,
                text1,
                text2,
            },
        });
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

// PAY

const addPay = async (req, res) => {
    try {
        const {id, image, title, content} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $push: {
                    pay: {
                        image,
                        title,
                        content,
                    },
                },
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const deletePay = async (req, res) => {
    try {
        const {id, idPay} = req.body;

        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $pull: {pay: {_id: idPay}},
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};
const addPost = async (req, res) => {
    try {
        const {id, link, title} = req.body;
        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $push: {
                    post: {
                        title,
                        link,
                    },
                },
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const deletePost = async (req, res) => {
    try {
        const {id, idPost} = req.body;

        const insurance = await Insurance.findByIdAndUpdate(
            id,
            {
                $pull: {post: {_id: idPost}},
            },
            {
                new: true,
            }
        );
        if (!insurance) {
            return res.status(400).json({msg: "No data found"});
        }
        return res.status(200).json({insurance});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

const something = async (req, res) => {
    try {
        const postId = req.body;
        return res.status(200).json({msg: "something"});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
};

export {
    uploadImage,
    something,
    createModel,
    updateHeader,
    getData,
    updateAbout,
    addService,
    deleteService,
    deleteFeedback,
    addFeedback,
    addPackage,
    deletePackage,
    updateSpecialEvent,
    addPay,
    deletePay,
    addPost,
    deletePost,
};
