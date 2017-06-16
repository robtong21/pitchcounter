'use strict'

const db = require('APP/db')
    , {User, Game, Team, Opponent, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    teams: teams(),
  }
  seeded.users = users(seeded)
  seeded.opponents = opponents(seeded)
  seeded.games = games(seeded)
  return Promise.props(seeded)
}

const teams = seed(Team, {
    yankees: {name: 'Yankees', year: 2017, logo: 'http://imgur.com/a/R7Mrl'},
    bluejays: {name: 'Blue Jays', year: 2017, logo: 'http://imgur.com/a/uO5vO'},
    redsox: {name: 'Red Sox', year: 2017, logo: 'http://imgur.com/a/CsEJ8'},
    dodgers: {name: 'Dodgers', year: 2017, logo: 'http://imgur.com/a/rIRty'},
    orioles: {name: 'Orioles', year: 2017, logo: 'http://imgur.com/a/mnA08'},
    twins: {name: 'Twins', year: 2017, logo: 'http://imgur.com/a/FTbTS'},
    diamondbacks: {name: 'Diamondbacks', year: 2017, logo: 'http://imgur.com/a/rwu7x'},
    mets: {name: 'Mets', year: 2017, logo: 'http://imgur.com/a/ip8pJ'},
    tigers: {name: 'Tigers', year: 2017, logo: 'http://imgur.com/a/Q94w1'},
    giants: {name: 'Giants', year: 2017, logo: 'http://imgur.com/a/nYv3O'},
    mariners: {name: 'Mariners', year: 2017, logo: 'http://imgur.com/a/nxXUv'},
    astros: {name: 'Astros', year: 2017, logo: 'http://imgur.com/a/Syl5Y'},
    rays: {name: 'Rays', year: 2017, logo: 'http://imgur.com/a/BlZE8'},
    cubs: {name: 'Cubs', year: 2017, logo: 'http://imgur.com/a/1ZzZa'},
    royals: {name: 'Royals', year: 2017, logo: 'http://imgur.com/a/1WJz7'},
})

