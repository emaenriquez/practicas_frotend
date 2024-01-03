
// JSON.stringify

// JSON.stringify para convertir objetos a JSON.
// JSON.parse para convertir JSON de vuelta a un objeto.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

let json = JSON.stringify(student)

console.log(json)

let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};

console.log(JSON.stringify(meetup))