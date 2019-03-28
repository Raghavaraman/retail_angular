import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RetailInfraService } from './retail-infra.service';
declare let $: any;

@Component({
  selector: 'app-retail-infra',
  templateUrl: './retail-infra.component.html',
  styleUrls: ['./retail-infra.component.css']
})
export class RetailInfraComponent implements OnInit {
  public retailinfra;
  public retailinfr;

  @Output()
  public hideAll = new EventEmitter();
  public loadVideo = new EventEmitter();

  constructor(private retailInfra: RetailInfraService) { }

  ngOnInit() {
    this.retailInfra.retailinfras().subscribe(
      retailinfra => this.retailinfra = retailinfra[0]
    );

    this.retailInfra.retailinf().subscribe(
      retailinfr => this.retailinfr = retailinfr
    );
  }

  retailTabInfra() {
    $('#videoBg').html('');
    $('.middle_nav_content .nav_section_title').html('Infra');

    this.hideAll.emit();
    $('.clickable_tabs .click_4').addClass('active');
    $('#Infra').show();
    $('.tab_4_video').show();
    $('#Infra.main_tab.tab-pane').addClass('in active');

    $('<source src="assets/videos/infra.mp4" type="video/mp4">').appendTo('#videoBg');

    this.loadVideo.emit();
  }

}
