/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('triathlonicons', function(editor, url) {
	var triathlonIcons = [
		[["swim", 16], ["swim", 20], ["swim", 24], ["swim", 32], ["swim", 64], ["swim", 128], ["swim", 256]],
		[["bike", 16], ["bike", 20], ["bike", 24], ["bike", 32], ["bike", 64], ["bike", 128], ["bike", 256]],
		[["run",  16], ["run",  20], ["run",  24], ["run",  32], ["run",  64], ["run",  128], ["run",  256]]
	];

	function getHtml() {
		var triathlonIconsHtml;

		triathlonIconsHtml = '<table role="list" class="mce-grid">';

		tinymce.each(triathlonIcons, function(row) {
			triathlonIconsHtml += '<tr>';

			tinymce.each(row, function(icon) {
				var iconName = icon[0] + icon[1] + "x" + icon[1];
				
				var triathlonIconUrl = url + '/img/' + iconName + ".png";

				triathlonIconsHtml += '<td style="text-align: center;">'
													  + '<p style="text-align: center; font-size: 11px; margin-bottom: 3px;">' + icon[1] + 'px</p>'
													  + '<a href="#" data-mce-url="' + triathlonIconUrl + '" data-mce-alt="' + iconName + '" tabindex="-1" ' + 'role="option" aria-label="' + iconName + '" style="display: inherit; vertical-align: middle; width: 36px;  height: 36px; text-align: center;">'
													  + '<img src="' + triathlonIconUrl + '" style="max-width: 32px !important; max-height: 32px !important;" role="presentation" title="' + iconName + '" />'
													  + '</a></td>';
			});

			triathlonIconsHtml += '</tr>';
		});

		triathlonIconsHtml += '</table>';

		return triathlonIconsHtml;
	}

	editor.addButton('triathlonicons', {
		type: 'panelbutton',
		panel: {
			role: 'application',
			autohide: true,
			html: getHtml,
			onclick: function(e) {
				var linkElm = editor.dom.getParent(e.target, 'a');

				if (linkElm) {
					editor.insertContent(
						'<img src="' + linkElm.getAttribute('data-mce-url') + '" alt="' + linkElm.getAttribute('data-mce-alt') + '" />'
					);

					this.hide();
				}
			}
		},
		tooltip: 'Triathlon-Icons',
		icon: true,
		image: url + "/img/bike16x16.png"
	});
});
