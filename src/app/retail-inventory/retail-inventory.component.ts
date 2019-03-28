import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RetailInventoryService } from './retail-inventory.service';
declare let $: any;

@Component({
  selector: 'app-retail-inventory',
  templateUrl: './retail-inventory.component.html',
  styleUrls: ['./retail-inventory.component.css']
})
export class RetailInventoryComponent implements OnInit {
  public retailinvent;
  public retailinve;

  @Output()
  public hideAll = new EventEmitter();
  public loadVideo = new EventEmitter();

  constructor(private retailInventory: RetailInventoryService) { }

  ngOnInit() {
    this.retailInventory.retailinventory().subscribe(
      retailinvent => this.retailinvent = retailinvent[0]
    );

    this.retailInventory.retailinv().subscribe(
      retailinve => this.retailinve = retailinve
    );
  }

  retailTabInventory() {
    $('#videoBg').html('');
    $('.middle_nav_content .nav_section_title').html('Inventory');
    // $('.top_selling').slick('unslick');

    this.hideAll.emit();
    $('.clickable_tabs .click_3').addClass('active');
    $('#Inventory').show();
    $('.tab_3_video').hide();
    $('#left_popup_3').hide();
    $('#Inventory.main_tab.tab-pane').addClass('in active');
    

    $('<source src="assets/videos/inventory.mp4" type="video/mp4">').appendTo('#videoBg');

    this.loadVideo.emit();
  }

}
