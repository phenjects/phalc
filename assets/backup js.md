function createButtons() {
  const rowOneAtt = [
    { id: "7", text: "7" },
    { id: "8", text: "8" },
    { id: "9", text: "9" },
  ];
  const rowTwoAtt = [
    { id: "4", text: "4" },
    { id: "5", text: "5" },
    { id: "6", text: "6" },
  ];
  const rowThreeAtt = [
    { id: "1", text: "7" },
    { id: "2", text: "8" },
    { id: "3", text: "9" },
  ];

  rowOneAtt.forEach((rowOneFunc) => {
    const rowOneCreate = document.createElement("button");
    rowOneCreate.setAttribute("id", rowOneFunc.id);
    rowOneCreate.innerHTML = rowOneFunc.text;
    document.getElementById("rowoneDIV").appendChild(rowOneCreate);
  });

  rowTwoAtt.forEach((rowTwoFunc) => {
    const rowTwoCreate = document.createElement("button");
    rowTwoCreate.setAttribute("id", rowTwoFunc.id);
    rowTwoCreate.innerHTML = rowTwoFunc.text;
    document.getElementById("rowtwoDIV").appendChild(rowTwoCreate);
  });

  rowThreeAtt.forEach((rowThreeFunc) => {
    const rowThreeCreate = document.createElement("button");
    rowThreeCreate.setAttribute("id", rowThreeFunc.id);
    rowThreeCreate.innerHTML = rowThreeFunc.text;
    document.getElementById("rowthreeDIV").appendChild(rowThreeCreate);
  });
}

createButtons();
