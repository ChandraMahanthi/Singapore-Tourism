const person = document.getElementById('person');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const checkbox4 = document.getElementById('checkbox4');
const checkbox5 = document.getElementById('checkbox5');
const checkbox6 = document.getElementById('checkbox6');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const staydays = document.getElementById('staydays')
let CheckBox = [checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6];
let CheckBox1 = [yes,no];
function calculateCost()
{
    event.preventDefault();
    count = 0;
    sum = 0;
    const Staydays = parseInt(staydays.value);
    const Person = parseInt(person.value);
    for(i=0;i<CheckBox.length;i++)
    {
        if(CheckBox[i].checked==true)
        {
            sum=sum+parseInt(CheckBox[i].value);
            count=count+1;
        }
    }
    if(CheckBox1[0].checked==true)
    {
        const StayCost = Staydays*(Person*150);
        const TotalCost = sum + StayCost;
        document.getElementById('output').innerHTML=`Your preferred package $${TotalCost}`;
    }
    if(CheckBox1[1].checked==true)
    {
        const StayCost = Person*150;
        const TotalCost = sum + StayCost;
        document.getElementById('output').innerHTML=`Your preferred package $${TotalCost}`;
    }   
}