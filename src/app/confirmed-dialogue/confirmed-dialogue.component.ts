import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmed-dialogue',
  templateUrl: './confirmed-dialogue.component.html',
  styleUrls: ['./confirmed-dialogue.component.css']
})
export class ConfirmedDialogueComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmedDialogueComponent>) { }

}
