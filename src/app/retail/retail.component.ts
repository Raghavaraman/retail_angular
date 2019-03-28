import { Component, OnInit, ViewChild } from '@angular/core';
import { RetailService } from './retail.service';
import { RetailCustomerComponent } from '../retail-customer/retail-customer.component';
import { RetailStaffComponent } from '../retail-staff/retail-staff.component';
import { RetailInventoryComponent } from '../retail-inventory/retail-inventory.component';
import { RetailInfraComponent } from '../retail-infra/retail-infra.component';
declare let $: any;
declare var WOW: any;
declare var AOS: any;

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {
  public retailalert;
  @ViewChild (RetailCustomerComponent) cust: RetailCustomerComponent;
  @ViewChild (RetailStaffComponent) staf: RetailStaffComponent;
  @ViewChild (RetailInventoryComponent) inve: RetailInventoryComponent;
  @ViewChild (RetailInfraComponent) infr: RetailInfraComponent;

  constructor(private retailService: RetailService) { }

  ngOnInit() {
    this.retailService.retailalerts().subscribe(
      retailalert =>{ this.retailalert = retailalert
      }
    );

    $(document).ready(() => {
      $('html').on('contextmenu', () => {
        return false;
      });
    });

    $(document).ready(() => {
      window.setInterval(() => {
        $('#left_popup_1').css('opacity', 1);
        $('#left_popup_1').show();
        // console.log("asvav");
        setTimeout(() => {
          $('#left_popup_1').css('opacity', 0);
          $('#left_popup_1').hide();
        }, 7000);
      }, 30000);
    });

    $(document).ready(() => {
      window.setTimeout(() => {
        $('.slide_calandr').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          slidesToShow: 1,
          adaptiveHeight: false
        });

        $('.offer_slider').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          slidesToShow: 1,
          adaptiveHeight: false
        });

        $('.age_range_slide').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 8000,
          speed: 1000,
          slidesToShow: 1,
          adaptiveHeight: false
        });

        $('.top_selling').slick({
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          adaptiveHeight: false
        });
      });
    });

    $(document).ready(() => {
      new WOW().init();
      AOS.init();
      setInterval(() => {
        $('.nav_date').html('');
        $('.nav_time').html('');

        // tslint:disable-next-line:max-line-length
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const today = new Date();
        const date = today.getDate() + ' ' + (monthNames[today.getMonth()]) + ' ' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        $('.nav_date').html(date);
        $('.nav_time').html(time);
      }, 1000);

      $('.tab_1_video').show();
    });
  }
  

  hideAllTabs() {
    $('#Customer').hide();
    $('#Staff').hide();
    $('#Inventory').hide();
    $('#Infra').hide();
    $('.tab_1_video').hide();
    $('.tab_2_video').hide();
    $('.tab_3_video').hide();
    $('.tab_4_video').hide();
    $('#left_popup_1').hide();
    $('#left_popup_2').hide().removeClass('overlay_body');
    $('#left_popup_3').hide();
    $('#left_popup_4').hide().removeClass('overlay_body');
    $('body').removeClass('close_pop');
    $('.alert_misplaced.alert_popup_dash').hide();
    $('#staff_details_popup').hide();
    $('.clickable_tabs .nav_item').removeClass('active');
    $('.right_div .main_tab.tab-pane').removeClass('in active');
  }

  loadRespectiveVideo() {
    const videoPlayer = document.getElementById('videoBg') as HTMLMediaElement;
    videoPlayer.currentTime = 0;
    videoPlayer.load();
    videoPlayer.play();
  }

  customer() {
    this.cust.retailTabCustomer();
  }

  staff() {
    this.staf.retailTabStaff();
  }

  inventory() {
    this.inve.retailTabInventory();
  }

  infra() {
    this.infr.retailTabInfra();
  }

  topNav() {
    $('#sidenav').addClass('open-sidebar');
    $('#sidenav').removeClass('close-sidebar');
  }

  closeNav() {
    $('#sidenav').removeClass('open-sidebar');
    $('#sidenav').addClass('close-sidebar');
  }

  disclaimer() {
    $('.modal-backdrop').hide();
    $('#disclaimerPopup').hide();
  }

  cancelAlert() {
    $('#left_popup_1').css('opacity', 0);
    $('#left_popup_1').hide();
  }

  tab1() {
    $('#left_popup_1').css('opacity', 1);
    $('#left_popup_1').show();
    $('body').addClass('close_pop');
  }

  tab2() {
    $('#left_popup_2').show().addClass('overlay_body');
    $('body').addClass('close_pop');
  }

  tab4() {
    $('#left_popup_4').show();
    $('#left_popup_4').show().addClass('overlay_body');
    $('body').addClass('close_pop');
  }

  leftPopup2() {
    $('#left_popup_2').hide().removeClass('overlay_body');
  }

  leftPopup4() {
    $('#left_popup_4').hide().removeClass('overlay_body');
  }
}