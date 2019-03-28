import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RetailCustomerService } from './retail-customer.service';
import * as Chartist from 'chartist';
declare let $: any;

@Component({
  selector: 'app-retail-customer',
  templateUrl: './retail-customer.component.html',
  styleUrls: ['./retail-customer.component.css']
})
export class RetailCustomerComponent implements OnInit {
  public retail;
  public retailc;

  @Output()
  public hideAll = new EventEmitter();
  public loadVideo = new EventEmitter();

  constructor(private retailCustomer: RetailCustomerService) { }

  ngOnInit() {
    this.retailCustomer.retails().subscribe(
      retail => this.retail = retail[0]
    );

    this.retailCustomer.retailc().subscribe(
      retailc => this.retailc = retailc
    );

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

        this.loadFootfallPeakTimeGraph();
        this.chartSentiment();
      }, 500);
    });
  }

  loadFootfallPeakTimeGraph() {
    const footfallPeakTimeGraphData = {
      labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      series: [10, 12, 8, 20, 15, 8, 20, 15]
    };

    // We are setting a few options for our chart and override the defaults
    const options1 = {
      showPoint: true, // Don't draw the line chart points
      lineSmooth: true, // Disable line smoothing
      // X-Axis specific configuration
      axisX: {
        offset: 20,
        showGrid: true, // We can disable the grid for this axis
        showLabel: true // and also don't show the label
      },
      // Y-Axis specific configuration
      axisY: {
        showGrid: false, // We can disable the grid for this axis
        showLabel: false, // and also don't show the label
        offset: 0, // Lets offset the chart a bit from the labels
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: (labels) => {
          return labels;
        }
      },
      distributeSeries: true
    };

    setTimeout(() => {
      const $footfallPeakTimeGraphObj = new Chartist.Bar('#footfall_peak_time_graph', footfallPeakTimeGraphData, options1);
    }, 500);
  }

  chartSentiment() {
    // customer sentiments
    const chartsentimentGraphData = {
      timelabel: ['Very Sad', 'Sad', 'Netural', 'Happy', 'Vey Happy'],
      labels: ['8:00am', '11:00am', '2:00pm', '5:00pm', '8.00pm'],
      series: [4, 7, 5, 8, 7]
    };
    // We are setting a few options for our chart and override the defaults
    const options = {
      fullWidth: true,
      chartPadding: {
        left: 15
      },
      low: 0,
      showArea: false,
      showPoint: true, // Don't draw the line chart points
      lineSmooth: true, // Disable line smoothing
      // X-Axis specific configuration
      axisX: {
        offset: 30,
        showGrid: true, // We can disable the grid for this axis
        showLabel: true // and also don't show the label
      },
      // Y-Axis specific configuration
      axisY: {
        showGrid: true, // We can disable the grid for this axis
        showLabel: false, // and also don't show the label
        offset: 0, // Lets offset the chart a bit from the labels
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: (timelabel) => {
          return timelabel;
        }
      }
    };

    setTimeout(() => {
      const $chartsentimentObj = new Chartist.Line('#chartsentiment', chartsentimentGraphData, options);
    }, 300);
  }

  retailTabCustomer() {
    $('#videoBg').html('');

    $('.slide_calandr').slick('unslick');
    $('.offer_slider').slick('unslick');
    $('.age_range_slide').slick('unslick');
    $('.middle_nav_content .nav_section_title').html('Customer');

    this.hideAll.emit();

    $('.clickable_tabs .click_1').addClass('active');
    $('#Customer').show();
    $('.tab_1_video').show();
    $('#Customer.main_tab.tab-pane').addClass('in active');

    $('<source src="assets/videos/store.mp4" type="video/mp4">').appendTo('#videoBg');

    this.loadVideo.emit();
    this.loadFootfallPeakTimeGraph();
    this.chartSentiment();
  }
}
