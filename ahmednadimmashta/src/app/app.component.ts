import { Component,EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HejryeComponent } from "./ProgramDate/hejrye.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HejryeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'ahmednadimmashta';
 




}
