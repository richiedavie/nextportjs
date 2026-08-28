const gsap = require("gsap");
const tween = gsap.to({}, { duration: 1, x: 100 });
tween.kill();
