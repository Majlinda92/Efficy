const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {

  }
  start() {
      // Start modifying the form elements here!
      // You are allowed to add extra methods, properties or change the constructor of this class

      // Get SELECT and INPUT parameters and values
      var select = document.querySelector("[name='status']");
      var input = document.querySelector("[name='success']");

      // Populate the different HTML options to the select tag
      for(var i=0; i<oppoStatus.length; i++){
          // Create a new <option> element
          var options = document.createElement('option');
          // Fill the value="" part
          options.value = oppoStatus[i].STATUS;
          // Fill the displayed text
          options.innerHTML = oppoStatus[i].STATUS;
          // Add it to the existing SELECT tag
          select.appendChild(options);
      }

      // Get the result of status in GET parameter
      var successValue = new URL(window.location.href).searchParams.get("status");

      // Find the corresponding oppoStatus values
      var successArray = oppoStatus.find(element => element.STATUS == successValue);

      // Put the SELECT value back to what it was
      select.selectedIndex = successArray.K_OPPO_STATUS-1;

      // Put the SUCCESS value from oppoStatus into the INPUT value
      input.value = successArray.SUCCESS;

      // Send the JSON on page 
      var successJSON =
      {
          "status": successArray.K_OPPO_STATUS,
          "success": successArray.SUCCESS        
      }
  var output = document.querySelector("[class='output']");
  output.innerHTML = JSON.stringify(successJSON);

  }
}

const fc = new FormComponent();
fc.start();
