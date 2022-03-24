<?php

/**
 * @Project new_module 1.x
 * @Author HUTECH-IOT-2
 * @Createdate THU, 24 Mar 2022 00:00:00 GMT
 */

if ( ! defined( 'NV_IS_MOD_TUDIEN' ) ) die( 'Stop!!!' );

$xtpl = new XTemplate( $op . '.tpl', NV_ROOTDIR . '/themes/' . $module_info['template'] . '/modules/' . $module_file );
$xtpl->assign( 'LANG', $lang_module );

$xtpl->parse( 'main' );
$ifram = $nv_Request->get_int( 'ifram', 'get', 0 );
$contents = $xtpl->text( 'main' );

include NV_ROOTDIR . '/includes/header.php';
if( $ifram )
{
    echo nv_site_theme( $contents, 0 );
}
else
{
    echo nv_site_theme( $contents );
}
include NV_ROOTDIR . '/includes/footer.php';