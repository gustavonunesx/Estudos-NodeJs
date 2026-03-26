import chalk from 'chalk';
import logSymbols from 'log-symbols'

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(logSymbols.info, error('Error!'));
console.log(warning('Warning!'));