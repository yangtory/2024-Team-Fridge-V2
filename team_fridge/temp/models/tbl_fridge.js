import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_fridge extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    f_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    f_pnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_food',
        key: 'p_num'
      }
    },
    f_snum: {
      type: DataTypes.STRING(125),
      allowNull: true,
      references: {
        model: 'tbl_shopping',
        key: 's_num'
      }
    },
    f_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    f_div: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    f_memo: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    f_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_fridge',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "f_num" },
        ]
      },
      {
        name: "FK_SCODE",
        using: "BTREE",
        fields: [
          { name: "f_snum" },
        ]
      },
      {
        name: "FK_PCODE",
        using: "BTREE",
        fields: [
          { name: "f_pnum" },
        ]
      },
    ]
  });
  }
}
