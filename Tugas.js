var row=1;

var entry = document.getElementById("simpan");
entry.addEventListener("click",displayDetails);
 
function displayDetails(){
	var Nama=document.getElementById("Nama").value;
	var umur=document.getElementById("umur").value;
	var Telepon=document.getElementById("Telepon").value;
	var Email=document.getElementById("Email").value;
	var Mapel=document.getElementById("Mapel").value;

	if(!Nama|| !umur|| !Telepon|| !Email || !Mapel){
		alert("Anda Belum Menyelesaikan Pengisian Data Ini");
		return;
	}
	else{
		alert("Data Tersimpan")
	}

	var display = document.getElementById("display");

	var newRow = display.insertRow(row);

	var cell1=newRow.insertCell(0);
	var cell2=newRow.insertCell(1);
	var cell3=newRow.insertCell(2);
	var cell4=newRow.insertCell(3);
	var cell5=newRow.insertCell(4);

	cell1.innerHTML=Nama;
	cell2.innerHTML=umur;
	cell3.innerHTML=Telepon;
	cell4.innerHTML=Email;
	cell5.innerHTML=Mapel;

	row++;
}