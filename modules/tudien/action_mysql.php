<?php

/**
 * @Project new_module 1.x
 * @Author HUTECH-IOT-2
 * @Createdate THU, 24 Mar 2022 00:00:00 GMT
 */
if (!defined('NV_IS_FILE_MODULES')) {
    exit('Stop!!!');
}

$sql_drop_module = [];

$sql_drop_module[] = 'DROP TABLE IF EXISTS ' . $db_config['prefix'] . '_' . $lang . '_' . $module_data . '_tudien';

$sql_create_module = $sql_drop_module;

$sql_create_module[] = 'CREATE TABLE ' . $db_config['prefix'] . '_' . $lang . '_' . $module_data . "_tudien (
  id smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  word_en varchar(100) NOT NULL,
  word_vn varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM";