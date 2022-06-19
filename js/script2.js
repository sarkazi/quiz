



//let checkMark1 = document.getElementById('check-item__mark1');
//let checkMark2 = document.getElementById('check-item__mark2');
//let checkMark3 = document.getElementById('check-item__mark3');
//let checkMark4 = document.getElementById('check-item__mark4');
//let checkMark5 = document.getElementById('check-item__mark5');
//let checkMark6 = document.getElementById('check-item__mark6');
//let checkMark7 = document.getElementById('check-item__mark7');
//let checkMark8 = document.getElementById('check-item__mark8');
//let checkMark9 = document.getElementById('check-item__mark9');
//let checkMark10 = document.getElementById('check-item__mark10');
//let checkMark11 = document.getElementById('check-item__mark11');
//let checkMark12 = document.getElementById('check-item__mark12');





//document.getElementById('mark-item1').onclick = function () {
//   window.event.preventDefault();
//   checkMark1.classList.toggle('replacement');
//}
//document.getElementById('mark-item2').onclick = function () {
//   window.event.preventDefault();
//   checkMark2.classList.toggle('replacement');
//}
//document.getElementById('mark-item3').onclick = function () {
//   window.event.preventDefault();
//   checkMark3.classList.toggle('replacement');
//}
//document.getElementById('mark-item4').onclick = function () {
//   window.event.preventDefault();
//   checkMark4.classList.toggle('replacement');
//}
//document.getElementById('mark-item5').onclick = function () {
//   window.event.preventDefault();
//   checkMark5.classList.toggle('replacement');
//}
//document.getElementById('mark-item6').onclick = function () {
//   window.event.preventDefault();
//   checkMark6.classList.toggle('replacement');
//}
//document.getElementById('mark-item7').onclick = function () {
//   window.event.preventDefault();
//   checkMark7.classList.toggle('replacement');
//}
//document.getElementById('mark-item8').onclick = function () {
//   window.event.preventDefault();
//   checkMark8.classList.toggle('replacement');
//}
//document.getElementById('mark-item9').onclick = function () {
//   window.event.preventDefault();
//   checkMark9.classList.toggle('replacement');
//}
//document.getElementById('mark-item10').onclick = function () {
//   window.event.preventDefault();
//   checkMark10.classList.toggle('replacement');
//}
//document.getElementById('mark-item11').onclick = function () {
//   window.event.preventDefault();
//   checkMark11.classList.toggle('replacement');
//}
//document.getElementById('mark-item12').onclick = function () {
//   window.event.preventDefault();
//   checkMark12.classList.toggle('replacement');
//}







window.onload = function () {
   var inp = document.getElementsByName('checkbox-page2');
   var chk_boxes = [];
   var cnt = 0;
   for (var ee = 0; ee < inp.length; ++ee) {
      var e = inp[ee];
      if (e.type !== 'checkbox') continue;
      chk_boxes.push(e);
      e.addEventListener('change', function () {
         var need = false, state;
         if (this.checked) {
            ++cnt;
            need = cnt === 3;
            state = true;
         }
         else {
            --cnt;
            need = cnt === 2;
            state = false;
         }
         if (need) {
            chk_boxes.forEach(function (c) {
               if (!c.checked) {
                  c.disabled = state;
               }
            });
         }
      })
   }
};



let mark1 = document.getElementById('check-item__mark1');
let mark2 = document.getElementById('check-item__mark2');
let mark3 = document.getElementById('check-item__mark3');
let mark4 = document.getElementById('check-item__mark4');
let mark5 = document.getElementById('check-item__mark5');
let mark6 = document.getElementById('check-item__mark6');
let mark7 = document.getElementById('check-item__mark7');
let mark8 = document.getElementById('check-item__mark8');
let mark9 = document.getElementById('check-item__mark9');
let mark10 = document.getElementById('check-item__mark10');
let mark11 = document.getElementById('check-item__mark11');
let mark12 = document.getElementById('check-item__mark12');

