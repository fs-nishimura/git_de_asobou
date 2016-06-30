<?php
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// setting.php
	// DESC : サイト定義
	//
	/////////////////////////////////////////////////////////////////////////////////////////////////////

	// !!!!本番配布前に変更!!!!!
	$is_test = true;

	// サイトのタイトル
	$site_title       = "xxxx";
	$site_description = "xxxxx";
	$site_keywords    = "xxxx";

	// スマホ対応設定
	$telephone        = false; // true : 電話番号への自動リンクを消す
	$viewport         = true; // true : viewportの指定あり

	// google analytics
	$ga = ""; // UAから始まるアカウントを記入

	function is_mobile(){
		$useragents = array(
		    'iPhone', // iPhone
		    'iPod', // iPod touch
		    'Windows.*Phone', // *** Windows Phone
		    'dream', // Pre 1.5 Android
		    'CUPCAKE', // 1.5+ Android
		    'blackberry9500', // Storm
		    'blackberry9530', // Storm
		    'blackberry9520', // Storm v2
		    'blackberry9550', // Storm v2
		    'blackberry9800', // Torch
		    'webOS', // Palm Pre Experimental
		    'incognito', // Other iPhone browser
		    'webmate' // Other iPhone browser
		);
		$pattern = '/'.implode('|', $useragents).'/i';
		if(preg_match($pattern, $_SERVER['HTTP_USER_AGENT']) == true){
		      return true;
		}else if( strpos($_SERVER['HTTP_USER_AGENT'], 'Android') !== false && strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false){
			return true;
		} else {
		  return false;
		}
	}

	function is_tablet(){
	    $useragents_t = array(
	        'iPad', 
	        'Kindle',
	        'Silk'
	    );
	    $pattern_t = '/'.implode('|', $useragents_t).'/i';
		  if(preg_match($pattern_t, $_SERVER['HTTP_USER_AGENT']) == true){
		          return true;
		  }else if( strpos($_SERVER['HTTP_USER_AGENT'], 'Android') !== false && strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') === false){
		  	return true;
		  }else {
		      return false;
		  }
	}

?>