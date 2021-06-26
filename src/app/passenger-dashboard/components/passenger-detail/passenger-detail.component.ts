import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: 'yMMMMd' | uppercase)
            : 'Not checked in'
        }}
      </div>
      <div class="children">Children: {{ detail.children?.length || 0 }}</div>
      <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `,
  styleUrls: ['passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail!: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
}
