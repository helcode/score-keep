import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup( () => {



  //   let house = {
  //     bedrooms: 2,
  //     bathrooms: 1.5
  //   };
  //
  //   let yearBuilt = 1995;
  //
  //   let housespecs = {
  //     ...house,
  //     bedrooms: 3,
  //     yearBuilt,
  //     flooring: 'carpet'
  //   }
  //
  // console.log(housespecs);

  // class Person {
  //   constructor( name = 'Anonymous', age = 0 ) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //
  //   getGreeting() {
  //     return `Hi! I'm ${this.name}.`;
  //   }
  //
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`;
  //   }
  // }
  // class Employee extends Person {
  //   constructor( name, age, title ) {
  //     super( name, age );
  //     this.title = title;
  //   }
  //
  //   getGreeting() {
  //     if ( this.title ) {
  //       return `Hi! I'm ${this.name}. I work as a ${this.title}`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  // class Programmer extends Person {
  //   constructor( name, age, preferredLanguage = 'assembly' ) {
  //     super( name, age );
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //
  //   getGreeting() {
  //     if ( this.preferredLanguage ) {
  //       return `Hi! I'm ${this.name}. I'm a ${this.preferredLanguage} developer`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  // let me = new Programmer( 'Hani', 25, 'JavaScript' );
  // console.log( me.getGreeting() );
  // let person = new Programmer( 'Jana', 10 );
  // console.log( person.getGreeting() );
  // let me = new Employee( 'Hani', 25, 'db Admin' );
  // console.log( me.getGreeting() );
  // let person = new Employee( 'Jana', 10 );
  // console.log( person.getGreeting() );
} );
