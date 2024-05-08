async function add()
{
    let value=document.getElementById("i1").value;
    let response=await fetch("https://data.covid19india.org/state_district_wise.json");
    let data=await response.json();
    let list=document.getElementById("result")

    if(data[value])
    {
        let setData=data[value];
        for(let district in setData.districtData)
        {
             let districtData=setData.districtData[district];
             let row=list.insertRow();
             let cell1=row.insertCell(0);
             let cell2=row.insertCell(1);
             let cell3=row.insertCell(2);
             let cell4=row.insertCell(3);
             let cell5=row.insertCell(4);

             cell1.textContent=district;
             cell2.textContent=districtData.confirmed;
             cell3.textContent=districtData.active;
             cell4.textContent=districtData.recovered;
             cell5.textContent=districtData.deceased;
             
        }
    }
   
}