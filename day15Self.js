let lista=[{ name: 'Charlie', city: 'New York', age: 20 },
    { name: 'Alice', city: 'London', age: 15 },
    { name: 'Bob', city: 'Paris', age: 39 },
    { name: 'Nicolas', city: 'Santiago', age: 30},
    { name: 'Sandra', city: 'Santiago', age: 60},
    { name: 'Harvey', city: 'New York', age: 34}];
let lista2=[...lista];

function sorting(data, sortBy){
    let data2=[...data];
    data2.sort((a,b)=>{ 
        if(typeof(data[0][sortBy])==="string"){        
            return a[sortBy].localeCompare(b[sortBy])}
        if(typeof(data[0][sortBy])==="number"){
            return a[sortBy]- b[sortBy]}
    })
    

    
}

sorting(lista, "age");