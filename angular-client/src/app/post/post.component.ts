import { Component, Input } from '@angular/core';
import { DateAgoPipe } from "../date-ago.pipe";

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    imports: [DateAgoPipe]
})
export class PostComponent {
  @Input() post!: string;
  @Input() timestamp!: Date;
}
