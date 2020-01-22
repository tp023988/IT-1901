//var oldText = document.querySelector("h1").innerHTML
function function_2()
{
  //console.log("internal script")
  //alert("internal alert")
  let oldText = document.querySelector("h1").innerHTML
  if(oldText.includes("(C1 358)"))
  {
      oldText = "introduction to web (C1 352)";
      document.querySelector(".schedule").style.color = "red"
  }
  else
  {
      console.log("text is already changed")
  }
  document.querySelector("h1").innerHTML = oldText
}
