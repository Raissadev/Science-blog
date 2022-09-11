import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime-types";
import { Request } from "express";

class Upload
{
    private URL: string = path.basename('/public') + '/' + path.basename('/storage');

    private storage(): multer.StorageEngine
    {
        return multer.diskStorage({
            destination: (req: Request, file: any, cb: any) => {
                if (!fs.existsSync(this.URL))
                    fs.mkdirSync(this.URL);
            },
            filename: (req: Request, file: any, cb: any) => {
                const type = mime.extension(file.mimetype);
                cb(null, `${new Date().getTime()}.${type}`);
            },
        });
    }

    private fileFilter(): any
    {
        return (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
            const type = mime.extension(file.mimetype);
            
            const conditions = ["png", "jpg", "jpeg"];

            if (conditions.includes(`${type}`))
                cb(null, true);

            cb(null, false);
        };
    }

    get getConfig(): multer.Options
    {
        return {
            storage: this.storage(),
            fileFilter: this.fileFilter(),
        }
    }
}

export default new Upload;