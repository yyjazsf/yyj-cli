// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?!?: .{1,50})/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('invalid commit message format.')}\n\n${
      chalk.red('  Proper commit message format is required for automated changelog generation. Examples:\n\n')
    }    ${chalk.green('feat(compiler): add \'comments\' option')}\n`
    + `    ${chalk.green('fix(init):  (close #1)')}\n\n${
      chalk.red('  See .github/COMMIT_CONVENTION.md for more details.\n')
    }${chalk.red(`  You can also use ${chalk.cyan('npx cz')} to interactively generate a commit message.\n`)}`,
  );
  process.exit(1);
}
