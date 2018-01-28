<?php

/**
 * Extension Manager/Repository config file for ext "travelmates".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'travelMates',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99',
            'bootstrap_package' => '9.1.0-9.1.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            '1991\\Travelmates\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Dixit Thakur',
    'author_email' => 'dixitt1991@gmail.com',
    'author_company' => '1991',
    'version' => '1.0.0',
];
