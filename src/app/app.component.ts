import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    "CourseTitle" : 'Course',
  }

  showAlert() {
    alert('Hello World!')
  }

  onKeyUp(newTitle:string) {
    this.data.CourseTitle = newTitle;

  }

}
