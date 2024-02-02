import { Model } from "sequelize";

export default class tbl_shopping extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        s_num: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        s_name: {
          type: DataTypes.STRING(125),
          allowNull: false,
        },
        s_quan: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_shopping",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "s_num" }],
          },
        ],
      }
    );
  }
}
