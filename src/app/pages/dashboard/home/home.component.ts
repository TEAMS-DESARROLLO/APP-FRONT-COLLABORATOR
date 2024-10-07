import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from "../../../components/card/card.component";
import { InputSearchComponent } from '../../../components/input-search/input-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,InputSearchComponent,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent  implements OnInit {

  constructor(private fb: FormBuilder,
              private activeRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loadFromServer();
  }

  _datosInput = {title: 'steak-0111', body: 'Steak222'};

  arrayDatos = [this._datosInput,this._datosInput,this._datosInput,this._datosInput,this._datosInput,this._datosInput,this._datosInput
    ,this._datosInput,this._datosInput,this._datosInput,this._datosInput
  ];

  customerForm: FormGroup = this.fb.group({
      card: [''],
      search: ['']
  });

  get searchForm (){
    return this.customerForm.get('search') as FormControl;
  }

 
  loadFromServer():void{
    this.searchForm?.setValue('search');
  }


}
