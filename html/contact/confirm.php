<?php
error_reporting(E_ALL & ~E_NOTICE);
?>
<?php

	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// ページ設定
	//
	/////////////////////////////////////////////////////////////////////////////////////////////////////

	// ルートパス設定
	$rocal_path       = ""; // ルート以外にある場合パスを記述(/から記述)
	$root_path        = $_SERVER['DOCUMENT_ROOT'].$rocal_path;
	// 共通設定読み込み
	include ($root_path."/assets/inc/setting.php");

	// 個別設定
	$page_class       = "page-sub page-contact"; // ページクラスが必要な場合
	$page_title       = "確認画面｜CONTACT"; // ページタイトル
	$page_keywords    = ""; // ページ特有のキーワードがある場合
	$page_description = ""; // ページ特有のdescriptionがある場合

	// OGP 
	$page_type        = "website"; // website or blog *トップページのみ記述
	$page_ogimage     = ""; // og:imageを個別に設定する場合パスを記述

?>
<?php
function check_input($data){
    $data = trim($data);
    $data = strip_tags($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data,ENT_QUOTES, 'UTF-8');
    $data= (string)$data;
  return $data;
 }

  $name = (filter_input(INPUT_POST,'name')) ? check_input($_POST['name'] ): "";
  $tel = (filter_input(INPUT_POST,'tel')) ? check_input($_POST['tel'] ): "";
  $email = (filter_input(INPUT_POST,'email')) ? check_input($_POST['email'] ): "";
  $company = (filter_input(INPUT_POST,'company')) ? check_input($_POST['company'] ): "";
  $text = (filter_input(INPUT_POST,'text')) ? check_input($_POST['text'] ): "";
  
  //入力チェック
  $errormsg = array();
  //名前
  if ($name == null) {
    $errormsg[] = "NAMEを入力してください。";
  }
  if ($email == null) {
    $errormsg[] = "E-MAILを入力してください。";
  }
  $ret = preg_match("/^[a-zA-Z0-9_\.\-]+?@[A-Za-z0-9_\.\-]+$/", $email);
  if (!$ret) {
    $errormsg[] = "E-MAILを正しい形式で入力して下さい。";
  }
  $ret_tel = preg_match('/\A\d{2,4}+-\d{2,4}+-\d{4}\z/', $tel);
  if(!($ret_tel)){
    $errormsg[] = "TELを半角英数で入力してください。";
  }
  //内容
  if ($text == null) {
    $errormsg[] = "MESSAGEを入力して下さい。";
  }
?>
<!DOCTYPE html>
<html dir="ltr" lang="ja">
<head>
<?php include ($root_path."/assets/inc/meta.php");	?>
<?php // 個別CSSなど  ?>
</head>
<body<?php if ($page_class): ?> class="<?php echo $page_class ?>"<?php endif; ?>>
    <div class="l-main">
	<?php include ($root_path."/assets/inc/header.php"); ?>

	<main>
        <section>
          <div class="l-section">
            <h2>CONTACT</h2>

            <?php if (count($errormsg) > 0): ?>
            <p class="read">入力内容に誤りがあります。</p>
            <p class="errors">
            <?php foreach ($errormsg as $msg): ?>
            ・<?=$msg?><br />
            <?php endforeach; ?>
            </p>
		
            <form action="confirm.php" method="post">
                  <div class="form">
                    <dl class="form-row">
                      <dt class="form-ttl"><em>NAME</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><input type="text" name="name" value="<?php print(check_input($_POST["name"])); ?>"></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>E-MAIL</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><input type="text" name="email" value="<?php print(check_input($_POST["email"])); ?>"></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>TEL</em></dt>
                      <dd class="form-input"><input type="tel" name="tel" value="<?php print(check_input($_POST["tel"])); ?>"></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>COMPANY</em></dt>
                      <dd class="form-input"><input type="text" name="company" value="<?php print(check_input($_POST["company"])); ?>"></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>MESSAGE</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><textarea name="text" rows="5"><?php print(check_input($_POST["text"])); ?></textarea></dd>
                    </dl>
                  </div>
                  <div class="buttonbox">
                      <a href="./"><img src="../img/contact/btn-reset.gif" alt="RESET" width="156" ></a>
                      <p><input type="image" border="0" name="imageField" src="../img/contact/btn_confirm.gif" width="156" alt="SUBMIT"></p>
                      <input type="hidden" name="act" value="conf">
                  </div><!-- /.buttonbox -->
                </form>

          <?php else: ?>

            <p>下記の内容で送信いたします。<br />ご確認の上、よろしければSUBMITボタンを押して送信してください。</p>
            <form action="confirm.php" method="post">
                <div class="form">
                    <dl class="form-row">
                      <dt class="form-ttl"><em>NAME</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><?php print(check_input($_POST["name"])); ?></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>E-MAIL</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><?php print(check_input($_POST["email"])); ?></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>TEL</em></dt>
                      <dd class="form-input"><?php print(check_input($_POST["tel"])); ?></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>COMPANY</em></dt>
                      <dd class="form-input"><?php print(check_input($_POST["company"])); ?></dd>
                    </dl>
                    <dl class="form-row">
                      <dt class="form-ttl"><em>MESSAGE</em><span class="txt-caution"></span></dt>
                      <dd class="form-input"><?php print(check_input(check_input($_POST["text"]))); ?></dd>
                    </dl>
                  </div><!-- /form -->
                  <div class="buttonbox">
                      <form action="index.php" method="post" class="form-btn">
                      <input type="hidden" name="name" value="<?php print(check_input($_POST["name"])); ?>">
                      <input type="hidden" name="email" value="<?php print(check_input($_POST["email"])); ?>">
                      <input type="hidden" name="tel" value="<?php print(check_input($_POST["tel"])); ?>">
                      <input type="hidden" name="tel" value="<?php print(check_input($_POST["company"])); ?>">
                      <input type="hidden" name="text" value="<?php print(check_input($_POST["text"])); ?>">
                      <input type="image" border="0" name="imageField" src="../img/contact/btn_return.gif" width="156" alt="RETURN">
                      </form>
                      <form action="finish.php" method="post" class="form-btn">
                      <input type="hidden" name="name" value="<?php print(check_input($_POST["name"])); ?>">
                      <input type="hidden" name="email" value="<?php print(check_input($_POST["email"])); ?>">
                      <input type="hidden" name="tel" value="<?php print(check_input($_POST["tel"])); ?>">
                      <input type="hidden" name="text" value="<?php print(check_input($_POST["company"])); ?>">
                      <input type="hidden" name="text" value="<?php print(check_input($_POST["text"])); ?>">
                      <input type="image" border="0" name="imageField" src="../img/contact/btn_send.gif" width="156" alt="SEND">
                      </form>
                    </div><!-- /.buttonbox -->
                </form>
          <?php endif; ?>
        </div><!-- .l-section -->
      </section>
    </main>
    <?php include ($root_path."/assets/inc/footer.php"); ?>
</div><!-- .l-main -->
<?php include ($root_path."/assets/inc/script.php"); ?>
</body>
</html>