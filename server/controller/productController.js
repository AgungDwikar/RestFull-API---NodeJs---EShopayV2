import UpDownloadHelper from "../middleware/UpDownloadHelper";

const findAll = async (req, res) => {
    try {
        const result = await req.context.models.products.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}
const createProduct = async (req, res) => {
    const {files, fields} = req.fileAttrb;

    try {
        const result = await req.context.models.products.create({
            prod_name: fields[0].value,
            prod_price: fields[1].value,
            prod_stock: parseInt(fields[2].value),
            prod_desc: fields[3].value,
            prod_cate_id: parseInt(fields[4].value),
            prod_rating: parseInt(fields[5].value),
            prod_views: parseInt(fields[6].value),
            prod_user_id: parseInt(fields[7].value),
            prod_url_image: files[0].file.newFilename
        });
        return res.send(result);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

const updateProduct = async (req, res) => {
    const {files, fields} = req.fileAttrb;
    try {
        const result = await req.context.models.products.update({
            prod_name: fields[0].value,
            prod_price: fields[1].value,
            prod_stock: parseInt(fields[2].value),
            prod_desc: fields[3].value,
            prod_cate_id: parseInt(fields[4].value),
            prod_rating: parseInt(fields[5].value),
            prod_views: parseInt(fields[6].value),
            prod_user_id: parseInt(fields[7].value),
            prod_url_image: files[0].file.newFilename
        },{
            returning : true, where:{prod_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data update")
    }
}


        
    


export default {
    findAll,
    createProduct,
    updateProduct,
}