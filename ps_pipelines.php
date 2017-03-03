<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

function ps_insert_head_css($flux) {
  $flux .= '<link rel="stylesheet" href="'.find_in_path('lib/photoswipe/photoswipe.css').'" type="text/css" />';
  $flux .= '<link rel="stylesheet" href="'.find_in_path('lib/photoswipe/default-skin/default-skin.css').'" type="text/css" />';
  return $flux;
}


function ps_insert_head($flux) {
  $flux .= '<script src="'.find_in_path('lib/photoswipe/photoswipe.min.js').'" defer></script>';
  $flux .= '<script src="'.find_in_path('lib/photoswipe/photoswipe-ui-default.min.js').'" defer></script>';
  $flux .= '<script src="'.find_in_path('js/photoswipe-init.min.js').'" defer></script>';
  return $flux;
}
