var mySettings = {
    resizeHandle: false,
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:  	{keepDefault:true},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [
		{name:'Жирний', key:'B', openWith:'<b>', closeWith:'</b>', className: 'btnBold'},
		{name:'Похилий', key:'I', openWith:'<i>', closeWith:'</i>', className: 'btnItalic'},
		{name:'Підкреслений', key:'U', openWith:'<u>', closeWith:'</u>', className: 'btnUnderline'},
		{name:'Закреслений', key:'S', openWith:'<s>', closeWith:'</s>', className: 'btnStroke'},
		{name:'Список', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>', className: 'btnOl'},
		{name:'Нумерований список', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>', className: 'btnUl'},
        {name:'Посилання', key:'L', openWith:'<a target="_blank" href="[![Адреса посилання:!:http://]!]">', closeWith:'</a>', placeHolder:'Заголовок посилання...', className: 'btnLink'}
	]
};
