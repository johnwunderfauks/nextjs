<?php
@ini_set( 'upload_max_size' , '512M' );
@ini_set( 'post_max_size', '512M');
@ini_set( 'max_execution_time', '300' );


register_post_type('selfie',
array(
   'labels' => array(
      'name' => __('Selfie', 'coke'),
      'singular_name' => __('Selfie', 'coke'),
      'add_new' => __('Add New', 'radium'),
      'add_new_item' => __('Add New Selfie', 'coke'),
      'edit' => __('Edit', 'coke'),
      'edit_item' => __('Edit Selfie', 'coke'),
      'new_item' => __('New Seslfie', 'coke'),
      'view' => __('View Faqs', 'coke'),
      'view_item' => __('View Selfie', 'coke'),
      'search_items' => __('Search Selfie', 'coke'),
      'not_found' => __('No Selfies found', 'coke'),
      'not_found_in_trash' => __('No Selfie found in Trash', 'coke')
   ),
   'public' => true,
   'hierarchical' => true,
   'has_archive' => true,
   'supports' => array(
      'thumbnail',
      'title',
      'editor',
      'page-attributes'
   ),
   'can_export' => true
));

add_filter('wp_mail_from','hsbc_wp_mail_from');
function hsbc_wp_mail_from($content_type) {
   return 'mcdnationalsharingday@gmail.com';
}
add_filter('wp_mail_from_name','hsbc_wp_mail_from_name');
function hsbc_wp_mail_from_name($name) {
   return 'Team McDelivery';
}


function gif_submit()
{
   header('Access-Control-Allow-Origin: *');
   date_default_timezone_set('Asia/Singapore');

   $img = isset($_POST['img']) ? ($_POST['img']) : "";

   $count_posts = wp_count_posts('selfie');
   $selfieTitle = "Selfie_" . $count_posts->publish;

   $selfieArr = array(
      'post_title' => $selfieTitle,
      'post_type' => 'selfie',
      'post_status' => 'publish'
   );
   $newSelfie = wp_insert_post($selfieArr);
   $selfieID = intval($newSelfie);
   $upload_dir       = wp_upload_dir();
   $upload_path      = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

   $img = str_replace('data:image/gif;base64,', '', $img);
   $img = str_replace(' ', '+', $img);
	

   $decoded          = base64_decode($img) ;
   $filename         = $selfieTitle.'.gif';
   $hashed  = md5( $filename . microtime() );
   $hashed_filename = $hashed . '_' . $filename;
   $image_upload     = file_put_contents( $upload_path . $hashed_filename, $decoded );
   if( !function_exists( 'wp_handle_sideload' ) ) {
      require_once( ABSPATH . 'wp-admin/includes/file.php' );
   }
   // Without that I'm getting a debug error!?
   if( !function_exists( 'wp_get_current_user' ) ) {
      require_once( ABSPATH . 'wp-includes/pluggable.php' );
   }

   // @new
   $file             = array();
   $file['error']    = '';
   $file['tmp_name'] = $upload_path . $hashed_filename;
   $file['name']     = $hashed_filename;
   $file['type']     = 'image/gif';
   $file['size']     = filesize( $upload_path . $hashed_filename );

   // upload file to server
   // @new use $file instead of $image_upload
   $file_return      = wp_handle_sideload( $file, array( 'test_form' => false ) );
	$filename = $file_return['file'];
   $attachment = array(
      'post_mime_type' => $file_return['type'],
      'post_title' => preg_replace('/\.[^.]+$/', '', basename($filename)),
      'post_content' => '',
      'post_status' => 'inherit',
      'guid' => $upload_dir['url'] . '/' . basename($filename)
   );
   $attach_id = wp_insert_attachment( $attachment, $filename, $selfieID );
   require_once(ABSPATH . 'wp-admin/includes/image.php');
   $attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
   wp_update_attachment_metadata( $attach_id, $attach_data );
   $res = set_post_thumbnail($selfieID, $attach_id);
   add_post_meta($selfieID, "_thumbnail_id", $attach_id, true);
   //update_field("thumbnail_id",$attach_id ,$selfieID);

   // $success = wp_mail($to, $subject, $message, $headers, $attachment);

   // exit;
   if ($success) {
      echo json_encode(array('success' => __('1', "mba") , 'selfie'=>$selfieID ));
   } else {
      echo json_encode(array('success' => __('0', "mba"), 'selfie'=>$selfieID ));
   }
   exit;
}

add_action('wp_ajax_nopriv_gif_submit', 'gif_submit', 100);
add_action('wp_ajax_gif_submit', 'gif_submit', 100);


