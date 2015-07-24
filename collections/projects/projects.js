Projects = new Mongo.Collection('projects');

Project = new Astro.Class({
  name: 'Post',
  collection: Projects,
  transform: true,
  fields: {
    'name': 'string',
    'users': {
      type: 'array',
      default: []
    },
    'users.$': {
      type: 'object',
      default: {}
    },
    'users.$.user_id': {
      type: 'string'
    },
    'users.$.role': {
      type: 'string',
      default: 'user'
    }
  }
});

Project.addValidator('name', Validators.required());

Project.addBehavior('slug', {
  fieldName: 'name',
  slugFieldName: 'slug',
  canUpdate: true,
  unique: true,
  separator: '-'
});

Project.addBehavior('timestamp', {
  hasCreatedField: true,
  createdFieldName: 'createdAt',
  hasUpdatedField: true,
  updatedFieldName: 'updatedAt'
});
