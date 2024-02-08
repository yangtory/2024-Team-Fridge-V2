import { Model } from "sequelize";

export default class tbl_user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        u_id: {
          type: DataTypes.STRING(35),
          allowNull: false,
          primaryKey: true,
        },
        u_pw: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        u_name: {
          type: DataTypes.STRING(35),
          allowNull: false,
        },
        u_role: {
          type: DataTypes.STRING(35),
          allowNull: false,
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
            fields: [{ name: "u_id" }],
          },
        ],
      }
    );
  }
}
