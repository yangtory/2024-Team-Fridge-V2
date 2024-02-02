import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_templist extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    t_name: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    t_quan: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_templist',
    timestamps: false
  });
  }
}
