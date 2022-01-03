"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const findAll = async (req, res) => {
  try {
    const result = await req.context.models.category.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findCategoryBySQL = async (req, res) => {
  const result = await sequelize.query("select * from category", {
    type: sequelize.QueryTypes.SELECT,
    model: req.context.models.category,
    mapToModel: true
  });
  return res.send(result);
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.category.findOne({
      where: {
        cate_id: req.params.id
      }
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findRowById = async (req, res) => {
  const result = await req.context.models.category.findByPk(req.params.id);
  return res.send(result);
};

var _default = {
  findAll,
  findCategoryBySQL,
  findOne,
  findRowById
};
exports.default = _default;
//# sourceMappingURL=categoryController.js.map