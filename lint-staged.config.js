export default {
  '*.js': ['prettier --write'],
  'src/*.css': ['stylelint --fix', 'prettier --write']
}
