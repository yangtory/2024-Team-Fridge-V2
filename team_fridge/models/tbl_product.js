import _sequelize from "sequelize";
const { Model } = _sequelize;

export default class tbl_product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        p_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        p_name: {
          type: DataTypes.STRING(125),
          allowNull: false,
        },
        p_exdate: {
          type: DataTypes.STRING(12),
          allowNull: false,
        },
        p_quan: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        p_date: {
          type: DataTypes.STRING(12),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_product",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "p_seq" }],
          },
        ],
      }
    );
  }
}
