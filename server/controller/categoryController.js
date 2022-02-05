
const findAll = async (req, res) => {
    try {
        const result = await req.context.models.category.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).json({msg : "no data found"});
    }
}

const findCategoryBySQL = async (req, res) => {
    const result = await sequelize.query("select * from category", {
        type: sequelize.QueryTypes.SELECT,
        model: req.context.models.category,
        mapToModel: true
    });

    return res.send(result);
}
// const findOne = async (req,res) => {
//     try {
//         const result = await req.context.models.category.findOne({
//             where:{cate_id:req.params.id}
//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).send("no data found")
//     }
// }

const findRowById = async (req, res) => {
    const result = await req.context.models.category.findByPk(
        req.params.id
    );
    return res.send(result);
}

const createRow = async (req, res) => {
    const { cate_id, cate_name } = req.body;
    const result = await req.context.models.category.create({
        cate_id: cate_id,
        cate_name: cate_name
    });
    return res.send(result);
}

// update category set cate_name=${1} where cate_id=${2}
const updateRow = async (req, res) => {
    const { cate_name } = req.body;
    const result = await req.context.models.category.update(
        { cate_name: cate_name },
        {
            returning: true,
            where: { cate_id: req.params.id }
        }
    );
    return res.send(result);
}

const deleteRow = async (req, res) => {
    const id = req.params.id;

    await req.context.models.category.destroy({
        where: { cate_id: id }
    }).then(result => {
        return res.send("delete " + result + " rows.")
    }).catch(error => {
        return res.sendStatus(404).send("Data not found.")
    });

}

export default {
    findAll,
    findCategoryBySQL,
    // findOne,
    findRowById,
    createRow,
    updateRow,
    deleteRow
}