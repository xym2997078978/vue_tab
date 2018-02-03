class Tab {
    constructor (title, content) {
        this.title = title;
        this.content = content;
        this.init();
    }
    init () {
        this.createWrap();
    }
    createWrap () {
        let wrap = document.createElement('div');
        let title = this.createTitle();
        let content = this.createContent();
        wrap.className = 'wrap';
        document.body.appendChild(wrap);
        wrap.appendChild(title);
        wrap.appendChild(content);
        this.addEvent();
    }
    createTitle () {
        let ul = document.createElement('ul');
        this.title.map((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        });
        return ul;
    }
    createContent () {
        let ol = document.createElement('ol');
        this.content.map((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ol.appendChild(li);
        });
        return ol;
    }
    addEvent () {
        let tlis = document.querySelectorAll('ul li');
        let clis = document.querySelectorAll('ol li');
        tlis[0].className = 'bg';
        [...tlis].map((item, index) => {
            item.addEventListener('click', (event) => {
                [...tlis].map((item, index) => {
                    item.className = '';
                });
                [...clis].map((item, index) => {
                    item.style.display = 'none';
                });
                item.className = 'bg';
                clis[index].style.display = 'block';
            });
        });
    }
}
export default Tab;