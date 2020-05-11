/*Prikazivanje/Skrivanje dropdown menu-a*/
function ButtonFunction()
{
    document.getElementById("ButtonDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropBTN')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/*Prikazivanje Inputa za tezinu/Skrivanje Inputa i Outputa za duzinu*/
function WeightFunction()
{
    document.getElementById("WeightForm").style.visibility = 'visible';
    document.getElementById("WeightForm").style.display = 'block';
    document.getElementById("LengthForm").style.display = 'none';
    document.getElementById("LengthOutput").style.display = 'none';
}
function LengthFunction()
{
    document.getElementById("LengthForm").style.visibility = "visible";
    document.getElementById("LengthForm").style.display = 'block';
    document.getElementById("WeightForm").style.display = 'none';
    document.getElementById("WeightOutput").style.display = 'none';
}

/*Koristenje WindowOnload opcije, jer se koristi eksterni JS file*/
window.onload = function ()
{
  /*Skrivanje Ouputa Tezine*/
  document.getElementById("WeightOutput").style.display = 'none';
  document.getElementById('GramInput').addEventListener('input',function (g)
  {
      /*Prikaz Ouputa Tezine*/
      document.getElementById("WeightOutput").style.display = 'block';
      let grams = g.target.value;
      document.getElementById("MgOutput").innerHTML = grams * 1000;
      document.getElementById("KgOutput").innerHTML = grams / 1000;
      document.getElementById("IbsOutput").innerHTML = grams / 453.59237;
      document.getElementById("OzOutput").innerHTML = grams / 28.34952;
  });
  /*Skrivanje Outputa Duzine*/
  document.getElementById("LengthOutput").style.display = 'none';
  document.getElementById('MeterInput').addEventListener('input',function(m)
  {
    /*Prikaz Outputa Duzine*/
    document.getElementById("LengthOutput").style.display = 'block';
    let meters = m.target.value;
    document.getElementById("MmOutput").innerHTML = meters / 0.0010000;
    document.getElementById("CmOutput").innerHTML = meters / 0.010000;
    document.getElementById("KmOutput").innerHTML = meters / 1000;
    document.getElementById("InOutput").innerHTML = meters / 0.0254;
  })


}


