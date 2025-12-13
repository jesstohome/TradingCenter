
const langs = [
	{
		name:'English',
		value:'en'
	},
	{
		name:'ไทย',
		value:'th'
	},
	{
		name:'日本語',
		value:'jp'
	},
	{
		name:'한국어',
		value:'kor'
	},
	{
		name:'简体中文',
		value:'zh'
	},
	{
		name:'繁体中文',
		value:'hk'
	},
	{
		name:'Français',
		value:'fra'
	},
	{
		name:'Español',
		value:'spa'
	},
	{
		name:'Tiếng Việt',
		value:'vi'
	},
]

const currencys = [
	{
		name:'CNY',
		image:require('static/image/icon/national-flag-1.gif'),
		symbol:'￥'
	},
	{
		name:'HKD',
		image:require('static/image/icon/national-flag-3.gif'),
		symbol:'HK$'
	},
	{
		name:'USD',
		image:require('static/image/icon/national-flag-2.gif'),
		symbol:'$'
	},
	{
		name:'AED',
		image:require('static/image/icon/national-flag-4.gif'),
		symbol:'￥'
	}
]



export {
	langs,
	currencys
}