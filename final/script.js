// Récupération de l'élément canvas
var canvas = document.getElementById("confetti");

// On vérifie que le navigateur supporte bien les canvas
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");

  // On définit les dimensions de notre canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // On définit la taille et la vitesse des confettis
  var confettiSize = 15;
  var confettiSpeed = 2;

  // On crée un tableau pour stocker les confettis
  var confettiArray = [];

  // On crée une fonction pour générer les confettis
  function generateConfetti() {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var angle = Math.random() * 360;
    var radians = angle * (Math.PI / 180);
    var velocity = Math.random() * confettiSpeed + 1;
    var color = Math.floor(Math.random() * 360 / 10) * 10;
    confettiArray.push({x: x, y: y, radians: radians, velocity: velocity, color: color});
  }

  // On crée une fonction pour dessiner les confettis
  function drawConfetti() {
    for (var i = 0; i < confettiArray.length; i++) {
      ctx.beginPath();
      ctx.moveTo(confettiArray[i].x, confettiArray[i].y);
      ctx.lineTo(confettiArray[i].x + confettiSize * Math.cos(confettiArray[i].radians), confettiArray[i].y + confettiSize * Math.sin(confettiArray[i].radians));
      ctx.strokeStyle = "hsl(" + confettiArray[i].color + ", 100%, 50%)";
      ctx.stroke();
      confettiArray[i].x += confettiArray[i].velocity * Math.cos(confettiArray[i].radians);
      confettiArray[i].y += confettiArray[i].velocity * Math.sin(confettiArray[i].radians);
      confettiArray[i].radians += Math.random() * 0.05 - 0.025;
    }
  }

  // On crée une fonction pour mettre à jour l'animation
  function updateAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i <confettiArray.length; i++) {
drawConfetti();
if (confettiArray[i].y > canvas.height) {
confettiArray.splice(i, 1);
}
}
requestAnimationFrame(updateAnimation);
}

// On lance l'animation
requestAnimationFrame(updateAnimation);

// On génère des confettis toutes les 50 millisecondes
setInterval(generateConfetti, 50);
}

