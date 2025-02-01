window.addEventListener("load", function() {
  function positionOrbit(orbitSelector) {
    const orbit = document.querySelector(orbitSelector);
    const skills = orbit.querySelectorAll('.skill');
    const radius = orbit.offsetWidth / 2;  // Örneğin orbit-2 için 400/2 = 200

    skills.forEach((skill, index) => {
      const angle = (360 / skills.length) * index * (Math.PI / 180); // Açıyı radyana çeviriyoruz
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      // Skill elemanını, orbitin merkezine göre konumlandırıyoruz:
      skill.style.left = (radius + x - skill.offsetWidth / 2) + "px";
      skill.style.top = (radius + y - skill.offsetHeight / 2) + "px";
    });
  }

  positionOrbit('.orbit-1');
  positionOrbit('.orbit-2');
});
