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
        f_pseq: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "tbl_product",
            key: "p_seq",
          },
        },
        f_sseq: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "tbl_shopping",
            key: "s_seq",
          },
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
          {
            name: "FK_SSEQ",
            using: "BTREE",
            fields: [{ name: "f_sseq" }],
          },
          {
            name: "FK_PSEQ",
            using: "BTREE",
            fields: [{ name: "f_pseq" }],
          },
        ],
      }
    );
  }
}
