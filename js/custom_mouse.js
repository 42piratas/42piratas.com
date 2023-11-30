(() => {
  // Custom cursors
  let lastMouseX = 0;
  let lastMouseY = 0;
  const customCursor = document.querySelector(".custom_cursor.default");

  if (!customCursor) return;

  // update function for cursor
  const updateCursorPosition = () => {
    customCursor.style.top = `${window.scrollY + lastMouseY}px`;
    customCursor.style.left = `${window.scrollX + lastMouseX}px`;
  };
  document.body.addEventListener("mouseenter", () => {
    customCursor.style.display = "";
  });
  document.body.addEventListener("mouseleave", () => {
    customCursor.style.display = "none";
  });
  document.body.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    lastMouseX = clientX;
    lastMouseY = clientY;
    updateCursorPosition();
  });
  window.addEventListener("scroll", () => {
    updateCursorPosition();
  });
  document.querySelectorAll("a, button").forEach((clickElem) => {
    clickElem.addEventListener("mouseover", () => {
      customCursor.classList.add("click");
    });
    clickElem.addEventListener("mouseleave", () => {
      customCursor.classList.remove("click");
    });
  });
  document.querySelectorAll("input, textarea").forEach((writeElem) => {
    writeElem.addEventListener("mouseover", () => {
      customCursor.classList.add("write");
    });
    writeElem.addEventListener("mouseleave", () => {
      customCursor.classList.remove("write");
    });
  });
})();
