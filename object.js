
//object
var student1 ={"Chinese":70,"English":80,"Math":90,"Soci":60,"PhCh":50};

//class
class Student{
    constructor(_name,_Chinese,_English,_Math,_Soci,_PhCh){
        this.name=_name;
        this.Chinese=_Chinese;
        this.English=_English;
        this.Math=_Math;
        this.Soci=_Soci;
        this.PhCh=_PhCh;
    }
    printname(){
        console.log(this.name);
    }
    avg(){
        var sum=this.Chinese+this.English+this.Math+this.Soci+this.PhCh;
        console.log(this.name+"score avg:"+sum/5);
}
}
var MD2=[];
//var s1 = new Student("chen",70,80,90,60,80);
//var s2 = new Student("chan",70,80,90,60,80);
MD2.push(new Student("chen",70,80,90,60,80));
MD2.push(new Student("chan",70,80,90,60,80));
MD2.push(new Student("yeh",85,86,87,89,90));

//chinese avg  
var sum=0;
for(let i=0;i<MD2.length;i++){
    sum += MD2[i].Chinese;
}
var avg=sum/MD2.length;

MD2[1].printname();
MD2[1].avg();
