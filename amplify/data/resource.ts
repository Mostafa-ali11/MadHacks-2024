import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Location: a.customType({
    latitude: a.float().required(),
    longitude: a.float().required()
  }),

  Incident: a.model({
      category: a.string().required(),
      subcategory: a.string(),
      description: a.string(),
      status: a.enum(['NEW', 'IN_PROGRESS', 'RESOLVED']),
      location: a.ref('Location').required(),
      timestamp: a.datetime().required(),
      reporterID: a.id().required()
    })
    .authorization(allow => [
      // For the sake of MVP simplicity,
      // we're allowing all authenticated users to create, read, update, and delete incidents
      allow.authenticated(),
    ])
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// Defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',  // Uses Cognito User Pools for auth
  }
});
