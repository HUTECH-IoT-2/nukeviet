<?php

/**
 * @Project new_module 1.x
 * @Author HUTECH-IOT-2
 * @Createdate THU, 24 Mar 2022 00:00:00 GMT
 */

if (!defined('NV_IS_FILE_ADMIN'))
    die('Stop!!!');



$xtpl = new XTemplate($op.'.tpl', NV_ROOTDIR . '/themes/' . $global_config['module_theme'] . '/modules/' . $module_file);
$xtpl->assign('LANG', $lang_module);
$xtpl->assign('GLANG', $lang_global);

$xtpl->parse('main');
$contents = $xtpl->text('main');

include NV_ROOTDIR . '/includes/header.php';
echo nv_admin_theme($contents);
include NV_ROOTDIR . '/includes/footer.php';
