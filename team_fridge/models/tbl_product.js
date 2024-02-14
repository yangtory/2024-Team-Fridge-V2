import { Model } from 'sequelize';

export default class tbl_product extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                p_seq: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    defaultValue: 0,
                },
                p_fseq: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'tbl_fridge',
                        key: 'f_seq',
                    },
                },
                p_name: {
                    type: DataTypes.STRING(125),
                    allowNull: false,
                    defaultValue: '',
                },
                p_exdate: {
                    type: DataTypes.STRING(12),
                    allowNull: false,
                    defaultValue: '',
                },
                p_quan: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                p_date: {
                    type: DataTypes.STRING(12),
                    allowNull: false,
                    defaultValue: '',
                },
                p_memo: {
                    type: DataTypes.STRING(125),
                    allowNull: true,
                    defaultValue: '',
                },
            },
            {
                sequelize,
                tableName: 'tbl_product',
                timestamps: false,
                indexes: [
                    {
                        name: 'PRIMARY',
                        unique: true,
                        using: 'BTREE',
                        fields: [{ name: 'p_seq' }],
                    },
                    {
                        name: 'FK_PSEQ',
                        using: 'BTREE',
                        fields: [{ name: 'p_fseq' }],
                    },
                ],
            }
        );
    }
}
