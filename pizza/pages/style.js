function count(){


	var shop_str=localStorage.getItem("itshop");
	if (shop_str){
		var shop_arr=JSON.parse(shop_str);
		var count=0;
		$.each(shop_arr,function(i,v){
			count+=v.qty;
		})
		$('#count').text(count);

	}
}