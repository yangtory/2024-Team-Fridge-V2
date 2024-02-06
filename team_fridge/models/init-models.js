import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_fridge from  "./tbl_fridge.js";
import _tbl_product from  "./tbl_product.js";
import _tbl_shopping from  "./tbl_shopping.js";
import _tbl_templist from  "./tbl_templist.js";
import _tbl_user from  "./tbl_user.js";

export default function initModels(sequelize) {
  const tbl_fridge = _tbl_fridge.init(sequelize, DataTypes);
  const tbl_product = _tbl_product.init(sequelize, DataTypes);
  const tbl_shopping = _tbl_shopping.init(sequelize, DataTypes);
  const tbl_templist = _tbl_templist.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);

  tbl_fridge.belongsTo(tbl_product, { as: "f_pseq_tbl_product", foreignKey: "f_pseq"});
  tbl_product.hasMany(tbl_fridge, { as: "tbl_fridges", foreignKey: "f_pseq"});
  tbl_fridge.belongsTo(tbl_shopping, { as: "f_sseq_tbl_shopping", foreignKey: "f_sseq"});
  tbl_shopping.hasMany(tbl_fridge, { as: "tbl_fridges", foreignKey: "f_sseq"});

  return {
    tbl_fridge,
    tbl_product,
    tbl_shopping,
    tbl_templist,
    tbl_user,
  };
}
