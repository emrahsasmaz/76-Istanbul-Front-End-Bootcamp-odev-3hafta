class Animal {
  constructor(name) {
    this.name = name;
  }
  action() {
    document.getElementById(this.actionSoundName).play();
  }
  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petNameTD.onclick = this.openImage.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
  }
  openImage() {
    var image = document.querySelector("img");
    image.setAttribute("src", this.src);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
    this.src = "gin.jpg";
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    this.src =
      "https://m.media-amazon.com/images/M/MV5BYzEzNjk2YTUtMTE4Yi00MmViLWI5ODgtNDhiNGQ4NzVhMzQ5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR193,0,630,1200_AL_.jpg";
  }
}

var Mila = new Cat("Gin");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
