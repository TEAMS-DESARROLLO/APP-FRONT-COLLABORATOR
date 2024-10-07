import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent implements OnInit{
 
  @Input()
  _formControl = new FormControl;

  formControlSearch = new FormControl('');

  ngOnInit(): void {
    if (this._formControl == undefined) {
      this._formControl = this.formControlSearch;
    }
  }

}