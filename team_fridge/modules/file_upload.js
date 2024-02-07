import { existSync, mkdirSync } from "fs";
import path from "path";
import multer from "multer";
import { v4 as uuid } from "uuid";

const appRoot = process.env.PWD;
const uploadPath = path.join(appRoot, "public", "uploads");

const storageOption = {};
