import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchCreteria',
  templateUrl: './searchCreteria.component.html',
  styleUrls: ['./searchCreteria.component.scss']
})
export class SearchCreteriaComponent implements OnInit {


  myControl = new FormControl();
  options: string[] = ['Chennai', 'Salem', 'Coinbatore'];
  public showSearchPane: boolean;
  private mediaSub: Subscription;

  constructor(private cdRef: ChangeDetectorRef,
              private mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
