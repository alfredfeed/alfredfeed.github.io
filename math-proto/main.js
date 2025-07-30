const API_URL = "https://script.google.com/macros/s/AKfycbzA7ozclTN_CKVNH3oBBge3RPKfaW_JgZVgMum3oj-thTt4g-jpLM3vRkqEkwYlZeXL/exec";
async function load() {
  const resp = await fetch(API_URL);
  const problems = await resp.json();
  const table = document.getElementById("problems");
  table.innerHTML = `
    <tr>
      <th>ID</th><th>Contest</th><th>Year</th><th>Problem</th><th>PDF</th>
    </tr>`;
  problems.forEach(p => {
    table.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.contest}</td>
        <td>${p.year}</td>
        <td>${p.problem_no}</td>
        <td><a href="${p.pdf_url}" target="_blank">View PDF</a></td>
      </tr>`;
  });
}
load();
