/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/**
 * This function gets search text and adds it google search.
 * Then redirects the web page to google search results page.
 */
function googleSearchPageRedirect() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("searchItem").value;

  //generate the link
  var linkString = "https://www.google.com/search?q=" + inputVal;

  // Displaying an alert
  alert("Redirecting to Google results...");

  //redirect web page
  location.href = linkString;
}
