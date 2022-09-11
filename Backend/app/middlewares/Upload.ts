import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime-types";
import { Request } from "express";

class Upload
{
    private URL: string = path.basename('/public') + '/' + path.basename('/storage');

    private async storage(): Promise<multer.StorageEngine>
    {
        const data = await multer.diskStorage({
            destination: (req: Request, file: any, cb: any) => {
                if (!fs.existsSync(this.URL))
                    fs.mkdirSync(this.URL);
            },
            filename: (req: Request, file: any, cb: any) => {
                const type = mime.extension(file.mimetype);
                cb(null, `${new Date().getTime()}.${type}`);
            },
        });

        return data;
    }
}

export default Upload;