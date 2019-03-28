import { Component, OnInit } from '@angular/core';
import { ProdService } from './prod.service';
declare var $: any;
declare var WOW: any;
declare var AOS: any;

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  public showProvenance = false;
  public showModal = false;
  public final;
  public finalsu;
  public finala;
  public finallike;
  public errorMessage;
  public globevid;
  public globevidpopup;

  constructor(private prodService: ProdService) { }

  ngOnInit() {

    this.prodService.product().subscribe(
      final => {this.final = final[0]
      var product_index = this.final.id;
      if (product_index.productLocationCity == "Aurora" && product_index.productLocationCounty == "USA") {
        this.globevid = "globe_usa.mp4";
        this.globevidpopup = "globe_usa_p1.mp4";
      }
      else if (product_index.productLocationCity == "Florida" && product_index.productLocationCounty == "USA") {
        this.globevid = "globe_usa.mp4";
        this.globevidpopup = "globe_usa_p3.mp4";
      }
      else {
        this.globevid = "globe_ind.mp4";
        this.globevidpopup = "globe_ind_p2.mp4";
      }
      console.log(this.globevid)
    });

    this.prodService.product().subscribe(
      finala => {this.finala = finala[0]
      console.log(this.finala)}
    );

    this.prodService.productSu().subscribe(
      finalsu => this.finalsu = finalsu);

    $(document).ready(() => {
      $('html').on('contextmenu', () => {
        return false;
      });
    });

    $(document).ready(() => {
      new WOW().init();
      AOS.init();
      this.loadProductImgSlider();
    });
    setTimeout(()=>{
      $('.data_11').slick({
        dots: true,
        speed: 4000,
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        lazyLoad: 'progressive'
      });  
    },5000)
  }

  loadProductImgSlider() {

    // initiate the plugin and pass the id of the div containing gallery images

    $('#product_zoom').elevateZoom({
      gallery: 'product_gallery',
      cursor: 'pointer',
      galleryActiveClass: 'active',
      imageCrossfade: true,
      loadingIcon: '',
      zoomEnabled: false
    });

    // // pass the images to Fancybox
    // $('#product_zoom').bind('click', (e) => {
    //   const ez = $('#product_zoom').data('elevateZoom');
    //   $.fancybox(ez.getGalleryList());
    //   return false;
    // });

    let currentSlide = 1;
    setInterval(() => {
      $('#product_gallery a:nth-child(' + currentSlide + ') #product_zoom').click();
      if (currentSlide < 3) {
        currentSlide++;
      } else {
        currentSlide = 1;
      }
    }, 5000);
  }

  loadCartScreen() {
    this.showModal = true;
    $('#checkputPopView').animatedModal({
      animatedIn: 'zoomIn',
      animatedOut: 'zoomOut',
      color: 'rgba(0,0,0,0.8)',
      // Callbacks
      beforeOpen: () => {
        $('.close_btn').css('opacity', '0');
        $('.close_btn').addClass('rollIn');
      },
      afterOpen: () => {
        $('.close_btn').removeClass('rollIn');
        $('.close_btn').css('opacity', '1');
      },
      beforeClose: () => {
        $('.close_btn').css('opacity', '0');
      },
      afterClose: () => {
      }
    });
  }

  success() {
    $('#checkout_div').hide();
    $('#clickSuccess').show();
  }

  closeCart() {
    const closeAll = document.getElementById('cartComplete');
    closeAll.remove();
  }

  // loadYamlFromUrl() {
  //   if (sessionStorage.productId !== undefined) {
  //     loadProductDetail(sessionStorage.productId);
  //   } else {
  //     jQuery.get('product_data/getProductId.yaml', (data) => {
  //       const data1: any = jsyaml.load(data);
  //       console.log('data in yaml', data1);
  //       loadProductDetail(data1.productId);
  //       sessionStorage.setItem('productId', data1.productId);
  //     });
  //   }
  // }

  disclaimer() {
    $('.modal-backdrop').hide();
    $('#disclaimerPopup').hide();
  }
  provenanceModal() {
    this.showProvenance = true;
    console.log("porvveennaanceee",this.showProvenance)
    $('#mapPopView').animatedModal({
      animatedIn: 'zoomIn',
      animatedOut: 'zoomOut',
      color: 'rgba(0,0,0,0.8)',
      // Callbacks
      beforeOpen: () => {
        $('.close_btn').css('opacity', '0');
        $('.close_btn').addClass('rollIn');
      },
      afterOpen: () => {
        $('.close_btn').removeClass('rollIn');
        $('.close_btn').css('opacity', '1');
      },
      beforeClose: () => {
        $('.close_btn').css('opacity', '0');
      },
      afterClose: () => {
        // this.slickCarousel()
      }
    });
  }
  slickCarousel() {
    $('.data_11').slick("slick-initialized slick-slider");
    $('.data_11').slick({
      dots: true,
      speed: 4000,
      slidesToShow: 1,
      centerMode: true,
      autoplay: true,
    });
  }
}

let productCounter = 0;
const interval = setInterval(() => {
  // console.log(productCounter);
  productCounter++;
  // Display 'counter' wherever you want to display it.
  if (productCounter === 100) {
    // Display a login box
    clearInterval(interval);
    const url = 'index.html';
    window.location.href = url;
  }
}, 1000);



