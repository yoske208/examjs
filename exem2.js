let newArr1 = []

function Mission1 (arr){
    for(let i = 0; i< arr.length ; i++){
        if(i % 2 === 0){
           newArr1.push(i)
        }
    }
    console.log(newArr1);
    
}

Mission1([1,2,3,4,5,6]);

function Mission2(string) {
    const words = string.split(' ');
    
    const numwords = words.filter(x => x.length === 4).length;
    
    console.log(numwords);
    return numwords;
    
}
Mission2("trtr dfghj ewew dsf sdfdfsdfd dssd")

function Mission3(str1,str2){
    const str3 = []
    for(let i =0 ;i < str1.length;i++){
        str3.push(str1[i])
    }
    for(let i =0 ;i < str2.length;i++){
        str3.push(str2[i])
    }

    console.log(str3);
    
    return str3

}
Mission3(['fsdf', 'sdfsdf '],['fds', 'ddf', 'fds', 'ffsd', 'kikf'] )

function Mission4(num){
    let up = true 
    let doun = true
    for(let i = 1;i < num.length; i++){
        if(num[i] > num[i -1]){ 
            doun = false
        }
        if(num[i] < num[i -1]){ 
            up = false
        }
    }
    if(up)return 1
    if(doun)return 2
    return 0
}
console.log(Mission4([1,2,3,4,5]));









































