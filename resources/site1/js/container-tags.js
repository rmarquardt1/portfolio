var UDM = {};
var isTest = false;

// scoop shop codes from bjnt:shopDetails
var bnj_scoopshopga = bnj_scoopshopga || "";

// move this to maven properties file
if (document.domain.indexOf('dev') >= 0 || document.domain.indexOf('qa') >= 0
		|| document.domain.indexOf('localhost') >= 0) {
	isTest = true;
}

if (lang_locale == "en_US") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'US';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-2392172-1,UA-26584030-1' + bnj_scoopshopga;
	} else {
		UDM.gid = '94faea864b5b5469523be0f6ea4448fe';
		UDM.gaa = 'UA-2392172-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = 'benjerry.com';
	}
} else if (lang_locale == "en_GB") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'UK';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-4,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '472bb1f2dd6eda5f841c9a23757212c1';
		UDM.gaa = 'UA-4023249-2,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = 'benjerry.co.uk';
	}
} else if (lang_locale == "en_IE") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Ireland';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-2,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '4b649aa299d36abb03cd73dbd8e07dd9';
		UDM.gaa = 'UA-26584030-1,UA-4023249-6,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = 'benjerry.ie';
	}
} else if (lang_locale == "de_DE") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Germany';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-7,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '04b5704426f47f19fe6538c6b4c8d4f0';
		UDM.gaa = 'UA-30615039-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.de';
	}
} else if (lang_locale == "ja_JP") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Japan';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-15,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '09b863b3e0125ea80d4d716081102516';
		UDM.gaa = 'UA-29204421-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.jp';
	}
} else if (lang_locale == "en_AU") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Australia';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-23,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '855d808bc6d8d6839f1f47cf5ca37b1e';
		UDM.gaa = 'UA-9894901-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benandjerry.com.au';
	}
} else if (lang_locale == "da_DK") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Denmark';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-16,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '51ccb9e3e987c43fb5e147782cce84c9';
		UDM.gaa = 'UA-30601990-1,UA-26584030-1,UA-9235250-4,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.dk';
	}
} else if (lang_locale == "pt_PT") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Portugal';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-6,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '791c18e9792d2e81492a867d0aa8fb14';
		UDM.gaa = 'UA-28093863-1,UA-26584030-1,UA-18855823-21,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benandjerrys.pt';
	}
} else if (lang_locale == "de_CH" || lang_locale == "fr_CH") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Switzerland';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-19,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '0db928edb0e8f184844726b8cf653ee7';
		UDM.gaa = 'UA-30613948-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.ch';
	}
} else if (lang_locale == "fr_FR") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'France';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-3,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '1df7bb856b4abf9db081e9c017b96222';
		UDM.gaa = 'UA-12159578-1,UA-12327585-1,UA-29774504-1,UA-26584030-1,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.fr';
	}
} else if (lang_locale == "de_AT") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Austria';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-17,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '505dc441a5af835d58d3b98a0d2fff38';
		UDM.gaa = 'UA-30612962-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.at';
	}
} else if (lang_locale == "es_ES") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Spain';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-9,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '5d8584e1ee9ad76a574b414fe7e3b892';
		UDM.gaa = 'UA-30617002-1,UA-26584030-1,UA-9768198-1,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.ben-jerrys.es';
	}
} else if (lang_locale == "en_SG") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Singapore';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-2392172-1,UA-26584030-1,UA-27583540-1' + bnj_scoopshopga;
	} else {
		UDM.gid = '7946eb7c2336c384cb116782cfb02b68';
		UDM.gaa = 'UA-27583540-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.com.sg';
	}
} else if (lang_locale == "nl_NL") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Netherlands';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-5,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '1d53c9c154547a49de3dc6b398098d56';
		UDM.gaa = 'UA-26584030-1,UA-30612756-1,UA-8384880-1,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.nl';
	}
} else if (lang_locale == "no_NO") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Norway';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-21,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = 'b2b740dad0fb78545aa1af85d19c0928';
		UDM.gaa = 'UA-30612317-1,UA-26584030-1,UA-9235250-3,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.no';
	}
} else if (lang_locale == "it_IT") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Italy';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-8,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = 'a4fab9d9073c1c22ec492186420f99d0';
		UDM.gaa = 'UA-30613349-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benjerry.it';
	}
} else if (lang_locale == "sv_SE") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Sweden';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-22,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = 'c98b0e2619e5c0560b1027581d182f96';
		UDM.gaa = 'UA-30611322-1,UA-26584030-1,UA-9235250-1,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.se';
	}
} else if (lang_locale == "fi_FI") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Finland';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-20,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '2c6d130fc23f9b583f973129a037f267';
		UDM.gaa = 'UA-30612740-1,UA-26584030-1,UA-9235250-2,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.fi';
	}
} else if (lang_locale == "el_GR") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Greece';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-11,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '432426043daab2a99b030ab470fd1401';
		UDM.gaa = 'UA-27974172-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.ben-jerry.gr';
	}
} else if (lang_locale == "cs_CZ") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Czech Republic';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-10,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '61a1db8d167554dff42ddef8a42ccf23';
		UDM.gaa = 'UA-21313082-1,UA-26584030-1,UA-35586169-1' + bnj_scoopshopga;
		UDM.dom = '.benandjerry.cz';
	}
} else if (lang_locale == "nl_BE") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Belgium';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-18,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = 'b193d798dcec249b957461b50b40ef3e';
		UDM.gaa = 'UA-30613077-1,UA-26584030-1,UA-8384880-2,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benjerry.be';
	}
} else if (lang_locale == "en_CA") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Canada';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-12,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = 'ce3d0e12cb001c6468f890f41da9da0f';
		UDM.gaa = 'UA-28099541-1,UA-26584030-1,UA-1276512-16,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benandjerrys.ca';
	}
} else if (lang_locale == "es_MX") {
	UDM.localbrand = 'Ben & Jerry\'s';
	UDM.country = 'Mexico';
	if (isTest) {
		UDM.gid = 'e2fb0e2a3c57735b4e8b49228bac29e4';
		UDM.gaa = 'UA-45786155-24,UA-35586169-2' + bnj_scoopshopga;
	} else {
		UDM.gid = '90556f8aedf741e69ca53d5662574895';
		UDM.gaa = 'UA-28131491-1,UA-26584030-1,UA-6655912-7,UA-35586169-1'
				+ bnj_scoopshopga;
		UDM.dom = '.benandjerrys.com.mx';
	}
}
UDM.globalbrand = 'Ben & Jerry\'s';
UDM.category = 'Refreshment';
UDM.channel = 'Brand Site';
UDM.sitetype = 'Non-Avinash';
UDM.evq = [];
(function(document, u) {
	if (isTest) {
		u = ('https:' == document.location.protocol ? 'https://' : 'http://')
				+ 'wa-uat.unileversolutions.com';
	} else {
		u = ('https:' == document.location.protocol ? 'https://secure-'
				: 'http://')
				+ 'wa-na.unileversolutions.com';
	}
	var a = document.createElement('script');
	a.type = 'text/javascript';
	a.async = 'async';
	a.src = u + '/ct/' + UDM.gid + '/u.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(a, s);
})(document);

function addUDMEvent(action, label, value) {
	if (UDM != null) {
		UDM.evq.push([ 'trackEvent', action, label, value ]);
	}
}