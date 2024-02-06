import _sequelize from "sequelize";
const { Model } = _sequelize;

export default class tbl_templist extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        t_num: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        t_name: {
          type: DataTypes.STRING(125),
          allowNull: false,
        },
        t_quan: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_templist",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "t_num" }],
          },
        ],
      }
    );
  }
}
