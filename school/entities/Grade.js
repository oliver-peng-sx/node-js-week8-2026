const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Grade',
  tableName: 'GRADE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    student_id: {
      type: 'uuid',
      nullable: false,
    },
    subject_id: {
      type: 'uuid',
      nullable: false,
    },
    score: {
      type: 'integer',
      nullable: false,
    },
    retake_score: {
      type: 'integer',
      nullable: true,
    },
  },
  relations: {
    student: {
      type: 'one-to-one',
      target: 'Student',
      joinColumn: { name: 'student_id' },
    },
    subject: {
      type: 'many-to-one',
      target: 'Subject',
      joinColumn: { name: 'subject_id' },
    },
  },
})
