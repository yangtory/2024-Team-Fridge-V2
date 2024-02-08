import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_fridge from "./tbl_fridge.js";
import _tbl_product from "./tbl_product.js";
import _tbl_shopping from "./tbl_shopping.js";
import _tbl_user from "./tbl_user.js";

export default function initModels(sequelize) {
  const tbl_fridge = _tbl_fridge.init(sequelize, DataTypes);
  const tbl_product = _tbl_product.init(sequelize, DataTypes);
  const tbl_shopping = _tbl_shopping.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);

  tbl_product.belongsTo(tbl_fridge, { as: "F_냉장고", foreignKey: "p_fseq" });
  tbl_fridge.hasMany(tbl_product, { as: "F_음식", foreignKey: "p_fseq" });

  return {
    tbl_fridge,
    tbl_product,
    tbl_shopping,
    tbl_user,
  };
}
