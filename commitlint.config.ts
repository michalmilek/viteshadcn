import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'], // Enforce a blank line before the body
    'body-max-line-length': [2, 'always', 150], // Limit body lines to 150 characters
    'footer-leading-blank': [1, 'always'], // Enforce a blank line before the footer
    'footer-max-line-length': [2, 'always', 150], // Limit footer lines to 150 characters
    'header-max-length': [2, 'always', 150], // Limit header (first line) to 150 characters
    'scope-case': [2, 'always', 'lower-case'], // Enforce lowercase in the scope
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ], // Enforce lower-case subject, disallow specific cases
    'subject-empty': [2, 'never'], // Subject must not be empty
    'subject-full-stop': [2, 'never', '.'], // No period at the end of the subject
    'type-case': [2, 'always', 'lower-case'], // Enforce lowercase for the type
    'type-empty': [2, 'never'], // Type must not be empty
    'type-enum': [
      2,
      'always',
      [
        'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf',
        'refactor', 'revert', 'style', 'test',
      ], // Allowable commit types (as per Conventional Commits)
    ],
  },
};


module.exports = config;
