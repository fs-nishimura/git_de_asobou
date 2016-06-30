<?php

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // ページ設定
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // ルートパス設定
  //DOCUMENT_ROOT=serverのトップ、下層ディレクトリは$local_pathで指定
  $local_path       = "/"; // ルート以外にある場合パスを記述(/から記述)
  $root_path        = $_SERVER['DOCUMENT_ROOT'].$local_path;
  // 共通設定読み込み
  include ($root_path."/assets/inc/setting.php");

  // 個別設定
  $page_class       = "page-sub"; // ページクラスが必要な場合
  $page_title       = "xxxx"; // ページタイトル
  $page_keywords    = "xxx"; // ページ特有のキーワードがある場合
  $page_description = "xxxx"; // ページ特有のdescriptionがある場合

  // OGP 
  $page_type        = "website"; // website or blog *トップページのみ記述
  $page_ogimage     = ""; // og:imageを個別に設定する場合パスを記述

?>
<!DOCTYPE html>
<html dir="ltr" lang="ja">
<head>
<?php include ($root_path."/assets/inc/meta.php");  ?>
</head>
<body<?php if ($page_class): ?> class="<?php echo $page_class ?>"<?php endif;?>>
  <div class="l-main">
  <?php include ($root_path."/assets/inc/header.php"); ?>
  <main>
  <section>
    <div class="l-section">
      
    </div><!-- /.l-section -->
  </section>
  </main>
  <?php include ($root_path."/assets/inc/footer.php"); ?>
  </div><!-- /.l-main -->
<?php include ($root_path."/assets/inc/script.php"); ?>
</body>
</html>