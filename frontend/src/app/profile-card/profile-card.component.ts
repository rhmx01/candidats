import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingStarsComponent} from "../rating-stars/rating-stars.component";
import {IEmployee} from "../iemployee";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, RatingStarsComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() employee: IEmployee | undefined;

}
