function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("theInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    document.getElementById("list").style.display ="block";
    li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            // console.log(txtValue);
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }

}

function displayResturants(){
    document.getElementsById("list").style.display = "block";
}

function createAccount(){
    window.location.href = "../HTML/profile New.html ";
}