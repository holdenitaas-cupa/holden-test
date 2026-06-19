const fs = require('fs');

const data = {
  title: "My scraped data",
  date: new Date()
};

fs.writeFileSync('report.json', JSON.stringify(data, null, 2));
console.log('Report saved');