function email_submit() {
	$data = json_decode(file_get_contents('php://input'), true);
	$selfieId = $data['selfieId'];
	$emails = $data['emails'];
	foreach($emails as $email) {
			add_row('emails',[ "email" => $email ],$selfieId);
	}
	$email = 'enquiries@popsicleproductions.net'; 
	$subject = 'New wefie is submited';
	$body = 'Hey, new wefie is submited. View it at https://wefie.wunderfauks.com/wp/wp-admin/post.php?post='.$selfieId.'&action=edit';
	$headers = array('Content-Type: text/html; charset=UTF-8');
	wp_mail($email, $subject, $body, $headers);
	
		
}

add_action('wp_ajax_nopriv_email_submit', 'email_submit', 100);
add_action('wp_ajax_email_submit', 'email_submit', 100);




function send_email() {
	$selfieId = $_GET['selfieId'];
	$fields = get_fields($selfieId);
	$emails = $fields['emails'];

	$date = intval(get_the_date('d',$selfieId));
	if($date > 7) {
$subject = "<Happy Sharing Wefie Booth> Your Happy Sharing Wefie, Plus a 50% OFF Happy Sharing Box® Deal.";
	$body = "<p>Thank you for joining us at our Happy Sharing Wefie booth!</p>
	<p>Fun moments are meant to be shared. So why not post your wefie on social media using #MCDNationalSharingDay?</p>
	<p>Meanwhile, don’t forget to enjoy our limited-time 11.11 McDelivery National Sharing Day promotion. Get 50% OFF Happy Sharing Box A using the promo code <SHAREHSBA> or 50% OFF Happy Sharing Box B with &lt;SHAREHSBB&gt;.</p>
	<p>This promotion is valid from 11–15 November 2019, after breakfast hours, while stocks last.</p>
	<p>Once again, thank you for being part of McDelivery® National Sharing Day!</p>
	<p>Sincerely,</p>
	<p>Team McDelivery</p><br/><br/>
	<p>NOTE: This is an automated email.  Please do not reply.</p>
	";
	}else {
		$subject = "<Happy Sharing Wefie Booth> 50% OFF Happy Sharing Box® Promo Code Just For You! ";
	$body = "<p>Thank you for sharing your wefie with us through our Happy Sharing Wefie booth!</p>
	<p>Fun moments are meant to be shared. So why not post your wefie on social media using #MCDNationalSharingDay?</p>
	<p>As a token of appreciation for your participation, here’s your promo code for your next McDelivery order:</p>
	<p>&lt;EARLYHSBA&gt; – Use it to enjoy 50% OFF Happy Sharing Box A</p>
	<p>This promo code is only redeemable for orders placed and delivered in Singapore via www.mcdelivery.com.sg or McDelivery iOS app and Android app between 9 November – 15 November 2019, after breakfast hours, while stocks last. Promo code can only be used once with the email address you’ve registered.</p>
	<p>Once again, thank you for being part of McDelivery® National Sharing Day!</p>
	<p>Sincerely,</p>
	<p>Team McDelivery</p><br/><br/>
	<p>NOTE: This is an automated email.  Please do not reply.</p>
	";
	}
	
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
		
	$media = get_attached_media('image', $selfieId);

	$images = $media[$selfieId+1];

	$image = get_attached_file($images->ID, 'full');
	$attachment = array($image);

	add_post_meta($selfieId, 'email_sent', 1);
	
	for($i=0;$i<count($emails);$i++) {
		$to = $emails[$i]['email'];
		wp_mail($to, $subject, $body, $headers, $attachment);
	}
	wp_redirect("https://wefie.wunderfauks.com/wp/wp-admin/post.php?post=$selfieId&action=edit");
	
}

add_action('wp_ajax_nopriv_send_email', 'send_email', 100);
add_action('wp_ajax_send_email', 'send_email', 100);



function add_your_meta_box(){

add_meta_box('your-metabox-id', 'Send Email', 'function_of_metabox', 'selfie', 'side', 'high');}

add_action('add_meta_boxes', 'add_your_meta_box'); 

function function_of_metabox()
{ $postId = get_the_ID();
 $sent = get_post_meta( $postId, 'email_sent', true );
 
?>

<a href="/wp/wp-admin/admin-ajax.php?action=send_email&selfieId=<?php echo $postId ?>" class="button button-primary button-large" >Send Now</a>

<?php if($sent) { ?>
<p style="color: red">
	You've already sent out this gif before
</p>
<?php }else { ?>
	<p>
		This gif has not been sent yet
</p>
<?php } ?>

<?php }


