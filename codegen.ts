import { CodegenConfig } from '@graphql-codegen/cli';

const adminSecret = "5y6rpagJFN08J71fuk7qZvqp3AnYgIvP3q8ejkDu2m7xcMzjyhIZpp87LlEKJ5zI"; // Change this to match your environment variable name

if (!adminSecret) {
  throw new Error('Hasura admin secret not found in environment variables.');
}

const config: CodegenConfig = {
  schema: 'https://evolved-piranha-53.hasura.app/v1/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        headers: {
          'x-hasura-admin-secret': adminSecret,
        },
      },
    },
  },
};

export default config;
