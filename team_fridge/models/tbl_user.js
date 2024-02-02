import { Model } from "sequelize";

export default class tbl_user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        ps_name: {
          type: DataTypes.STRING(35),
          allowNull: false,
        },
        ps_id: {
          type: DataTypes.STRING(35),
          allowNull: false,
          primaryKey: true,
        },
        ps_pw: {
          type: DataTypes.STRING(35),
          allowNull: false,
        },
        ps_role: {
          type: DataTypes.STRING(5),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_user",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "ps_id" }],
          },
        ],
      }
    );
  }
}