function gif_1() {
	header('Access-Control-Allow-Origin: *');
   date_default_timezone_set('Asia/Singapore');

   $count_posts = wp_count_posts('selfie');
   $selfieTitle = "Selfie_" . $count_posts->publish;

   $selfieArr = array(
      'post_title' => $selfieTitle,
      'post_type' => 'selfie',
      'post_status' => 'publish'
   );
   $newSelfie = wp_insert_post($selfieArr);
   $selfieID = intval($newSelfie);
	echo json_encode(array('success' => __('1', "mba") , 'selfie'=>$selfieID ));
	exit;
}
add_action('wp_ajax_nopriv_gif_1', 'gif_1', 100);
add_action('wp_ajax_gif_1', 'gif_1', 100);


function gif_2() {
	$selfieID = $_POST['selfieID'];
	$img = isset($_POST['img']) ? ($_POST['img']) : "";

   $upload_dir       = wp_upload_dir();
   $upload_path      = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

   $img = str_replace('data:image/gif;base64,', '', $img);
   $img = str_replace(' ', '+', $img);
	

   $decoded          = base64_decode($img) ;
   $filename         = time().'.gif';
   $hashed  = md5( $filename . microtime() );
   $hashed_filename = $hashed . '_' . $filename;
   $image_upload     = file_put_contents( $upload_path . $hashed_filename, $decoded );
   if( !function_exists( 'wp_handle_sideload' ) ) {
      require_once( ABSPATH . 'wp-admin/includes/file.php' );
   }
   if( !function_exists( 'wp_get_current_user' ) ) {
      require_once( ABSPATH . 'wp-includes/pluggable.php' );
   }

   // @new
   $file             = array();
   $file['error']    = '';
   $file['tmp_name'] = $upload_path . $hashed_filename;
   $file['name']     = $hashed_filename;
   $file['type']     = 'image/gif';
   $file['size']     = filesize( $upload_path . $hashed_filename );

   // upload file to server
   // @new use $file instead of $image_upload
   $file_return      = wp_handle_sideload( $file, array( 'test_form' => false ) );
	$filename = $file_return['file'];
   $attachment = array(
      'post_mime_type' => $file_return['type'],
      'post_title' => preg_replace('/\.[^.]+$/', '', basename($filename)),
      'post_content' => '',
      'post_status' => 'inherit',
      'guid' => $upload_dir['url'] . '/' . basename($filename)
   );
   $attach_id = wp_insert_attachment( $attachment, $filename, $selfieID );
   require_once(ABSPATH . 'wp-admin/includes/image.php');
   $attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
   wp_update_attachment_metadata( $attach_id, $attach_data );
   $res = set_post_thumbnail($selfieID, $attach_id);
   add_post_meta($selfieID, "_thumbnail_id", $attach_id, true);
   
   exit;
}

add_action('wp_ajax_nopriv_gif_2', 'gif_2', 100);
add_action('wp_ajax_gif_2', 'gif_2', 100);



function hipwee_add_action_button($actions, $post) {
	if (get_post_type() == 'visitor_count'){
		if(have_rows('visitor_rows', $post->ID)){
			$url = add_query_arg(
				array(
					'post_id' => $post->ID,
					'my_action' => 'custom_export_post'
				)
			);
			$actions['export'] = '<a href="'.esc_url($url).'" target="_blank">Export Analytics</a>';
		}
	}
	return $actions;
}

add_filter('page_row_actions', 'hipwee_add_action_button', 10, 2);
add_action('admin_init', 'custom_export_function');
function custom_export_function(){
	if (isset($_REQUEST['my_action']) && 'custom_export_post' == $_REQUEST['my_action']){
		$postId = $_REQUEST['post_id'];
		$fileName = 'Analytics-'.get_the_title($postId).'.csv';
		if (have_rows('visitor_rows', $postId)) {
			$num=0;
			while(have_rows('visitorrow1', $postId)):
				the_row();
				$data[$num]['Frame'] = get_sub_field('frame1');
				$data[$num]['Time'] = get_sub_field('time1');
				$data[$num]['Action'] = get_sub_field('description1');
				$num++;
			endwhile;
			
			header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
			header("Content-Description: File Transfer");
			header("Content-type: text/csv");
			header("Content-Disposition: attachment; filename={$fileName}");
			header("Expires: 0");
			header("Pragma: public");
			$fh = @fopen('php://output', 'w');
			fputs($fh, "\xEF\xBB\xBF");
			fputcsv($fh, array('Frame', 'Time', 'Action'));
			foreach($data as $fields){
				fputcsv($fh, $fields);
			}
			fclose($fh);
			exit;
		}
		exit;
	}
}


?>
