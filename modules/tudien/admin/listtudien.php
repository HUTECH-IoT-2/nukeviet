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

$xtpl = new XTemplate('listtudien.tpl', NV_ROOTDIR . '/themes/' . $global_config['module_theme'] . '/modules/' . $module_file);
$xtpl->assign('LANG', $lang_module);

// Retrieve branch data from database
$sql = 'SELECT * FROM ' . NV_PREFIXLANG . '_' . $module_data . '_tudien';

$_row = $db->query($sql);
/**
 * Check if the returned data field is empty 
 * then infer the data retrieval is having an error
**/
if(empty($_row)){
    
}
else{
    // var_dump($_row);
    /**
     * Launch the LOOP method on the thread side 
     * and pass the data list there
     */
    foreach($_row as $item){
        $xtpl->assign('TUDIEN', $item);
        $xtpl->parse('main.loop');
    }
}
/**
 * Pass current module path to theme to use for edit and delete method
 */
$xtpl->assign('FORM_ACTION', NV_BASE_ADMINURL . 'index.php?' . NV_LANG_VARIABLE . '=' . NV_LANG_DATA . '&amp;' . NV_NAME_VARIABLE . '=' . $module_name . '&amp;' . NV_OP_VARIABLE . '=' . $op);
$xtpl->parse('main');
$contents = $xtpl->text('main');

include NV_ROOTDIR . '/includes/header.php';
echo nv_admin_theme($contents);
include NV_ROOTDIR . '/includes/footer.php';