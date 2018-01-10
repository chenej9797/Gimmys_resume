
const lang_btn = document.querySelector('.languages');
const Title = document.querySelectorAll('.title');
const Name = document.querySelector('.name');
const Career = document.querySelector('.career');
const Title_experience = document.querySelector('.title_experience');
const Title_achievement = document.querySelector('.title_achievement');
const Title_education = document.querySelector('.title_education');
const Title_programs = document.querySelector('.title_programs');
const Title_interest = document.querySelector('.title_interest');

let btn_status = 'lang_en';

function lang_toggle(lang) {
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

	}
	console.log(btn_status);
}

lang_btn.addEventListener('click', lang_toggle);