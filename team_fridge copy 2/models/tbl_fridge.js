import { Model } from "sequelize";

export default class tbl_fridge extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        f_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        f_name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        f_div: {
          type: DataTypes.STRING(4),
          allowNull: true,
        },
        f_memo: {
          type: DataTypes.STRING(125),
          allowNull: true,
        },
        f_photo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        f_image_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        f_image_origin_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_fridge",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "f_seq" }],
          },
        ],
      }
    );
  }
}
