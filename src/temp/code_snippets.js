db.collection('quotes').where('category', '==', 'Life').get().then((data) => {
    console.log(data.size);
    data.forEach((item)=>{
        console.log(item.data())
    })
}).catch((error) => {
    console.log(error);
})