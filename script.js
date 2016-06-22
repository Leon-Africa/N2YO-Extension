if (document.title.indexOf("LIVE REAL TIME SATELLITE TRACKING AND PREDICTIONS:") != -1) {
  setupElements();

  // When #satname is updated (when any data in the table changes) run updateElements()
  $('#satname').bind("DOMNodeInserted", function() {
    updateElements();
  });
}

var root;
var elevation, azimuth, local, utc;
var elevationSrc, azimuthSrc, azimuthcmpSrc, localSrc, utcSrc;

function setupElements() {
  // Create and style root element
  root = document.createElement("div");
  root.style.marginTop = "25px";
  root.style.marginLeft = "-5px";

  // Create other elements
  elevation = newElement("Elevation: ", "h1");
  azimuth = newElement("Azimuth: ", "h1");
  local = newElement("Local: ", "h3");
  utc = newElement("UTC: ", "h3");

  // Append elements to root element
  root.appendChild(elevation);
  root.appendChild(azimuth);
  root.appendChild(document.createElement("br"));
  root.appendChild(document.createElement("br"));
  root.appendChild(document.createElement("br"));
  root.appendChild(local);
  root.appendChild(utc);

  // Setup data sources
  elevationSrc = document.getElementById('satel');
  azimuthSrc = document.getElementById('sataz');
  azimuthcmpSrc = document.getElementById('satazcmp');
  localSrc = document.getElementById('localtime');
  utcSrc = document.getElementById('utctime');

  // Append root div element to page (under map)
  document.getElementById("map").appendChild(root);
}

function newElement(placeholder, tag) {
  // Create elements and nodes
  element = document.createElement(tag);
  text = document.createTextNode(placeholder);

  element.style.border = "solid black";
  element.style.display = "inline";
  element.style.padding = "10px 10px 10px 10px";
  element.style.marginLeft = "15px";

  element.appendChild(text);

  return element;
}

function updateElements() {
  elevation.innerHTML = "Elevation: " + elevationSrc.innerHTML + "°";
  elevation.style.backgroundColor = elevationSrc.style.backgroundColor;

  azimuth.innerHTML = "Azimuth: " + azimuthSrc.innerHTML + "° (" + azimuthcmpSrc.innerHTML +  ")";

  local.innerHTML = localSrc.innerHTML + " Local";

  utc.innerHTML = utcSrc.innerHTML + " UTC";
}
