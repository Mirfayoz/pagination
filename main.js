const list_items = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);


 about.innerHTML += `
        <div class="about"> 
        <div class="about__header">
        <div class="about__img"><img src="assets/img/aziza.png" alt=""></div>
        <div class="about__texts"> 
        <div class="about__texts--flex"> 
        <div class="about__texts--text">${patient.ism}</div>
        <div class="about__texts--img"> <img class="edit" src="assets/img/edit.png" alt=""><img src="assets/img/delete.png" alt=""></div>
        </div>
        <div class="about__data">
        <div class="about__data--info"> 
                    <div class="date"> <span class="span">Tashrif sanasi:</span>26/03/2021</div>
                    <div class="date"> <span>Davolangan bo’lim:</span>Nevrologiya</div>
                </div>
                <div class="about__data--info"> 
                    <div class="date"> <span class="span2">Chiqish sanasi:</span>26/03/2021</div>
                    <div class="date"> <span class="span3">Mas’ul shifokor:</span>Lazizov Odilbek</div>
                </div>
                </div>
                <div class="about__cause"> <span>Murojaat sababi: </span>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</div>
                </div>
            </div>
            </div>
            <div class="about__information"> 
            <div class="top">Shaxsiy ma’lumotlar</div>
            <div class="about__information--humans">
                <div class="about__information--first"> 
                <div class="first1"><span>Tug’ilgan sanasi</span>
                    <div class="sana">${patient.sana}</div>
                </div>
                <div class="first2"><span>Tug’ilgan hudud</span>
                    <div class="hudud">${patient.otdel1}</div>
                </div>
                <div class="first3"><span>Manzili</span>
                    <div class="manzil">${patient.manzil}</div>
                </div>
                </div>
                <div class="about__information--second">
                <div class="second1"><span>Oilaviy holat</span>${patient.otdel2}</div>
                <div class="second2"><span>Ma’lumoti</span>${patient.otdel3}</div>
                <div class="second3"><span>Bandlik holati</span>${patient.otdel4}</div>
                <div class="second4"><span>Ish joyi</span>${patient.ish}</div>
                </div>
                <div class="about__information--third">
                <div class="third1"><span>Telefon raqam</span>${patient.raqam}</div>
                <div class="third2"><span>Oila a’zolaridan telefon raqam</span>${patient.raqam2}</div>
                </div>
            </div>
            <div class="top2">Tibbiy ma’lumotlar</div>
            <div class="about__information--humans2">
                <div class="about__information--first2"> 
                <div class="first4"><span>Qon guruhi</span>I guruh</div>
                <div class="first5"><span>RH faktor</span>+</div>
                <div class="first6"><span>Sug’urta polisi</span>№1231123-AB</div>
                <div class="first7"><span>Sug’urta firmasi</span>MCHJ “Human Save Limited ”</div>
                </div>
                <div class="about__information--second2">
                <div class="second1"><span>Imtiyoz kategoriyasi</span>Order sohibi</div>
                <div class="second2"><span>Imtiyoz hujjati</span>№ 123123-AKategoriya A</div>
                <div class="second3"><span>Imtiyoz olingan sana</span>12/01/2020</div>
                </div>
                <div class="about__information--third2">
                <div class="third1"><span>Invalidlik</span>I guruh</div>
                <div class="third2"><span>Vazni</span>55 kg</div>
                <div class="third3"><span>Bo’yi</span>179 sm</div>
                <div class="third4"><span>Allergik reaksiyalar</span>Ko’p savollarga</div>
                </div>
            </div>
            </div>
        </div>
        `