const users = seed(User, ({teams}) => ({
  angus: {
    name: 'Angus Cameron',
    number: 10,
    photo: 'http://imgur.com/a/8Rorc',
    email: 'angus@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  max: {
    name: 'Max Cameron',
    number: 11,
    photo: 'http://imgur.com/a/zieSF',
    email: 'max@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  alex: {
    name: 'Alex Delaney',
    number: 8,
    photo: 'http://imgur.com/a/xz61M',
    email: 'alex@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  declan: {
    name: 'Declan Jones',
    number: 9,
    photo: 'http://imgur.com/a/EtJsE',
    email: 'declan@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  noah: {
    name: 'Noah Lambert',
    number: 13,
    photo: 'http://imgur.com/a/EtJsE',
    email: 'noah@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  liam: {
    name: 'Liam McCreery',
    number: 6,
    photo: 'http://imgur.com/a/y9pS7',
    email: 'liam@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  leo: {
    name: 'Leo Penn',
    number: 3,
    photo: 'http://imgur.com/a/2CD6G',
    email: 'leo@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  dylan: {
    name: 'Dylan Pepper',
    number: 14,
    photo: 'http://imgur.com/a/qjLXF',
    email: 'dylan@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  wyatt: {
    name: 'Wyatt Perry',
    number: 1,
    photo: 'http://imgur.com/a/Ldr7J',
    email: 'wyatt@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  matthew: {
    name: 'Matthew Souter',
    number: 2,
    photo: 'http://imgur.com/a/zRaRf',
    email: 'matthew@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  henry: {
    name: 'Henry Tong',
    number: 7,
    photo: 'http://imgur.com/a/iCYx9',
    email: 'henry@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  lucia: {
    name: 'Lucia Trautman',
    number: 4,
    photo: 'http://imgur.com/a/2EAZP',
    email: 'lucia@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
  asim: {
    name: 'Asim Washington',
    number: 5,
    photo: 'http://imgur.com/a/uDHUu',
    email: 'asim@wppa.com',
    password: '1234',
    team_id: teams.royals.id,
  },
}))

const opponents = seed(Opponent, ({teams}) => ({
  lorenzo: {
    name: 'Lorenzo Borzutzky',
    number: 10,
    team_id: teams.orioles.id,
  },
  nikhil: {
    name: 'Nikhil Engel',
    number: 11,
    team_id: teams.orioles.id,
  },
  charlie: {
    name: 'Charlie Johnson',
    number: 8,
    team_id: teams.orioles.id,
  },
  adrian: {
    name: 'Adrian Lesniewicz',
    number: 9,
    team_id: teams.orioles.id,
  },
  lucas: {
    name: 'Lucas Malik',
    number: 13,
    team_id: teams.orioles.id,
  },
  paolo: {
    name: 'Paolo Manalli',
    number: 6,
    team_id: teams.orioles.id,
  },
  theodore: {
    name: 'Theodore McDermott',
    number: 3,
    team_id: teams.orioles.id,
  },
  jon: {
    name: 'Jon Morris',
    number: 14,
    team_id: teams.orioles.id,
  },
  andrew: {
    name: 'Andrew Sickler',
    number: 1,
    team_id: teams.orioles.id,
  },
  jackson: {
    name: 'Jackson Smith',
    number: 2,
    team_id: teams.orioles.id,
  },
  sam: {
    name: 'Sam Tidmarsh',
    number: 7,
    team_id: teams.orioles.id,
  },
  daniel: {
    name: 'Daniel Vocke',
    number: 4,
    team_id: teams.orioles.id,
  },
  james: {
    name: 'James Wilcox',
    number: 5,
    team_id: teams.orioles.id,
  },
}))

const games = seed(Game, ({teams}) => ({
  one: {
    date: '2017-05-06T05:00:00.000Z',
    time: '1pm',
    location: 'Legion Park',
    team_id: teams.yankees.id,
    home: false},
  two: {
    date: '2017-05-13T05:00:00.000Z',
    time: '8:30am',
    location: 'Legion Park',
    team_id: teams.bluejays.id,
    home: false},
  three: {
    date: '2017-05-16T05:00:00.000Z',
    time: '5:45pm',
    location: 'Legion Park',
    team_id: teams.redsox.id,
    home: false},
  four: {
    date: '2017-05-21T05:00:00.000Z',
    time: '5:30pm',
    location: 'Legion Park',
    team_id: teams.dodgers.id,
    home: true},
  five: {
    date: '2017-05-30T05:00:00.000Z',
    time: '6pm',
    location: 'Legion Park',
    team_id: teams.orioles.id,
    home: false},
  six: {
    date: '2017-06-04T05:00:00.000Z',
    time: '12pm',
    location: 'Thillens Stadium',
    team_id: teams.twins.id,
    home: false},
  seven: {
    date: '2017-06-10T05:00:00.000Z',
    time: '10:45am',
    location: 'Welles Park',
    team_id: teams.diamondbacks.id,
    home: true},
  eight: {
    date: '2017-06-11T05:00:00.000Z',
    time: '3:15pm',
    location: 'Welles Park',
    team_id: teams.mets.id,
    home: false},
  nine: {
    date: '2017-06-13T05:00:00.000Z',
    time: '6pm',
    location: 'Welles Park',
    team_id: teams.tigers.id,
    home: false},
  ten: {
    date: '2017-06-17T05:00:00.000Z',
    time: '1pm',
    location: 'Welles Park',
    team_id: teams.giants.id,
    home: true},
  eleven: {
    date: '2017-06-19T05:00:00.000Z',
    time: '6pm',
    location: 'Welles Park',
    team_id: teams.mariners.id,
    home: true},
  twelve: {
    date: '2017-06-24T05:00:00.000Z',
    time: '1pm',
    location: 'Welles Park',
    team_id: teams.astros.id,
    home: true},
  thirteen: {
    date: '2017-06-25T05:00:00.000Z',
    time: '5:30pm',
    location: 'Legion Park',
    team_id: teams.rays.id,
    home: false},
  fourteen: {
    date: '2017-07-08T05:00:00.000Z',
    time: '1pm',
    location: 'Legion Park',
    team_id: teams.cubs.id,
    home: true},
}))


if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, games, teams, opponents})
