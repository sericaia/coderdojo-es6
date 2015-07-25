import { CoderdojoClass } from './coderdojoSession';

// lets create a Coderdojo Session
var champions = [ 'Manuel' ];
var mentors = [ 'Daniela', 'João' ];
var ninjas = [ 'Ana', 'Henrique', 'Flávio', 'Joana' ];

var sessionDetails = {
    topic: 'CSS',
    number: 99
}

var session = new CoderdojoClass(sessionDetails, champions, mentors, ninjas);

console.log(session.getSessionInfo());
