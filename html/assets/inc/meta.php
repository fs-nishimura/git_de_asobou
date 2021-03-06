<?php
	// タイトル
	if($page_class=="page-home"):
		$title = $page_title;
	elseif ($page_title != ""):
		$title = $page_title." | ".$site_title;
	else:
		$title = $site_title;
	endif;

	// ディスクリプション
	if ($page_description != ""):
		$description = $page_description;
	else:
		$description = $site_description;
	endif;

	// keywords
	if ($page_keywords != ""):
		$keywords = $page_keywords.",".$site_keywords;
	else:
		$keywords = $site_keywords;
	endif;

	// URL
	$url = (isset($_SERVER['HTTPS']) ? 'https://' : 'http://').$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
	$protocol=isset($_SERVER['HTTPS']) ? 'https://' : 'http://';

	// og:type
	if ($page_type != ""):
		$type = $page_type;
	else:
		$type = "article";
	endif;

	// og:image
	if ($page_ogimage != ""):
		$ogimage = $page_ogimage;
	else:
		$ogimage = $protocol.$_SERVER["HTTP_HOST"]."/ogp.png";
	endif;

?>
	<meta http-equiv="content-script-type" content="text/javascript">
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta property="og:title" content="<?php echo $title; ?>">
	<meta property="og:description" content="<?php echo $description; ?>">
	<meta property="og:url" content="<?php echo $url; ?>">
	<meta property="og:image" content="<?php echo $ogimage; ?>">
	<meta property="og:site_name" content="<?php echo $site_title; ?>">
	<meta property="og:type" content="<?php echo $type; ?>">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content="<?php echo $ogimage; ?>">
	<meta name="keywords" content="<?php echo $keywords; ?>">
	<meta name="description" content="<?php echo $description; ?>">\
	<?php if($is_test): ?>
	<meta name="robots" content="nofollow">
	<?php else: ?>
	<meta name="robots" content="index,follow">
	<?php endif; ?>
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="apple-touch-icon" href="/shortcut.png">
	<?php if ($telephone == true): ?><meta name="format-detection" content="telephone=no"><?php endif; ?>
	<?php if ($viewport == true): ?><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><?php endif; ?>
	<!--[if lt IE 9]>
	<script src="<?php echo $local_path; ?>/js/library/html5shiv-printshiv.js"></script>
	<![endif]-->
	<!--[if lt IE 8]><script src="<?php echo $local_path; ?>/js/library/selectivizr-min.js"></script><![endif]-->
	<link rel="stylesheet" href="<?php echo $local_path; ?>assets/css/style.css" media="screen,print">
	<?php if ($ga != ""): ?>
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', '<?php echo $ga; ?>', 'auto');
		  ga('send', 'pageview');
		</script>
	<?php endif; ?>

