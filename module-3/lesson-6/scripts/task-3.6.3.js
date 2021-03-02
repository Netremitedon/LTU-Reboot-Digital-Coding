var hoverElement = document.getElementById('hoverExample');
// console.log(hoverElement);
function alertBox(event){
    // console.log(event);
    alert('You hovered over my image');
}
hoverElement.addEventListener('mouseover',alertBox);