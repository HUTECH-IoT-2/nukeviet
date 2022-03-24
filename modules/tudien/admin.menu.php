<?php

/**
 * @Project new_module 1.x
 * @Author HUTECH-IOT-2
 * @Createdate THU, 24 Mar 2022 00:00:00 GMT
 */

if (!defined('NV_ADMIN'))
    die('Stop!!!');

$submenu['addtudien'] = $lang_module['addtudien'];
$submenu['listtudien'] = 'Danh sách';

$allow_func = array(
    'main',
    'addtudien',
    'listtudien'
);
