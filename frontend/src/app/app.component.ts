import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProfileCardComponent} from "./profile-card/profile-card.component";
import {HeaderComponent} from "./header/header.component";
import {IEmployee} from "./iemployee";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, NavbarComponent, ProfileCardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  emploiyees: IEmployee[] = [
    {
      name: "Emily Johnson",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "IT Help Desk",
      rate: 4.4,
      qualities: ["Communication", "Customer Satisfaction", "Documentation", "Timeliness"],
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
      // comment: ""
    },
    {
      name: "John Smith",
      img: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Software Engineer",
      rate: 4.5,
      qualities: ["test", "Problem-Solving", "Collaboration", "Meeting Deadlines"],
      description: "",
      // comment: ""
    },
    {
      name: "Alex Martinez",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Software Engineer",
      rate: 4.7,
      qualities: ["Expense Tracking", "Reporting and Analytics", "Search and Filters", "Audit"],
      description: "",
      // comment: ""
    },
    {
      name: "Rachel Lee",
      img: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "UI/UX Designer",
      rate: 4.9,
      qualities: ["Creativity", "Collaboration", "Meeting Design Requirements"],
      description: "",
      // comment: ""
    }
  ]
}
