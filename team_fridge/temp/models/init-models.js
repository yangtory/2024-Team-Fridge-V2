import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_food from  "./tbl_food.js";
import _tbl_fridge from  "./tbl_fridge.js";
import _tbl_shopping from  "./tbl_shopping.js";
import _tbl_templist from  "./tbl_templist.js";
import _tbl_user from  "./tbl_user.js";

export default function initModels(sequelize) {
  const tbl_food = _tbl_food.init(sequelize, DataTypes);
  const tbl_fridge = _tbl_fridge.init(sequelize, DataTypes);
  const tbl_shopping = _tbl_shopping.init(sequelize, DataTypes);
  const tbl_templist = _tbl_templist.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);

  tbl_fridge.belongsTo(tbl_food, { as: "f_pnum_tbl_food", foreignKey: "f_pnum"});
  tbl_food.hasMany(tbl_fridge, { as: "tbl_fridges", foreignKey: "f_pnum"});
  tbl_fridge.belongsTo(tbl_shopping, { as: "f_snum_tbl_shopping", foreignKey: "f_snum"});
  tbl_shopping.hasMany(tbl_fridge, { as: "tbl_fridges", foreignKey: "f_snum"});

  return {
    tbl_food,
    tbl_fridge,
    tbl_shopping,
    tbl_templist,
    tbl_user,
  };
}
