// source --> https://inditribes.co.in/wp-content/plugins/add-to-cart-direct-checkout-for-woocommerce/public/js/pi-dcw-public.js?ver=1.6.9 
(function ($) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	jQuery(document).ready(function ($) {

		var variation_obj = new variation()
		variation_obj.init();
		function variation() {
			this.is_variable = false;

			this.init = function () {
				this.is_variable = this.checkIfVariable();
				this.checkAddToCart();
				this.variationChange();
				this.buttonChange();
				this.addHidden();
				this.buttonChange();
			}

			this.checkIfVariable = function () {
				var $ = jQuery;
				if ($("input[name='variation_id']").length) {
					return true;
				}
				return false;
			}

			this.variationChange = function () {
				var parent = this;
				jQuery("body").on('change', "input[name='variation_id']", function () {
					parent.checkAddToCart();
				});
			}

			this.checkAddToCart = function () {
				if (this.is_variable) {
					var id = parseInt($("input[name='variation_id']").val());
					if (id > 0 && id != "") {
						this.statusBuyNow(true);
					} else {
						this.statusBuyNow(false);
					}
				}
			}

			this.buttonChange = function () {
				var parent = this;

				$(".single_variation_wrap").on("show_variation", function (event, variation) {
					if (variation['is_in_stock']) {
						parent.statusBuyNow(true);
					} else {
						parent.statusBuyNow(false);
					}
				});
			}

			this.statusBuyNow = function (status) {
				var $ = jQuery;
				if (status) {
					$(".pisol_single_buy_now").attr("disabled", false);
					$(".pisol_single_buy_now").removeClass('disabled');
				} else {
					$(".pisol_single_buy_now").attr("disabled", true);
					$(".pisol_single_buy_now").addClass('disabled');
				}
			}

			this.addHidden = function () {
				var $ = jQuery;
				$(document).on("click", ".pisol_single_buy_now", function (e) {
					$(this).after('<input type="hidden" name="pi_quick_checkout" value="true"/>');
					$(this).unbind('click', function () {
						$(this).trigger('click');
					});
				});
			}
		}
	});

})(jQuery);
// source --> https://inditribes.co.in/wp-content/plugins/corona-virus-covid-19-banner/assets/js/frontend.min.js?ver=1.7.0.4 
jQuery(document).ready(function(a){"undefined"!=typeof Cookies&&(Cookies.get("ocvb-keep-banner-closed")||Cookies.set("ocvb-keep-banner-closed","false"))}),window.ocvb={allow_close_expiry:2,init:function(a){var b=!1,c=jQuery("#ocvb-container").data("allow-close"),d=jQuery("#ocvb-container").data("display-type");if(window.ocvb.allow_close_expiry=0==a?365:a,"undefined"!=typeof Cookies&&(b="false"!=Cookies.get("ocvb-keep-banner-closed")),c||"undefined"!=typeof Cookies&&(Cookies.set("ocvb-keep-banner-closed","false"),b=!1),"none"!=d&&jQuery("#ocvb-container").length>0&&!b){var e=jQuery("#ocvb-container").outerHeight();jQuery("body").prepend(jQuery("#ocvb-container")),"banner"==d&&jQuery("#ocvb-container").css("height",e).removeClass("not-ready").addClass("ready"),"leaderboard"==d&&jQuery("#ocvb-container").css("height",e).removeClass("not-ready").addClass("ready"),"overlay"==d&&jQuery("#ocvb-container #ocvb-body").removeClass("not-ready").addClass("ready"),setTimeout(function(){if(jQuery("#ocvb-container").removeClass("ready").addClass("ready-and-display"),jQuery(document).on("click","#ocvb-container #ocvb-container-close-button",window.ocvb.close_banner),"banner"==d&&window.scrollTo({top:0,left:0,behavior:"auto"}),"overlay"==d){var a=jQuery("#ocvb-container #ocvb-body").outerHeight();jQuery("#ocvb-container #ocvb-body").css("margin-top",-a/2)}if("leaderboard"==d){var a=jQuery("#ocvb-container #ocvb-body").outerHeight();jQuery("body").css("margin-bottom",a)}},100)}},close_banner:function(a){var b=jQuery("#ocvb-container").data("display-type");return"undefined"!=typeof Cookies&&Cookies.set("ocvb-keep-banner-closed","true",{expires:window.ocvb.allow_close_expiry}),jQuery("#ocvb-container").removeClass("ready-and-display ready ocvb-enabled").addClass("not-ready ocvb-disabled"),"leaderboard"==b&&jQuery("body").css("margin-bottom","0"),a.stopPropagation(),!1}};
// source --> https://inditribes.co.in/wp-content/plugins/corona-virus-covid-19-banner/assets/js/js.cookie.min.js?ver=1.7.0.4 
/*! js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});