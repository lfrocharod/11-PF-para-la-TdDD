// Get references to the HTML elements
const addCsvButton = document.getElementById("add-csv-button");
const showCsvButton = document.getElementById("show-csv-button");
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");
const showButton = document.getElementById("show-button");

// Attach event listeners to the buttons
addCsvButton.addEventListener("click", handleAddCsvButtonClick);
showCsvButton.addEventListener("click", handleShowCsvButtonClick);
editButton.addEventListener("click", handleEditButtonClick);
deleteButton.addEventListener("click", handleDeleteButtonClick);
showButton.addEventListener("click", handleShowButtonClick);

// Handle "Añadir .csv" button click
function handleAddCsvButtonClick() {
    // Create file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv';
    
    // Add event listener to file input element
    fileInput.addEventListener('change', handleFileInputChange);
    
    // Click file input element
    fileInput.click();
  }
  
  // Handle file input change
  function handleFileInputChange(event) {
    // Get selected file
    const file = event.target.files[0];
    
    // Create file reader object
    const reader = new FileReader();
    
    // Add event listener to file reader object
    reader.addEventListener('load', handleFileLoad);
    
    // Read file as text
    reader.readAsText(file);
  }
  
  // Handle file load
  function handleFileLoad(event) {
    // Get file content
    const content = event.target.result;
    
    // Split content into rows
    const rows = content.split('\n');
    
    // Split first row into column headers
    const headers = rows[0].split(',');
    
    // Create table element
    const table = document.createElement('table');
    
    // Add headers row to table
    const headersRow = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headersRow.appendChild(th);
    });
    table.appendChild(headersRow);
    
    // Add data rows to table
    for (let i = 1; i < rows.length; i++) {
      const data = rows[i].split(',');
      if (data.length === headers.length) {
        const dataRow = document.createElement('tr');
        data.forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          dataRow.appendChild(td);
        });
        table.appendChild(dataRow);
      }
    }
    
    // Add table to container
    const container = document.querySelector('.container');
    container.insertBefore(table, container.lastElementChild);
  }

  