const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const rusWords = document.querySelector('.rus__words');
const translitWords = document.querySelector('.translit__words');
const clrBtn = document.querySelector('.clear__btn');

const translit = (word) => {
  let result = '';
  const converter = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sch',
    ь: '',
    ы: 'y',
    ъ: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',

    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'E',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Sch',
    Ь: '',
    Ы: 'Y',
    Ъ: '',
    Э: 'E',
    Ю: 'Yu',
    Я: 'Ya',
  };
  for (let i = 0; i < word.length; i++) {
    if (converter[word[i]] == undefined) {
      result += word[i];
    } else {
      result += converter[word[i]];
    }
  }
  return result;
};

const addWord = () => {
  const newRusStroke = document.createElement('div');
  const newTranslitStroke = document.createElement('div');
  const newRusWord = document.createElement('span');
  const newTranslitWord = document.createElement('span');
  const newIndex = document.createElement('span');
  const delBtn = document.createElement('button');
  const delImg = document.createElement('img');

  delImg.src = './icons/iconMini.svg';
  delBtn.className = 'del';
  newRusStroke.className = 'rus__column';
  newTranslitStroke.className = 'translit__column';
  newRusWord.className = 'word';
  newTranslitWord.className = 'word';
  newIndex.className = 'index';
  delBtn.style.backgroundImage = './icons/iconMini.svg';

  if (input.value.length > 5) {
    newRusWord.innerText = `${input.value.slice(0, 5)}...`;
    newTranslitWord.innerText = `${translit(input.value).slice(0, 5)}...`;
    const tooltipRus = document.createElement('div');
    const tooltip = document.createElement('div');
    tooltipRus.className = 'tooltip';
    tooltip.className = 'tooltip';
    tooltipRus.innerText = input.value;
    tooltip.innerText = translit(input.value);
    newRusWord.addEventListener('mouseenter', () => {
      tooltipRus.style.display = 'block';
    });
    newRusWord.addEventListener('mouseleave', () => {
      tooltipRus.style.display = 'none';
    });
    newTranslitWord.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });
    newTranslitWord.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    newRusWord.appendChild(tooltipRus);
    newTranslitWord.appendChild(tooltip);
  } else {
    newRusWord.innerText = input.value;
    newTranslitWord.innerText = translit(input.value);
  }
  if (input.value.length !== 0) {
    rusWords.appendChild(newRusStroke);
    newRusStroke.appendChild(newRusWord);
    newRusStroke.prepend(newIndex);
    translitWords.appendChild(newTranslitStroke);
    newTranslitStroke.appendChild(newTranslitWord);
    newTranslitStroke.appendChild(delBtn);
  }
  delBtn.appendChild(delImg);
  input.value = '';
  const updateIndex = () => {
    const allIndex = document.querySelectorAll('.index');
    allIndex.forEach((el, index) => { el.innerText = index + 1; });
  };
  delBtn.addEventListener('click', () => {
    newTranslitStroke.remove();
    newRusStroke.remove();
    updateIndex();
  });
  clrBtn.addEventListener('click', () => {
    const rusColumn = document.querySelectorAll('.rus__column');
    const translitColumn = document.querySelectorAll('.translit__column');
    rusColumn.forEach((item) => { item.remove(); });
    translitColumn.forEach((item) => { item.remove(); });
  });
  const allIndex = document.querySelectorAll('.index');
  newIndex.innerText = allIndex.length;
};

btn.addEventListener('click', addWord);
input.addEventListener('click', () => { input.value = ''; });
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addWord();
  }
});
