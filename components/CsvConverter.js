const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = 'cityBudgetCSV.csv'

csvtojson()
  .fromFile(csvfilepath)
  .then((json) => {
    console.log(json)

    fs.writeFileSync(
      'cityBudgetObjects.json',
      JSON.stringify(json),
      'utf-8',
      (err) => {
        if (err) {
          console.log(err)
        }
      },
    )
  })
