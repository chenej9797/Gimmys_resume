
const lang_btn = document.querySelector('.languages');
const Title = document.querySelectorAll('.title');
const Name = document.querySelector('.name');
const Career = document.querySelector('.career');
const Title_experience = document.querySelector('.title_experience');
const Title_achievement = document.querySelector('.title_achievement');
const Title_education = document.querySelector('.title_education');
const Title_programs = document.querySelector('.title_programs');
const Title_interest = document.querySelector('.title_interest');
const Autobiography = document.querySelector('.autobiography');

const btn_autobiography = document.querySelector('.other_link_autobiography');
const btn_back = document.querySelector('.back_btn');
const contents = document.querySelectorAll('.content');
let btn_autobiography_toggle = false;
let en_height = Autobiography.getBoundingClientRect().height;
let zh_height = Autobiography.getBoundingClientRect().height;

let btn_status = 'lang_en';

function lang_toggle(lang) {
	const a_height = Autobiography.getBoundingClientRect().height;
	if (btn_status === 'lang_zh') {
		btn_status = 'lang_en';
		lang_btn.classList.remove('lang_toggle');
		Title.forEach(title => { title.classList.remove('title_toggle');});
		Name.innerHTML=window.I18N.en.name;
		Career.innerHTML=window.I18N.en.career;
		Title_experience.innerHTML=window.I18N.en.title.title_experience;
		Title_achievement.innerHTML=window.I18N.en.title.title_achievement;
		Title_education.innerHTML=window.I18N.en.title.title_education;
		Title_programs.innerHTML=window.I18N.en.title.title_programs;
		Title_interest.innerHTML=window.I18N.en.title.title_interest;
		Autobiography.innerHTML=window.I18N.en.autobiography;
		en_height = Autobiography.getBoundingClientRect().height;
		if (btn_autobiography_toggle) {
			document.querySelector('.autobiography_active').style.height = (en_height+ 100)+'px';
		}
	} else {
		btn_status = 'lang_zh';
		lang_btn.classList.add('lang_toggle');
		Title.forEach(title => { title.classList.add('title_toggle');});
		Name.innerHTML=window.I18N.zh.name;
		Career.innerHTML=window.I18N.zh.career;
		Title_experience.innerHTML=window.I18N.zh.title.title_experience;
		Title_achievement.innerHTML=window.I18N.zh.title.title_achievement;
		Title_education.innerHTML=window.I18N.zh.title.title_education;
		Title_programs.innerHTML=window.I18N.zh.title.title_programs;
		Title_interest.innerHTML=window.I18N.zh.title.title_interest;
		Autobiography.innerHTML=window.I18N.zh.autobiography;
		zh_height = Autobiography.getBoundingClientRect().height;
		if (btn_autobiography_toggle) {
			document.querySelector('.autobiography_active').style.height = (zh_height+100)+'px';
		}
	}
	console.log('en:'+en_height, 'zh:'+zh_height);
}

function autobiography_click() {
	const a_height = Autobiography.getBoundingClientRect().height;
	btn_autobiography_toggle = true;
	console.log(btn_autobiography_toggle);
	document.querySelector('.section_one').classList.add('section_autobiography');
	document.querySelector('.contact').classList.add('hidden');
	document.querySelector('.autobiography_container').classList.add('autobiography_active');
	document.querySelector('.autobiography_active').style.height = (a_height + 100) + 'px';
	document.querySelector('.other_link').classList.add('other_link_active');
	contents.forEach(content => content.classList.add('content_hidden'));
}

function back_click() {
	btn_autobiography_toggle = false;
	console.log(btn_autobiography_toggle);
	document.querySelector('.section_one').classList.remove('section_autobiography');
	document.querySelector('.contact').classList.remove('hidden');
	document.querySelector('.autobiography_active').style.height = 0 +  'px';
	document.querySelector('.autobiography_container').classList.remove('autobiography_active');
	document.querySelector('.other_link').classList.remove('other_link_active');
	contents.forEach(content => content.classList.remove('content_hidden'));
	contents.forEach(content => content.classList.remove('content_none'));
}

function autobiography_click_active(e) {
	if (e.propertyName.includes('font-size')) {
		contents.forEach(content => content.classList.add('content_none'));
	}
}

function back_click_active(e) {
	console.log(e.propertyName);
	// if (e.propertyName.includes('font-size')) {
	// 	contents.forEach(content => content.classList.remove('content_none'));
	// }
}
lang_btn.addEventListener('click', lang_toggle);
btn_autobiography.addEventListener('click', autobiography_click);
// btn_autobiography.addEventListener('transitionend', autobiography_click_active);
btn_back.addEventListener('click', back_click);