let itemMark1 = document.getElementById('mark-item1');
let itemMark2 = document.getElementById('mark-item2');
let itemMark3 = document.getElementById('mark-item3');
let itemMark4 = document.getElementById('mark-item4');
let itemMark5 = document.getElementById('mark-item5');
let itemMark6 = document.getElementById('mark-item6');
let itemMark7 = document.getElementById('mark-item7');
let itemMark8 = document.getElementById('mark-item8');
let itemMark9 = document.getElementById('mark-item9');
let itemMark10 = document.getElementById('mark-item10');
let itemMark11 = document.getElementById('mark-item11');
let itemMark12 = document.getElementById('mark-item12');



mark1.onchange = function () {
   if (this.checked) {
      itemMark1.style.backgroundColor = '#fff';
      itemMark1.style.outline = '1px solid #EB3D35';
   } else {
      itemMark1.style.backgroundColor = '#f3f6f9';
      itemMark1.style.outline = 'none';
   }
}
mark2.onchange = function () {
   if (this.checked) {
      itemMark2.style.backgroundColor = '#fff';
      itemMark2.style.outline = '1px solid #EB3D35';
   } else {
      itemMark2.style.backgroundColor = '#f3f6f9';
      itemMark2.style.outline = 'none';
   }
}
mark3.onchange = function () {
   if (this.checked) {
      itemMark3.style.backgroundColor = '#fff';
      itemMark3.style.outline = '1px solid #EB3D35';
   } else {
      itemMark3.style.backgroundColor = '#f3f6f9';
      itemMark3.style.outline = 'none';
   }
}
mark4.onchange = function () {
   if (this.checked) {
      itemMark4.style.backgroundColor = '#fff';
      itemMark4.style.outline = '1px solid #EB3D35';
   } else {
      itemMark4.style.backgroundColor = '#f3f6f9';
      itemMark4.style.outline = 'none';
   }
}
mark5.onchange = function () {
   if (this.checked) {
      itemMark5.style.backgroundColor = '#fff';
      itemMark5.style.outline = '1px solid #EB3D35';
   } else {
      itemMark5.style.backgroundColor = '#f3f6f9';
      itemMark5.style.outline = 'none';
   }
}
mark6.onchange = function () {
   if (this.checked) {
      itemMark6.style.backgroundColor = '#fff';
      itemMark6.style.outline = '1px solid #EB3D35';
   } else {
      itemMark6.style.backgroundColor = '#f3f6f9';
      itemMark6.style.outline = 'none';
   }
}
mark7.onchange = function () {
   if (this.checked) {
      itemMark7.style.backgroundColor = '#fff';
      itemMark7.style.outline = '1px solid #EB3D35';
   } else {
      itemMark7.style.backgroundColor = '#f3f6f9';
      itemMark7.style.outline = 'none';
   }
}
mark8.onchange = function () {
   if (this.checked) {
      itemMark8.style.backgroundColor = '#fff';
      itemMark8.style.outline = '1px solid #EB3D35';
   } else {
      itemMark8.style.backgroundColor = '#f3f6f9';
      itemMark8.style.outline = 'none';
   }
}
mark9.onchange = function () {
   if (this.checked) {
      itemMark9.style.backgroundColor = '#fff';
      itemMark9.style.outline = '1px solid #EB3D35';
   } else {
      itemMark9.style.backgroundColor = '#f3f6f9';
      itemMark9.style.outline = 'none';
   }
}
mark10.onchange = function () {
   if (this.checked) {
      itemMark10.style.backgroundColor = '#fff';
      itemMark10.style.outline = '1px solid #EB3D35';
   } else {
      itemMark10.style.backgroundColor = '#f3f6f9';
      itemMark10.style.outline = 'none';
   }
}
mark11.onchange = function () {
   if (this.checked) {
      itemMark11.style.backgroundColor = '#fff';
      itemMark11.style.outline = '1px solid #EB3D35';
   } else {
      itemMark11.style.backgroundColor = '#f3f6f9';
      itemMark11.style.outline = 'none';
   }
}
mark12.onchange = function () {
   if (this.checked) {
      itemMark12.style.backgroundColor = '#fff';
      itemMark12.style.outline = '1px solid #EB3D35';
   } else {
      itemMark12.style.backgroundColor = '#f3f6f9';
      itemMark12.style.outline = 'none';
   }
}