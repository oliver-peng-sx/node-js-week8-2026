const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Student',
  tableName: 'STUDENT',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    class_id: {
      type: 'uuid',
      nullable: false,
    },
    name: {
      type: 'varchar',
      length: 50,
      nullable: false,
      unique: true,
    },
  },
  relations: {
    class: {
      type: 'many-to-one',
      target: 'Class',
      joinColumn: { name: 'class_id' },
    },
  },
})
