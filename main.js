const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__btn');

// 딜리트 시 삭제
// 입력 후 초기화
// 스크롤
// 체크 박스

// 폰트
// 체크를 누르면 체크가 생기게
// 체크를 누르면 글자가 빗금

function addItem() {
    // 1. 아이템을 입력받기
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 아이템 생성 (텍스트 , 삭제 버튼)
    const addedItem = createItem(text);

    // 3. 아이템을 items에 붙이기
    items.appendChild(addedItem);

    // 4. 새로 추가된 아이템으로 스크롤링
    addedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })

    // 5. input 값을 초기화 + 포커스
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'item__check');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    // 체크 박스 클릭했을 때
    checkBtn.addEventListener('click', () => {
        checkBtn.style.color = 'blue';
        name.style.textDecoration = 'line-through';
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    buttons.appendChild(checkBtn);
    buttons.appendChild(deleteBtn);

    item.appendChild(name);
    item.appendChild(buttons);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    return itemRow;
}

addBtn.addEventListener('click', () => {
    addItem();
});

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});