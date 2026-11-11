import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = ' Patriarca, Kenneth Euan Sean T.';
  location = 'Angeles City, Pampanga';
  email = 'kestptr@gmail.com';
  phone = '09761518104';

  profile = 'I excel at developing concepts into effective web-based solutions that employ innovative technologies. Connect with me as I create pleasant designs that elevate user experiences.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Python',
    'PHP',
    'MySQL',
    'Dart',
    'Flutter',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'Angular'
  ];

  softskills = [
    'Collaboration',
    'Creativity',
    'Communication',
    'Flexibility',
    'Patience',
    'Problem-Solving',
    'Time Management',
    'Work Ethic'
  ];

  dobest = [
    'Build responsive, user-centered interfaces',
    'Translate designs into clean, production-ready UI',
    'Write maintainable front-end code with clear structure',
    'Collaborate effectively and communicate progress clearly',
    'Adapt quickly and work well under pressure',
    'Always focused on clean UI + maintainable code'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
