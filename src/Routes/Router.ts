import express from "express";

import CheckLicenseRoute from "./CheckLicenseRoute";

const router = express.Router();

export default (): express.Router => {
    CheckLicenseRoute(router)

    return router;
}