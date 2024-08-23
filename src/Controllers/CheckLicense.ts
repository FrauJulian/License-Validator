import express from "express";

import { ERR } from "../Utils";
import * as LicenseConfiguration from '../Configurations/LicenseConfiguration.json';

type Arrays = {
    [key: string]: string[];
};

function checkValidation(data: Arrays, arrayName: string, searchString: string): boolean {
    const array = data[arrayName];
    if (array && Array.isArray(array)) {
        return array.includes(searchString);
    }
    return false;
}

const data: Arrays = LicenseConfiguration;

export const CheckLicense = async (req: express.Request, res: express.Response) => {
    const { software, license } = req.params;

    const valid = checkValidation(data, software, license);
    
    res.status(200).json({valid});
}