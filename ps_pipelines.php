<?php

if (!defined('_ECRIRE_INC_VERSION')) {
  return;
}

function ps_insert_head_css($flux) {
  if (
		$css = find_in_path('lib/photoswipe/dist/photoswipe.css')
		and $skin = find_in_path('lib/photoswipe/dist/default-skin/default-skin.css')
	) {
		$flux .= '<link rel="stylesheet" href="'.$css.'" type="text/css" />';
		$flux .= '<link rel="stylesheet" href="'.$skin.'" type="text/css" />';
  }

	return $flux;
}


function ps_insert_head($flux) {
	if (
		$core = find_in_path('lib/photoswipe/dist/photoswipe.min.js')
		and $ui = find_in_path('lib/photoswipe/dist/photoswipe-ui-default.min.js')
		// and $init = find_in_path('dist/js/photoswipe-init.js')
	) {
		$flux .= '<script src="'.$core.'" type="text/javascript"></script>';
		$flux .= '<script src="'.$ui.'" type="text/javascript"></script>';
		// le script d'init n'est pas activé par le plugin.
		// $flux .= '<script src="'.$init.'" type="text/javascript"></script>';
	}
  return $flux;
}
