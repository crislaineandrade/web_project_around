
export default class Section {
  constructor({items, renderer}, containerSelector) {
   this._vetorItems = items;
    this._render = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderer() {

    this._vetorItems.forEach((item) => {
      this._render(item);


      //this.addItem(elemento criado aqui dentro para gerar o cartao)


    })



    //renderiza todos os elementos QUE NESSE CASO É O CARTAO
    //FAZER FOR EACH PARA CADA CARTAO
    //E CHAMAR O THIS.RENDER

  }

  addItem(card) {
    this._containerSelector.append(card)
    //pega o elemento DOM e adciona ao container

  }

  addNewItem(card) {
    this._containerSelector.prepend(card)
    //pega o elemento DOM e adciona ao container

  }


}




