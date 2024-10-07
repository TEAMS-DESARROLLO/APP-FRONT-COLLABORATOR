import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit{
  
  @Input()
  _data: any = {title: 'steak-0', body: 'Steak'};
  
  ngOnInit(): void {
  }
  

}
