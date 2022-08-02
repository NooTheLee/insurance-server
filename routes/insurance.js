import express from "express";

import {
    something,
    uploadImage,
    updateHeader,
    createModel,
    updateAbout,
    addService,
    deleteService,
    addFeedback,
    deleteFeedback,
    addPackage,
    deletePackage,
    updateSpecialEvent,
    addPay,
    deletePay,
    addPost,
    deletePost,
} from "../controllers/insurance.js";
import formidable from "express-formidable";

const router = express.Router();

router.route("/").get(async (req, res) => {
    res.json({msg: "Insurance"});
});

// upload-image
router.route("/upload-image").post(formidable(), uploadImage);

router.route("/create-modal").post(createModel);

router.route("/update-header").patch(updateHeader);

router.route("/update-about").patch(updateAbout);

router.route("/add-service").post(addService);

router.route("/delete-service").post(deleteService);

router.route("/add-feedback").post(addFeedback);

router.route("/delete-feedback").post(deleteFeedback);

router.route("/add-package").post(addPackage);

router.route("/delete-package").post(deletePackage);

router.route("/update-specialEvent").patch(updateSpecialEvent);

router.route("/add-pay").post(addPay);

router.route("/delete-pay").post(deletePay);

router.route("/add-post").post(addPost);

router.route("/delete-post").post(deletePost);

router.route("/something").get(something);

export default router;
