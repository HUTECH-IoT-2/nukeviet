<?php

/**
 * @Project new_module 1.x
 * @Author HUTECH-IOT-2
 * @Createdate THU, 24 Mar 2022 00:00:00 GMT
 */

if (!defined('NV_ADMIN') or !defined('NV_MAINFILE'))
    die('Stop!!!');
	
$module_version = array(
		'name' => 'tudien',
		'modfuncs' => 'main,rss,sitemap',
		'is_sysmod' => 0,
		'virtual' => 1,
		'version' => '1.0.00',
		'date' => 'THU, 24 Mar 2022 00:00:00 GMT',
		'author' => 'HUTECH-IOT-2',
		'uploads_dir' => array($module_name),
		'note' => ''
	);