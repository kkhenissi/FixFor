import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }
  bigChart(): any[] {

    return [{
      name: 'Asia',
      data: [302, 435, 609, 747, 1202, 3434, 4868]
  }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
  }];
  }

  cards1(): any[] {
    return [15, 87, 56, 95];
  }
  cards2(): any[] {
    return [75, 17, 36, 25];
  }
  cards3(): any[] {
    return [25, 37, 16, 15];
  }
  cards4(): any[] {
    return [51, 777, 86, 15];
  }

  pie(): any[] {
    return  [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }];
  }
}
