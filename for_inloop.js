var myself={firstName:'Shahadat', middleName:'Hossain', lastName:'Hridoy',age:'23',dasignation:'engineer'};
for (let props in myself){
    console.log(props);//props only showes propertys 
    console.log(myself[props]);
}