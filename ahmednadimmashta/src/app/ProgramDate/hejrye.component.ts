import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import moment from "moment-hijri";

@Component({
  selector: "ahmed",
  templateUrl: "hejrye.component.html",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // لاستدعاء ال ngModel
  ],
  styleUrls: ["./hejrye.component.css"],//استدعاء ال css
})
export class HejryeComponent implements OnChanges, OnInit {

  ngOnInit(): void {
    console.log("OnInit");
  }

  @Input()
  Day: number = 0; 
  Month: number = 0;
  Yers: number = 0;

  hijriDate: string = ""; 
  day: string = ""; 

  valueSelect = new EventEmitter<number>();

  ngOnChanges(): void {
    console.log(this.valueSelect);
  }

  @Input()
  selectMount: string = "";

  OnChangesMount(event: Event): void {// هي الدالة موقفا بس كانت منشان تجبلي التاتريخ الشهر , كنت عاملا select
    const selected = event.target as HTMLSelectElement;
    this.selectMount = selected.options[selected.selectedIndex].text;
    console.log('الشهرر :', this.selectMount);
  }

  @Output()
  value = new EventEmitter<string>();

  Cliced(): void {
    const gregorianDate = `${this.Yers}-
    ${this.Month.toString()}
      -${this.Day.toString()}`; 
    try {
      const hijriDate = moment(gregorianDate, 'YYYY-MM-DD')
      .format('iYYYY-iM-iD'); // منشان التاريخ يكون يووم وشهر وسنة 
      console.log(hijriDate);
      this.hijriDate = hijriDate; 
      this.onClick(hijriDate);
      this.day = moment(gregorianDate, 'YYYY-MM-DD')
      .format('dddd'); //moment تحويل إلى نص لل 

    } catch (error) {
      console.error('Error  :', error );
    }
  }

  onClick(vals: string) {
    return this.value.emit(vals);
  }
}
