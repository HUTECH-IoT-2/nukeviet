<?php

/**
 * @Project NUKEVIET 4.x
 * @Author SWINGP (http://swingp.com.vn)
 * @Copyright (C) 2022 SWINGP. All rights reserved
 * @License GNU/GPL version 2 or any later version
 * @Createdate Mon, 3 Wed 2022 21:00:00 GMT
 */

if (!defined('NV_IS_FILE_ADMIN'))
    die('Stop!!!');

$page_title = $module_info['custom_title'];

//Convert TPL to type Xtemplate
$xtpl = new XTemplate($op.'.tpl', NV_ROOTDIR . '/themes/' . $global_config['module_theme'] . '/modules/' . $module_file);
$xtpl->assign( 'LANG', $lang_module );
$xtpl->assign('FORM_ACTION', NV_BASE_ADMINURL . 'index.php?' . NV_LANG_VARIABLE . '=' . NV_LANG_DATA . '&amp;' . NV_NAME_VARIABLE . '=' . $module_name . '&amp;' . NV_OP_VARIABLE . '=' . $op);

if($nv_Request->isset_request('submit', 'post')){
    $array = array(
        'word_en' => $array['address'] = $nv_Request->get_title('input_word_en', 'post', true),
        'word_vn' => $array['address'] = $nv_Request->get_title('input_word_vn', 'post', true)

    );
    $sql = 'INSERT INTO ' . NV_PREFIXLANG . '_' . $module_data . '_tudien (word_en, word_vn) VALUES (
        :word_en, :word_vn
    )';
    try{
        // Add data to fields and execute SQL statements
        $sth = $db->prepare($sql);
        $sth->bindParam(':word_en', $array['word_en'], PDO::PARAM_STR);
        $sth->bindParam(':word_vn', $array['word_vn'], PDO::PARAM_STR);
        $sth->execute();
    }catch (PDOException $e) {
    }
}
$xtpl->parse('main');
$contents = $xtpl->text('main');

include NV_ROOTDIR . '/includes/header.php';
echo nv_admin_theme($contents);
include NV_ROOTDIR . '/includes/footer.php';
