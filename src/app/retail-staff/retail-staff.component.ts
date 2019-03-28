import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RetailStaffService } from './retail-staff.service';
import * as Chartist from 'chartist';
declare let $: any;

@Component({
  selector: 'app-retail-staff',
  templateUrl: './retail-staff.component.html',
  styleUrls: ['./retail-staff.component.css']
})
export class RetailStaffComponent implements OnInit {
  public retailstaff;
  public retailstaf;

  @Output()
  public hideAll = new EventEmitter();
  public loadVideo = new EventEmitter();

  constructor(private retailStaff: RetailStaffService) { }

  ngOnInit() {
    this.retailStaff.retailstaffs().subscribe(
      retailstaff => this.retailstaff = retailstaff[0]
    );

    this.retailStaff.retailsta().subscribe(
      retailstaf => this.retailstaf = retailstaf
    );
  }

  loadRetailstaffStrengthGraph() {
    const staffStrengthGraphData = {
      labels: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      series: [35, 35, 34, 33, 30, 33, 35, 35, 32 , 32, 35]
    };

    // We are setting a few options for our chart and override the defaults
    const options2 = {
      showPoint: true, // Don't draw the line chart points
      lineSmooth: true, // Disable line smoothing
      // X-Axis specific configuration
      axisX: {
        offset: 40,
        showGrid: true, // We can disable the grid for this axis
        showLabel: true // and also don't show the label
      },
      //   // Y-Axis specific configuration
      axisY: {
        offset: 40, // Lets offset the chart a bit from the labels
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: (labels) => {
          return labels;
        }
      },
      distributeSeries: true,
      plugins: [
        // Chartist.plugins.ctBarLabels(),
        // Chartist.plugins.legend()
      ]
    };
    setTimeout(() => {
      const $staffStrengthGraphObj = new Chartist.Bar('#staff_strength_graph', staffStrengthGraphData, options2);
    }, 300);

  }

  retailTabStaff() {
    $('#videoBg').html('');
    $('<source src="assets/videos/staff.mp4" type="video/mp4">').appendTo('#videoBg');

    this.loadVideo.emit();
    $('.middle_nav_content .nav_section_title').html('Staff');

    this.loadRetailstaffStrengthGraph();
    // DAILY TARGET customer
    setTimeout(() => {
      $('.dailyTarget').each(() => {
        const $bar = $(this).find('.bar');
        const $val = $(this).find('span');
        const perc = parseInt($val.text(), 10);

        $({ p: 0 }).animate({ p: perc }, {
          duration: 3000,
          easing: 'swing',
          step: (p) => {
            $bar.css({
              transform: 'rotate(' + (45 + (p * 1.8)) + 'deg)', // 100%=180° so: ° = % * 1.8
              // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p || 0);
          }
        });
      });
    }, 300);

    this.hideAll.emit();
    $('.clickable_tabs .click_2').addClass('active');
    $('#Staff').show();
    $('.tab_2_video').show();
    $('#Staff.main_tab.tab-pane').addClass('in active');
    $('#staff_details_popup').show();
  }
}
