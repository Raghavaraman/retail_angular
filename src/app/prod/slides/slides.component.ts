import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
declare var $: any;

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  public final;

  constructor(private prodService: ProdService) { }

  ngOnInit() {
    this.prodService.product().subscribe(
      final => {this.final = final[0]});
  }

}
