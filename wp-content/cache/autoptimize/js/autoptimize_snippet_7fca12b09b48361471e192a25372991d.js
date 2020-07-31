(function($){'use strict';jQuery(document).ready(function($){var variation_obj=new variation()
variation_obj.init();function variation(){this.is_variable=false;this.init=function(){this.is_variable=this.checkIfVariable();this.checkAddToCart();this.variationChange();this.buttonChange();this.addHidden();this.buttonChange();}
this.checkIfVariable=function(){var $=jQuery;if($("input[name='variation_id']").length){return true;}
return false;}
this.variationChange=function(){var parent=this;jQuery("body").on('change',"input[name='variation_id']",function(){parent.checkAddToCart();});}
this.checkAddToCart=function(){if(this.is_variable){var id=parseInt($("input[name='variation_id']").val());if(id>0&&id!=""){this.statusBuyNow(true);}else{this.statusBuyNow(false);}}}
this.buttonChange=function(){var parent=this;$(".single_variation_wrap").on("show_variation",function(event,variation){if(variation['is_in_stock']){parent.statusBuyNow(true);}else{parent.statusBuyNow(false);}});}
this.statusBuyNow=function(status){var $=jQuery;if(status){$(".pisol_single_buy_now").attr("disabled",false);$(".pisol_single_buy_now").removeClass('disabled');}else{$(".pisol_single_buy_now").attr("disabled",true);$(".pisol_single_buy_now").addClass('disabled');}}
this.addHidden=function(){var $=jQuery;$(document).on("click",".pisol_single_buy_now",function(e){$(this).after('<input type="hidden" name="pi_quick_checkout" value="true"/>');$(this).unbind('click',function(){$(this).trigger('click');});});}}});})(jQuery);