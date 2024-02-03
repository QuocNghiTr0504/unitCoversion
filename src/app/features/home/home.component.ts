import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
// @ts-expected-error
  name: number = 1;
  name1:number=1;
  name2:number=1;
  choice: number = 0;
  choice1: number = 0;
  choiceweight:number=0;
  choiceweight1:number=0;
  choiceAcreage:number=0;
  choiceAcreage1:number=0;

  result: number | string = 0;
  resultWeight: number | string = 0;
  resultAcreage:number | string = 0;
  units = [
    { name: 'Chọn đơn vị', value: 0, },
    { name: 'Kilomet(km)', value: 1,description:'km'  },
    { name: 'Mét(m)', value: 2,description:'m'  },
    { name: 'Decimet(dm)', value: 3,description:'dm'  },
    { name: 'Centimet(cm)', value: 4,description:'cm'  },
    { name: 'Milimet(mm)', value: 5,description:'mm'  },
    { name: 'Inch(in)', value: 6,description:'in'  },
    { name: 'Feet(ft)', value: 7,description:'ft'  }
  ];
  weights = [
    { name: 'Chọn đơn vị', value: 0, },
    { name: 'Tấn(t)', value: 1,description:'tấn'  },
    { name: 'Tạ', value: 2,description:'tạ'  },
    { name: 'Yến', value: 3,description:'yến'  },
    { name: 'Kilogram', value: 4,description:'kg'  },
    { name: 'Hetogram', value: 5,description:'hg'  },
    { name: 'Decagram', value: 6,description:'dag'  },
    { name: 'Gram', value: 7,description:'g'  }
  ];
  acreage = [
    { name: 'Chọn đơn vị', value: 0, },
    { name: 'Kilomet vuông', value: 1, description: 'km²' },
    { name: 'Hecta', value: 2, description: 'ha' },
    { name: 'Mét vuông', value: 3, description: 'm²' },
    { name: 'Decimet vuông', value: 4, description: 'dm²' },
    { name: 'Centimet vuông', value: 5, description: 'cm²' },
    { name: 'Milimet vuông', value: 6, description: 'mm²' },
    { name: 'Nanomet vuông', value: 7, description: 'nm²' }
  ];

  unitsConversion: Record<number, Record<number, string | number>> = {
    1: { 1: '1km', 2: 1000, 3: 10000, 4: 100000, 5: 1000000, 6: 39370.08, 7: 3280.84 },
    2: { 1: 0.001, 2: '1m', 3: 10, 4: 100, 5: 1000, 6: 39.37, 7: 3.28084 },
    3: { 1: 0.0001, 2: 0.1, 3: '1dm', 4: 10, 5: 100, 6: 3.93701, 7: 0.328084 },
    4: { 1: 0.00001, 2: 0.01, 3: 0.1, 4: '1cm', 5: 10, 6: 0.393701, 7: 0.0328084 },
    5: { 1: 0.000001, 2: 0.001, 3: 0.01, 4: 0.1, 5: '1mm', 6: 0.0393701, 7: 0.00328084 },
    6: { 1: 25400, 2: 25.4, 3: 2.54, 4: 0.254, 5: 0.0254, 6: '1in', 7: 0.0833333 },
    7: { 1: 0.0003048, 2: 0.3048, 3: 30.48, 4: 304.8, 5: 3048, 6: 12, 7: '1ft' }
  };

  weightsConversion: Record<number, Record<number, string | number>> = {
    1: { 1: '1tấn', 2: 10, 3: 100, 4: 1000, 5: 10000, 6: 100000, 7: 1000000 },
    2: { 1: 0.1, 2: '1tạ', 3: 10, 4: 100, 5: 1000, 6: 10000, 7: 100000 },
    3: { 1: 0.01, 2: 0.1, 3: '1yến', 4: 10, 5: 100, 6: 1000 , 7:10000 },
    4: { 1: 0.001, 2: 0.01, 3: 0.1, 4: '1kg', 5: 10, 6: 100, 7:1000 },
    5: { 1: 0.0001, 2: 0.001, 3: 0.01, 4: 0.1, 5: '1hg', 6: 10, 7:100 },
    6: { 1: 0.00001, 2: 0.0001, 3: 0.001, 4: 0.01, 5: 0.1, 6: '1dag', 7: 10 },
    7: { 1: 0.000001, 2: 0.00001, 3: 0.0001, 4: 0.001, 5: 0.01, 6: 0.01, 7: '1g' }
  };

  acreageConversion: Record<number, Record<number, string | number>> = {
    1: { 1: '1km²', 2: 100, 3: Math.pow(10,5), 4: Math.pow(10,7), 5: Math.pow(10,12), 6: Math.pow(10,18), 7: Math.pow(10,24) },
    2: { 1: Math.pow(10,-1), 2: '1ha', 3: Math.pow(10,3), 4: Math.pow(10,5), 5: Math.pow(10,7), 6: Math.pow(10,9), 7: Math.pow(10,22) },
    3: { 1: Math.pow(10,-6), 2:Math.pow(10,-4), 3: 'm²', 4: 100, 5: Math.pow(10,3), 6: Math.pow(10,5) , 7:Math.pow(10,18) },
    4: { 1: Math.pow(10,-8), 2: Math.pow(10,-6), 3: 0.01, 4: '1dm²', 5: 100, 6: Math.pow(10,3), 7:Math.pow(10,16) },
    5: { 1: 1/(Math.pow(10,10)), 2: Math.pow(10,-8), 3: Math.pow(10,-4), 4:Math.pow(10,-1), 5: '1cm²', 6: 100, 7:Math.pow(10,-14) },
    6: { 1: 1/(Math.pow(10,12)), 2:Math.pow(10,-10), 3:Math.pow(10,-6), 4:Math.pow(10,-4), 5: Math.pow(10,-1), 6: '1mm²', 7: Math.pow(10,12) },
    7: { 1: Math.pow(10,-24), 2: Math.pow(10,-22), 3: Math.pow(10,-18), 4: Math.pow(10,-16), 5: 10*(Math.pow(10,-15)), 6: 10*(Math.pow(10,-13)), 7: '1nm²' }
  };

  h2c() {
    const conversionValue: string | number = this.unitsConversion[this.choice][this.choice1];
    this.result = (typeof conversionValue === 'number') ? (this.name * conversionValue + ' '+ this.units[this.choice1].description ) : conversionValue;
  }
  weightCalculate(){
    const conversionWeight: string | number = this.weightsConversion[this.choiceweight][this.choiceweight1];
    this.resultWeight = (typeof conversionWeight === 'number') ? (this.name1 * conversionWeight + ' ' + this.weights[this.choiceweight1].description) : conversionWeight;
  }
  acreageCalculate(){
    const conversionAcreage: string | number = this.acreageConversion[this.choiceAcreage][this.choiceAcreage1];
    this.resultAcreage = (typeof conversionAcreage === 'number') ? (this.name2 * conversionAcreage + ' ' + this.acreage[this.choiceAcreage1].description) : conversionAcreage;
  }

  repeat() {
    [this.choice, this.choice1] = [this.choice1, this.choice];
    this.h2c();
  }
  repeatWeight() {
    [this.choiceweight, this.choiceweight1] = [this.choiceweight1, this.choiceweight];
    this.weightCalculate();
  }
  repeatAcreage(){
    
    [this.choiceAcreage, this.choiceAcreage1] = [this.choiceAcreage1, this.choiceAcreage];
    this.acreageCalculate();
  }


}
