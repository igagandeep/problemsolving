getFullNames = names =>  names.map((d) => `${d.firstname} ${d.lastname}`)

names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]

console.log(
  getFullNames(names));