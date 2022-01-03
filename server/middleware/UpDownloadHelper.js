import formidable from 'formidable';
import fs from 'fs';
import config from '../config/config';

const uploadDir = process.cwd() + '/storages/';

const uploadSingleFile = async (req, res, next) => {
    const options = {
        multiples: false,
        keepExtensions: true,
        uploadDir: uploadDir,
        maxFileSize: 50 * 1024 * 1024, // 5MB
    }
    const form = formidable(options);
    let files = [];
    let fields = [];

    form.onPart = function (part) {

        if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
            this._handlePart(part);
        }
        else {
            form._error(new Error('File type is not supported'));
        }
    }

    form.parse(req)
        .on('field', (fieldName, value) => {
            fields.push({ fieldName, value });
        })
        .once('file', (fieldName, file) => {
            files.push({ fieldName, file });
            //files = { ...{ fieldName, file } }
        })
        .once('end', () => {
            console.log('-> upload done');
            req.fileAttrb = ({
                files: files,
                fields: fields
            });
            next();
        });


}

const uploadMultipleFile = async (req, res, next) => {
    const options = {
        multiples: true,
        keepExtensions: true,
        uploadDir: uploadDir,
        maxFileSize: 50 * 1024 * 1024, // 5MB
    }
    const form = formidable(options);
    let files = [];
    let fields = [];

    // check tiap attribute
    form.onPart = function (part) {

        if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
            this._handlePart(part);
        }
        else {
            form._error(new Error('File type is not supported'));
        }
    }

    form.parse(req)
        .on('field', (fieldName, value) => {
            fields.push({ fieldName, value });
        })
        .on('file', (fieldName, file) => {
            files.push({ fieldName, file });
            //files = { ...{ fieldName, file } }
        })
        .once('end', () => {
            console.log('-> upload done');
            req.fileAttrb = ({
                files: files,
                fields: fields
            });
            next();
        });


}

const showProductImage = async (req, res) => {
    const filename = req.params.filename;
    const url = `${process.cwd()}/${config.UPLOAD_DIR}/${filename}`;
    fs.createReadStream(url)
        .on("error", () => responseNotFound(req, res))
        .pipe(res);
}


function responseNotFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found")
}


export default {
    uploadSingleFile,
    showProductImage,
    uploadMultipleFile
}
