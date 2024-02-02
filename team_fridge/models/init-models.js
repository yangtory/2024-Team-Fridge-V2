import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_food from  "./tbl_food.js";
import _tbl_fridge from  "./tbl_fridge.js";
import _tbl_shopping from  "./tbl_shopping.js";
import _tbl_user from  "./tbl_user.js";

export default function initModels(sequelize) {
  const tbl_food = _tbl_food.init(sequelize, DataTypes);
  const tbl_fridge = _tbl_fridge.init(sequelize, DataTypes);
  const tbl_shopping = _tbl_shopping.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);


  return {
    tbl_food,
    tbl_fridge,
    tbl_shopping,
    tbl_user,
  };
}
