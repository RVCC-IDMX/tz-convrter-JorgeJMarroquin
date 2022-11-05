const moment = require('moment-timezone');

const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

const form = 'dddd, MMMM Do YYYY, h:mm:ss a';

const targetTimezone = yargs.argv._[0];

if (yargs.argv.all === true) {
  console.table(moment.tz.names());
} else if (yargs.argv.country) {
  console.table(moment.tz.zonesForCountry(yargs.argv.country));
}

if (!targetTimezone) {
  console.log(
    'Usage: node <script-file><timezone>\n--format: format the time in the specified format\nexample: node tz Asia/Kolkata --format',
  );
  process.exit(1);
}

if (yargs.argv.format === true) {
  console.log(
    `The time at the ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format('dddd, MMMM Do YYYY, h:mm:ss a')}`,
  );
  console.log(`The time here is ${moment().format(form)}`);
} else {
  console.log(
    `The time at the ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format()}`,
  );
  console.log(`The time here is ${moment().format()}`);
}
