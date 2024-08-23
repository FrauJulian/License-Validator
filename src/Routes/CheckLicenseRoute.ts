import express from "express";

import { CheckLicense } from "../Controllers/CheckLicense";

export default (router: express.Router) => {
    router.get("/checkKey/:software/:license", CheckLicense);
}
