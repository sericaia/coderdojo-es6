class CoderdojoClass {
  constructor(session, ...participants) {
    this.sessionNumber = session.number;
    this.sessionTopic = session.topic;

    this.champions = participants[0];
    this.mentors = participants[1];
    this.ninjas = participants[2];
  }
  getAllMentors() {
    return this.champions + this.mentors;
  }
  getNinjas() {
    return this.ninjas;
  }
  getNinjasNumber() {
    return this.ninjas.length;
  }
  getMentorsNumber() {
    return this.mentors.length + this.champions.length;
  }
  getParticipants() {
    return this.champions + this.mentors + this.ninjas;
  }
  getParticipantsNumber() {
    return this.champions.length + this.mentors.length + this.ninjas.length;
  }
  getSessionInfo(){
    return '#' + this.sessionNumber + ' This session is about ' + this.sessionTopic;
  }
}

export { CoderdojoClass };
