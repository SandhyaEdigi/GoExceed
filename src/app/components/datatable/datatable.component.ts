import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent {
  selected:any = [];
  constructor(private router:Router ){}
  rows=[
    {
     id:0, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01", isSelected:false
    },
    {
      id:1, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    },
    {    
      id:2, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    },
    {    
      id:3, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    },
    {    
      id:4, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    },
    {    
      id:5, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    },
    {    
      id:6, sku:"SKU Number",modal:"Charging Cable",modalDes:"Thunderbolt charging cable",stock:"Yes", accessory:"Cables & Power", manufacturing:"Apple",price:"$ 100", quantity:"01",isSelected:false
    }
  ]
  selectRow(row:any){
    row.isSelected = !row.isSelected;
  }
  onActivate(event:any) {
    if(event.type == 'click') {
        console.log(event.row);
    }
  }
  getRowClass = (row: any) => {
    return {
      'selected': row.isSelected
    };
  }
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
