
const createProductImage = async (req, res, next) => {
    const { files, fields } = req.fileAttrb;
    const prodId = parseInt(fields[0].value);

    let prodImage = {
        prim_filename: undefined,
        prim_filesize: undefined,
        prim_filetype: undefined,
        prim_primary: false,
        prim_prod_id: undefined
    }

    const listImages = [];

    files.forEach(el => {
        prodImage = {
            prim_filename: el.file.newFilename,
            prim_filesize: el.file.size,
            prim_filetype: el.file.mimetype,
            prim_primary: false,
            prim_prod_id: prodId
        }
        listImages.push(prodImage)
    });

    //insert into product_images
    try {
        const result = await req.context.models.products_images.bulkCreate(
            listImages
        );
        res.send(result);
    } catch (error) {
        return res.status(404).json({message : error.message})
    }
}

const findProdImagesById = async (req, res) => {
    try {
        const result = await req.context.models.products_images.findAll(
            { where: { prim_id: req.params.id} }
        );
        return res.send(result);
    } catch (error) {
        return res.send(404).send(error);
    }

}
const findAll = async (req, res) => {
    try {
        const result = await req.context.models.products_images.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}
// const findOne = async (req,res) => {
//     try {
//         const result = await req.context.models.products_images.findOne({
//             where:{prim_id:req.params.id}
//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).send("no data found")
//     }
// }

export default {
    findProdImagesById,
    createProductImage,
    findAll,
}